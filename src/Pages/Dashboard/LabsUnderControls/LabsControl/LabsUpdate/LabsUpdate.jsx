import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineAcademicCap,
  HiOutlineIdentification,
  HiOutlineSave,
  HiOutlineArrowLeft,
} from "react-icons/hi";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const LabsUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [labData, setLabData] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const formatMobile = (mobile) => {
    if (!mobile) return "";
    const mobileStr = String(mobile);
    return mobileStr.startsWith("0") ? mobileStr : `0${mobileStr}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/labs/${id}`);
        const data = await response.json();

        if (id && data.data) {
          setLabData(data.data);
          console.log("Lab Data:", data.data);

          // Pre-fill form with lab data
          Object.keys(data.data).forEach((key) => {
            const value = data.data[key];

            // Map labType to lab_type
            if (key === 'labType') {
              setValue('lab_type', value);
            }
            // Handle mobile numbers
            else if (key === 'mobile') {
              setValue('mobile', formatMobile(value));
            }
            else if (key === 'altMobile') {
              setValue('alt_mobile', formatMobile(value));
            }
            else {
              setValue(key, value);
            }
          });

          // Fallback if lab_type isn't set by the loop
          if (data.data.labType) {
            setValue('lab_type', data.data.labType);
          }
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching lab data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch(`${API_BASE_URL}/labs/update/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result) {
        navigate("/dashboard/labsUnderControl");
      }
    } catch (error) {
      console.error("Error updating lab:", error);
    }
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

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading lab data...</p>
        </div>
      </div>
    );
  }

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
                {id ? "ল্যাব হালনাগাদ করুন" : "নতুন ল্যাব যোগ করুন"}
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-2"></div>
            </div>
          </div>
          <p className="text-gray-600 text-sm ml-14">
            {labData ? `${labData.institute}` : "নতুন কম্পিউটার ল্যাবের তথ্য যোগ করুন"}
          </p>
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="flex items-center gap-2 px-6 py-3 bg-green-900 hover:bg-green-950 text-white rounded-xl shadow-lg shadow-green-950/30 hover:shadow-xl transition-all font-semibold transform hover:-translate-y-0.5"
        >
          <HiOutlineSave className="w-5 h-5" />
          সংরক্ষণ করুন
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Main Info */}
        <div className="xl:col-span-2 space-y-6">
          {/* Institution Details Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineAcademicCap}
              title="প্রতিষ্ঠানের তথ্য"
              subtitle="শিক্ষা প্রতিষ্ঠানের মৌলিক তথ্য"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="ল্যাব টাইপ" error={errors.lab_type} required>
                <Select {...register("lab_type", { required: "Required" })}>
                  <option value="">টাইপ নির্বাচন করুন</option>
                  <option value="sof">SOF</option>
                  <option value="srdl_sof">SRDL & SOF</option>
                </Select>
              </InputGroup>

              <InputGroup label="আসন নম্বর" error={errors.seat} required>
                <Input
                 readOnly
                 
                  {...register("seat", { required: "Required" })}
                  placeholder="১০০ খুলনা-২"
                />
              </InputGroup>

              <div className="md:col-span-2">
                <InputGroup label="প্রতিষ্ঠানের নাম" required>
                  <Input
                  readOnly
                    {...register("institute", { required: "Required" })}
                    placeholder="প্রতিষ্ঠানের নাম লিখুন"
                  />
                </InputGroup>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineOfficeBuilding}
              title="যোগাযোগের তথ্য"
              subtitle="প্রতিষ্ঠান প্রধান এবং যোগাযোগের বিবরণ"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <InputGroup label="প্রতিষ্ঠান প্রধানের নাম" required>
                <Input
                  {...register("head", { required: "Required" })}
                  placeholder="নাম লিখুন"
                  defaultValue={labData?.head}
                />
              </InputGroup>

              <InputGroup label="ইমেইল">
                <Input
                  type="email"
                  {...register("email")}
                  placeholder="email@example.com"
                  defaultValue={labData.email}
                />
              </InputGroup>

              <InputGroup label="মোবাইল নম্বর" required>
                <Input
              
                  type="tel"
                  {...register("mobile", { required: "Required" })}
                  placeholder="01XXXXXXXXX"
                  defaultValue={labData ? formatMobile(labData.mobile) : ""}
                />
              </InputGroup>

              <InputGroup label="বিকল্প মোবাইল নম্বর">
                <Input
                
                  type="tel"
                  {...register("alt_mobile")}
                  placeholder="01XXXXXXXXX"
                  defaultValue={labData ? formatMobile(labData.altMobile) : ""}
                />
              </InputGroup>
            </div>
          </div>
        </div>

        {/* Right Column - Location & Coordinates */}
        <div className="space-y-6">
          {/* Address Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineLocationMarker}
              title="অবস্থান"
              subtitle="ভৌগোলিক ও প্রশাসনিক অবস্থান"
            />

            <div className="space-y-4">
              <InputGroup label="বিভাগ" required>
                <Select readOnly disabled {...register("division", { required: "Required" })}>
                  <option value="">বিভাগ নির্বাচন করুন</option>
                  <option value={labData?.division}>{labData?.division}</option>
                </Select>
              </InputGroup>

              <InputGroup label="উপজেলা" required>
                <Select readOnly disabled {...register("upazila", { required: "Required" })}>
                  <option value="">উপজেলা নির্বাচন করুন</option>
                  <option value={labData?.upazila}>{labData?.upazila}</option>
                </Select>
              </InputGroup>
            </div>
          </div>

          {/* Geo Coordinates Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow duration-300">
            <SectionHeader
              icon={HiOutlineIdentification}
              title="জিও কোঅর্ডিনেট"
              subtitle="অক্ষাংশ ও দ্রাঘিমাংশ"
            />
            <div className="grid grid-cols-2 gap-3">
              <InputGroup label="অক্ষাংশ (Latitude)">
                <Input
                 readOnly
                  {...register("lat")}
                  placeholder="22.81"
                  type="number"
                  step="any"
                  defaultValue={labData?.lat}
                />
              </InputGroup>
              <InputGroup label="দ্রাঘিমাংশ (Longitude)">
                <Input
                readOnly
                  {...register("long")}
                  placeholder="89.57"
                  type="number"
                  step="any"
                  defaultValue={labData?.long}
                />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabsUpdate;