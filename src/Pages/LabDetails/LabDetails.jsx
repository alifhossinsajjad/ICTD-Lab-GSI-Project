import { useState, useEffect, useMemo, useCallback, memo } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaBuilding,
  FaLocationArrow,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Custom marker icon
const customIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const currentLocationIcon = L.icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/9356/9356230.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Component to recenter map
const ChangeMapView = memo(({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom, {
        animate: true,
        duration: 1,
      });
    }
  }, [center, zoom, map]);
  return null;
});

// Memoized Lab List Item
const LabListItem = memo(({ lab, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.3) }}
      onClick={() => onSelect(lab)}
      className="p-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-emerald-50 hover:to-teal-50 rounded-xl border-2 border-gray-200 hover:border-emerald-300 cursor-pointer transition-all shadow-sm hover:shadow-md"
    >
      <h4 className="font-semibold text-sm text-gray-900 mb-1 line-clamp-2">
        {lab.institute}
      </h4>
      <div className="flex items-center gap-2 text-xs text-gray-600">
        <FaMapMarkerAlt className="text-emerald-600" />
        <span>{lab.upazila}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
        <FaUser className="text-blue-600" />
        <span className="line-clamp-1">{lab.head}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
        <FaPhone className="text-green-600" />
        <span>{lab.mobile}</span>
      </div>
      {lab.distance && (
        <div className="mt-1 text-xs font-semibold text-emerald-600">
          {lab.distance.toFixed(2)} km away
        </div>
      )}
    </motion.div>
  );
});

const LabDetails = () => {
  const [labs, setLabs] = useState([]);
  const [filteredLabs, setFilteredLabs] = useState([]);
  const [selectedLab, setSelectedLab] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [distance, setDistance] = useState(5);
  const [mapCenter, setMapCenter] = useState([23.8103, 90.4125]);
  const [mapZoom, setMapZoom] = useState(8);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [address, setAddress] = useState("");
  const [isFetchingAddress, setIsFetchingAddress] = useState(false);

  // Selected Lab Icon (Blue & Pulsing) - Memoized
  const selectedIcon = useMemo(
    () =>
      L.divIcon({
        html: `
            <div class="relative flex items-center justify-center">
                <div class="absolute w-10 h-10 bg-blue-500 rounded-full opacity-40 animate-ping"></div>
                <div class="relative w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-2xl animate-pulse flex items-center justify-center">
                    <div class="w-3 h-3 bg-white rounded-full shadow-inner"></div>
                </div>
                <div class="absolute -bottom-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-blue-600"></div>
            </div>
        `,
        className: "custom-selected-marker",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
      }),
    []
  );

  useEffect(() => {
    // Fetch lab data
    fetch("/srd-data.json")
      .then((res) => res.json())
      .then((data) => {
        // Sanitize coordinates more efficiently
        const sanitizedData = data.map((lab) => {
          let lat = lab.lat;
          let long = lab.long;
          if (Math.abs(lat) > 90) {
            [lat, long] = [long, lat];
          }
          return { ...lab, lat, long };
        });
        setLabs(sanitizedData);
        setFilteredLabs(sanitizedData.slice(0, 400));
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Fetch address from coordinates - debounced
  useEffect(() => {
    if (selectedLab && selectedLab.lat && selectedLab.long) {
      setAddress("");
      setIsFetchingAddress(true);

      const timer = setTimeout(() => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${selectedLab.lat}&lon=${selectedLab.long}`,
          {
            headers: {
              "User-Agent": "SRD-Lab-Locator/1.0",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            setAddress(data.display_name || "Address not found");
            setIsFetchingAddress(false);
          })
          .catch((error) => {
            console.error("Error fetching address:", error);
            setAddress("Error fetching address");
            setIsFetchingAddress(false);
          });
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [selectedLab]);

  // Calculate distance - memoized function
  const calculateDistance = useCallback((lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }, []);

  // Get current location
  const getCurrentLocation = useCallback(() => {
    setIsLoadingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const location = [latitude, longitude];
          setCurrentLocation(location);
          setMapCenter(location);
          setMapZoom(13);

          // Filter labs by distance
          const nearby = labs
            .map((lab) => ({
              ...lab,
              distance: calculateDistance(
                latitude,
                longitude,
                lab.lat,
                lab.long
              ),
            }))
            .filter(
              (lab) =>
                lab.distance <= distance && lab.lat !== 0 && lab.long !== 0
            )
            .sort((a, b) => a.distance - b.distance);

          setFilteredLabs(nearby);
          setIsLoadingLocation(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get your location. Please enable location services."
          );
          setIsLoadingLocation(false);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
      setIsLoadingLocation(false);
    }
  }, [labs, distance, calculateDistance]);

  // Handle distance change
  const handleDistanceChange = useCallback(
    (newDistance) => {
      setDistance(newDistance);
      if (currentLocation) {
        const nearby = labs
          .map((lab) => ({
            ...lab,
            distance: calculateDistance(
              currentLocation[0],
              currentLocation[1],
              lab.lat,
              lab.long
            ),
          }))
          .filter(
            (lab) =>
              lab.distance <= newDistance && lab.lat !== 0 && lab.long !== 0
          )
          .sort((a, b) => a.distance - b.distance);

        setFilteredLabs(nearby);
      }
    },
    [currentLocation, labs, calculateDistance]
  );

  // Handle lab selection
  const handleLabSelect = useCallback((lab) => {
    setSelectedLab(lab);
    if (lab.lat && lab.long && lab.lat !== 0 && lab.long !== 0) {
      setMapCenter([lab.lat, lab.long]);
      setMapZoom(15);
    }
  }, []);

  // Memoize visible labs for map (limit to prevent performance issues)
  const visibleMapLabs = useMemo(() => {
    return filteredLabs.slice(0, 100); // Show max 100 markers on map
  }, [filteredLabs]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-3 pb-2 px-12 relative">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent ">
            আমাদের ল্যাব সমূহ
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Left Sidebar - Lab Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 p-6 max-h-[calc(100vh-120px)]">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBuilding className="text-emerald-600" />
                Lab Information
              </h2>

              {selectedLab ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-4 border-2 border-emerald-200">
                    <h3 className="font-bold text-lg text-emerald-800 mb-3">
                      {selectedLab.institute}
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-emerald-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            District
                          </p>
                          <p className="text-gray-900">
                            {selectedLab.district}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-teal-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            Upazila
                          </p>
                          <p className="text-gray-900">{selectedLab.upazila}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaUser className="text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            Head
                          </p>
                          <p className="text-gray-900">{selectedLab.head}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaPhone className="text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            Phone
                          </p>
                          <a
                            href={`tel:${selectedLab.mobile}`}
                            className="text-green-600 hover:text-green-700 font-medium"
                          >
                            {selectedLab.mobile}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaEnvelope className="text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            Email
                          </p>
                          <a
                            href={`mailto:${selectedLab.email}`}
                            className="text-red-600 hover:text-red-700 text-sm break-all"
                          >
                            {selectedLab.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-orange-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-gray-700">
                            Address (from GPS)
                          </p>
                          {isFetchingAddress ? (
                            <p className="text-gray-500 text-sm animate-pulse">
                              Fetching address...
                            </p>
                          ) : (
                            <p className="text-gray-900 text-sm leading-relaxed">
                              {address || "N/A"}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-center py-12">
                  <FaBuilding className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Click on a marker to view lab details
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Center - Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6"
          >
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 h-[500px] xl:lg:h-[calc(100vh-180px)]  md:h-[calc(50vh-180px)] sticky top-[72px]">
              <MapContainer
                center={mapCenter}
                zoom={8}
                className="h-full w-full rounded-2xl"
                zoomControl={true}
              >
                <ChangeMapView center={mapCenter} zoom={mapZoom} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Current Location Marker */}
                {currentLocation && (
                  <Marker position={currentLocation} icon={currentLocationIcon}>
                    <Popup>
                      <div className="text-center">
                        <p className="font-bold text-blue-600">Your Location</p>
                        <p className="text-sm text-gray-600">
                          Lat: {currentLocation[0].toFixed(4)}
                          <br />
                          Long: {currentLocation[1].toFixed(4)}
                        </p>
                      </div>
                    </Popup>
                  </Marker>
                )}

                {/* Lab Markers - Limited for performance */}
                {visibleMapLabs.map((lab, index) => {
                  if (lab.lat === 0 || lab.long === 0 || !lab.lat || !lab.long)
                    return null;

                  return (
                    <Marker
                      key={`${lab.institute}-${index}`}
                      position={[lab.lat, lab.long]}
                      icon={
                        selectedLab?.institute === lab.institute
                          ? selectedIcon
                          : customIcon
                      }
                      eventHandlers={{
                        click: () => handleLabSelect(lab),
                      }}
                    >
                      <Popup>
                        <div className="min-w-[200px]">
                          <h3 className="font-bold text-emerald-700 mb-2">
                            {lab.institute}
                          </h3>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-semibold">District:</span>{" "}
                              {lab.district}
                            </p>
                            <p>
                              <span className="font-semibold">Upazila:</span>{" "}
                              {lab.upazila}
                            </p>
                            <p>
                              <span className="font-semibold">Head:</span>{" "}
                              {lab.head}
                            </p>
                            <p>
                              <span className="font-semibold">Phone:</span>{" "}
                              {lab.mobile}
                            </p>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  );
                })}
              </MapContainer>
              {filteredLabs.length > 100 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-amber-100 border-2 border-amber-400 text-amber-800 px-4 py-2 rounded-lg text-xs font-semibold shadow-lg">
                  Showing 100 of {filteredLabs.length} labs on map
                </div>
              )}
            </div>
          </motion.div>

          {/* Right Sidebar - Controls & Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3 space-y-4"
          >
            {/* Controls */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                Filters
              </h2>

              {/* Current Location Button */}
              <button
                onClick={getCurrentLocation}
                disabled={isLoadingLocation}
                className="cursor-pointer hover:scale-105 w-full mb-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaLocationArrow
                  className={isLoadingLocation ? "animate-spin" : ""}
                />
                {isLoadingLocation
                  ? "Getting Location..."
                  : "Use Current Location"}
              </button>

              {/* Distance Selector */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-600" />
                  Select Distance (km)
                </label>
                <select
                  value={distance}
                  onChange={(e) => handleDistanceChange(Number(e.target.value))}
                  className={`w-full ${
                    !currentLocation ? "opacity-50 cursor-not-allowed" : ""
                  } bg-gray-50 border-2 border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-600 outline-none transition-all shadow-sm hover:border-emerald-400`}
                  disabled={!currentLocation}
                >
                  {[1, 2, 3, 4, 5, 7, 10, 15, 20, 30, 50].map((km) => (
                    <option key={km} value={km}>
                      {km} km
                    </option>
                  ))}
                </select>
                {!currentLocation && (
                  <p className="text-xs text-gray-500 italic">
                    Enable location to use distance filter
                  </p>
                )}
              </div>

              {/* Results Count */}
              <div className="mt-4 p-3 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border-2 border-emerald-200">
                <p className="text-sm font-semibold text-emerald-800">
                  Found {filteredLabs.length} lab(s)
                </p>
              </div>
            </div>

            {/* Nearby Labs List */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-emerald-200 p-6 max-h-[400px] overflow-y-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nearby Labs
              </h3>

              <div className="space-y-3">
                {filteredLabs.map((lab, index) => (
                  <LabListItem
                    key={`${lab.institute}-${index}`}
                    lab={lab}
                    index={index}
                    onSelect={handleLabSelect}
                  />
                ))}

                {filteredLabs.length === 0 && (
                  <div className="text-center py-8">
                    <FaMapMarkerAlt className="text-4xl text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">
                      No labs found in this area
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
