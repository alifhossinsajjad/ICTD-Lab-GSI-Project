import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import {
  HiOutlineExclamationCircle,
  HiOutlineArrowLeft,
  HiOutlinePhotograph,
  HiOutlineX,
} from "react-icons/hi";

// Import Assets
import smartBoard from "../../../../../assets/complaint/smartboard.png";
import desktop from "../../../../../assets/complaint/desktop.png";
import attandence from "../../../../../assets/complaint/attandence.png";
import smartCard from "../../../../../assets/complaint/smartCard.png";
import wifi from "../../../../../assets/complaint/wifi.png";
import laptop from "../../../../../assets/complaint/laptop.png";
import smarttv from "../../../../../assets/complaint/smarttv.png";
import printer from "../../../../../assets/complaint/printer.png";
import scanneer from "../../../../../assets/complaint/scanner.png";
import webcam from "../../../../../assets/complaint/webcam.png";
import router from "../../../../../assets/complaint/router.png";
import networkswitch from "../../../../../assets/complaint/switch.png";
import internet from "../../../../../assets/complaint/internet.png";

const FilesComplaints = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const devices = [
    { name: "Laptop", icon: laptop },
    { name: "LED Smart TV", icon: smarttv },
    { name: "Printer", icon: printer },
    { name: "Scanner", icon: scanneer },
    { name: "Web Camera", icon: webcam },
    { name: "Router", icon: router },
    { name: "Network Switch", icon: networkswitch },
    { name: "Internet (6mo)", icon: internet },
  ];

  const schoolFeature = [
    { name: "Digital SmartBoard", icon: smartBoard },
    { name: "Desktop", icon: desktop },
    { name: "Attendance Machine", icon: attandence },
    { name: "Digital ID Card", icon: smartCard },
    { name: "Wi-Fi Router", icon: wifi },
  ];

  const openModal = (deviceName) => {
    setSelectedDevice(deviceName);
    setIsModalOpen(true);
    reset();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDevice("");
    reset();
  };

  const onSubmit = (data) => {
    const complaintData = {
      device: selectedDevice,
      ...data,
      screenshot: data.screenshot?.[0] || null,
    };
    console.log("Complaint submitted:", complaintData);
    alert(`Complaint submitted successfully for ${selectedDevice}!`);
    closeModal();
  };

  const InputGroup = ({ label, error, required, children }) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
  );

  const Input = ({ className, ...props }) => (
    <input
      className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm ${className}`}
      {...props}
    />
  );

  const Select = ({ className, children, ...props }) => (
    <select
      className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm ${className}`}
      {...props}
    >
      {children}
    </select>
  );

  const Textarea = ({ className, ...props }) => (
    <textarea
      className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm resize-none ${className}`}
      {...props}
    />
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              to="/dashboard/labsUnderControl"
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <HiOutlineArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">File a Complaint</h1>
          </div>
          <p className="text-gray-500 text-sm ml-7">
            Select a device or feature to report an issue
          </p>
        </div>
      </div>

      {/* Digital Devices Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-700">Digital Lab Devices</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {devices.map((device, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-5 flex flex-col items-center group cursor-pointer"
              onClick={() => openModal(device.name)}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center p-2 bg-gray-50 rounded-full group-hover:bg-emerald-50 transition-colors">
                <img
                  src={device.icon}
                  alt={device.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center font-semibold text-gray-800 mb-4 h-10 flex items-center leading-tight">
                {device.name}
              </h3>
              <button
                className="w-full py-2 px-4 rounded-lg bg-emerald-50 text-emerald-600 font-medium text-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <HiOutlineExclamationCircle className="w-4 h-4" />
                Report Issue
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* School Features Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-700">School Features</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {schoolFeature.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-5 flex flex-col items-center group cursor-pointer"
              onClick={() => openModal(feature.name)}
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center p-2 bg-gray-50 rounded-full group-hover:bg-emerald-50 transition-colors">
                <img
                  src={feature.icon}
                  alt={feature.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-center font-semibold text-gray-800 mb-4 h-10 flex items-center leading-tight">
                {feature.name}
              </h3>
              <button
                className="w-full py-2 px-4 rounded-lg bg-emerald-50 text-emerald-600 font-medium text-sm hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <HiOutlineExclamationCircle className="w-4 h-4" />
                Report Issue
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>

          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">

            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <HiOutlineExclamationCircle className="w-6 h-6 text-red-500" />
                  File Complaint
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Reporting issue for: <span className="font-semibold text-emerald-600">{selectedDevice}</span>
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <HiOutlineX className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-5">

                <InputGroup label="Device Status" error={errors.deviceStatus} required>
                  <Select
                    {...register("deviceStatus", { required: "Status is required" })}
                  >
                    <option value="">Select current status...</option>
                    <option value="not-working">Not Working (Completely)</option>
                    <option value="partially-working">Partially Working</option>
                    <option value="damaged">Physically Damaged</option>
                    <option value="missing">Missing / Stolen</option>
                    <option value="needs-repair">Maintenance Required</option>
                  </Select>
                </InputGroup>

                <InputGroup label="Affected Quantity" error={errors.quantity} required>
                  <Input
                    type="number"
                    {...register("quantity", {
                      required: "Quantity is required",
                      min: { value: 1, message: "Min quantity is 1" },
                      valueAsNumber: true
                    })}
                    placeholder="e.g. 1"
                  />
                </InputGroup>

                <InputGroup label="Problem Description" error={errors.problemDescription} required>
                  <Textarea
                    {...register("problemDescription", {
                      required: "Please describe the issue",
                      minLength: { value: 10, message: "Use at least 10 chars" }
                    })}
                    rows="4"
                    placeholder="Please describe exactly what is wrong..."
                  />
                </InputGroup>

                <div className="pt-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attach Evidence (Optional)
                  </label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-emerald-50 hover:border-emerald-400 transition-all">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <HiOutlinePhotograph className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG (MAX. 5MB)</p>
                      </div>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        {...register("screenshot")}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 rounded-b-2xl flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(onSubmit)}
                className="px-5 py-2.5 text-sm font-medium text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 shadow-sm hover:shadow transition-colors"
              >
                Submit Complaint
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default FilesComplaints;
