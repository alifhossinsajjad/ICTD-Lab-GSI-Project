import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineIdentification,
  HiOutlineSave,
  HiOutlineArrowLeft,
} from "react-icons/hi";
import { Link } from "react-router";

const LabsUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [needsConnection, setNeedsConnection] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully! Check console for data.");
  };

  const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-100">
      <div className="p-3 bg-green-900 rounded-xl text-white shadow-md">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );

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
      className={`w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all text-sm hover:border-gray-300 ${className}`}
      {...props}
    />
  );

  const Select = ({ className, children, ...props }) => (
    <select
      className={`w-full px-4 py-2.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all text-sm hover:border-gray-300 ${className}`}
      {...props}
    >
      {children}
    </select>
  );

  return (
    <div className="min-h-screen bg-emerald-50 p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link
              to="/dashboard/labsUnderControl"
              className="p-2 text-gray-400  bg-red-700 rounded-full transition-all"
            >
              <HiOutlineArrowLeft className="w-7 h-7 text-white hover:text-emerald-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-green-950">
                Update Lab Details
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2"></div>
            </div>
          </div>
          <p className="text-gray-600 text-sm ml-14">
            Update information for the selected computer lab
          </p>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex items-center gap-2 px-6 py-3 bg-green-900 hover:bg-green-950 text-white rounded-xl shadow-lg shadow-green-950/30 hover:shadow-xl transition-all font-semibold transform hover:-translate-y-0.5"
        >
          <HiOutlineSave className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="xl:col-span-2 space-y-6">
          {/* Institution Details Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineAcademicCap}
              title="Institution Information"
              subtitle="Basic details about the educational institution"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="Lab Type" error={errors.labType} required>
                <Select {...register("labType", { required: "Required" })}>
                  <option value="">Select Type</option>
                  <option value="guided">Guided Lab</option>
                  <option value="open">Open Lab</option>
                  <option value="specialized">Specialized Lab</option>
                </Select>
              </InputGroup>

              <InputGroup label="Stage" error={errors.stage} required>
                <Select {...register("stage", { required: "Required" })}>
                  <option value="">Select Stage</option>
                  <option value="1st">1st Phase</option>
                  <option value="2nd">2nd Phase</option>
                  <option value="3rd">3rd Phase</option>
                </Select>
              </InputGroup>

              <div className="md:col-span-2">
                <InputGroup label="Institution Name (Bengali)" required>
                  <Input
                    {...register("institutionNameBengali")}
                    placeholder="রাজারবাগ পলিটেকনিক ইন্সটিটিউট"
                  />
                </InputGroup>
              </div>

              <div className="md:col-span-2">
                <InputGroup label="Institution Name (English)">
                  <Input
                    {...register("institutionNameEnglish")}
                    placeholder="Rajabagan Polytechnic Munshikhanda Girls High School"
                  />
                </InputGroup>
              </div>

              {/* Connection Toggle */}
              <div className="md:col-span-2 p-4 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">
                    Connection Status
                  </h4>
                  <p className="text-xs text-gray-500">
                    Does the company name need to be connected?
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setNeedsConnection(!needsConnection)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${needsConnection ? "bg-emerald-600" : "bg-gray-200"
                    }`}
                >
                  <span
                    className={`${needsConnection ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </button>
              </div>

              {needsConnection && (
                <div className="md:col-span-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  <InputGroup label="Amended Organization Name">
                    <Input
                      {...register("amendedOrgName")}
                      placeholder="Enter amended name..."
                    />
                  </InputGroup>
                </div>
              )}
            </div>
          </div>

          {/* Demographic & Stats Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineIdentification}
              title="Demographics & Stats"
              subtitle="Student and teacher counts, EIIN, and classification"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <InputGroup label="Organization Type">
                <Select {...register("orgType")}>
                  <option value="general">General</option>
                  <option value="technical">Technical</option>
                  <option value="madrasa">Madrasa</option>
                </Select>
              </InputGroup>

              <InputGroup label="Level">
                <Select {...register("orgLevel")}>
                  <option value="secondary">Secondary</option>
                  <option value="higher">Higher Secondary</option>
                  <option value="primary">Primary</option>
                </Select>
              </InputGroup>

              <InputGroup label="EIIN Number">
                <Input {...register("einNumber")} placeholder="107008" />
              </InputGroup>

              <InputGroup label="Total Teachers">
                <Input
                  type="number"
                  {...register("totalTeachers")}
                  placeholder="0"
                />
              </InputGroup>

              <InputGroup label="Students (Boys)">
                <Input
                  type="number"
                  {...register("totalStudents1")}
                  placeholder="0"
                />
              </InputGroup>

              <InputGroup label="Students (Girls)">
                <Input
                  type="number"
                  {...register("totalStudents2")}
                  placeholder="0"
                />
              </InputGroup>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineOfficeBuilding}
              title="Contact Information"
              subtitle="Head of institution and communication details"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="Head of Institution">
                <Input {...register("headName")} placeholder="Name" />
              </InputGroup>

              <InputGroup label="Email">
                <Input
                  type="email"
                  {...register("companyEmail")}
                  placeholder="email@example.com"
                />
              </InputGroup>

              <InputGroup label="Mobile No.">
                <Input
                  type="tel"
                  {...register("orgMobile")}
                  placeholder="017..."
                />
              </InputGroup>

              <InputGroup label="Alt. Mobile No.">
                <Input
                  type="tel"
                  {...register("altMobile")}
                  placeholder="018..."
                />
              </InputGroup>
            </div>
          </div>
        </div>

        {/* Right Column - Location & Meta */}
        <div className="space-y-6">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineLocationMarker}
              title="Location Details"
              subtitle="Geographical and administrative location"
            />

            <div className="space-y-4">
              <InputGroup label="Division">
                <Select {...register("category")}>
                  <option value="chittagong">Chittagong</option>
                  <option value="dhaka">Dhaka</option>
                  <option value="sylhet">Sylhet</option>
                </Select>
              </InputGroup>

              <InputGroup label="District">
                <Select {...register("district")}>
                  <option value="lakshmipur">Lakshmipur</option>
                  <option value="dhaka">Dhaka</option>
                </Select>
              </InputGroup>

              <InputGroup label="Upazila">
                <Select {...register("upazila")}>
                  <option value="raipur">Raipur</option>
                  <option value="ramganj">Ramganj</option>
                </Select>
              </InputGroup>

              <InputGroup label="Union/Municipality">
                <Select {...register("union")}>
                  <option value="north">North Char Ababil</option>
                  <option value="south">South Char Ababil</option>
                </Select>
              </InputGroup>

              <InputGroup label="Ward No.">
                <Input {...register("wardNo")} placeholder="e.g. 5" />
              </InputGroup>
            </div>
          </div>

          {/* Parliamentary Seat Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h3 className="font-bold text-gray-800">Parliamentary Info</h3>
            </div>

            <div className="space-y-4">
              <InputGroup label="Seat Type">
                <Select {...register("parliamentarySeatType")}>
                  <option value="general">General</option>
                  <option value="reserved">Reserved</option>
                </Select>
              </InputGroup>

              <InputGroup label="Seat Number">
                <Input
                  {...register("parliamentarySeatNo")}
                  defaultValue="548"
                  readOnly
                  className="bg-gray-100 cursor-not-allowed"
                />
              </InputGroup>

              <InputGroup label="Constituency">
                <Select {...register("constituencyName")}>
                  <option value="women45">Women's seat-45</option>
                  <option value="general1">General Seat-1</option>
                </Select>
              </InputGroup>

              <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg">
                <p className="text-xs text-orange-700 leading-relaxed">
                  <strong>Note:</strong> Constituency name updates automatically
                  based on Union/Ward selection. Contact BNFE map office for
                  discrepancies.
                </p>
              </div>
            </div>
          </div>

          {/* Geo Coordinates Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h3 className="font-bold text-gray-800">Geo Coordinates</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <InputGroup label="Latitude">
                <Input {...register("latitude")} placeholder="23.01..." />
              </InputGroup>
              <InputGroup label="Longitude">
                <Input {...register("longitude")} placeholder="90.88..." />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsUpdate;
