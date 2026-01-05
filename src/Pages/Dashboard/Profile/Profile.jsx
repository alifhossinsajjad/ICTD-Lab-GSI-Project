import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineCamera,
  HiOutlineSave,
  HiOutlineIdentification,
} from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import toast from "react-hot-toast";

const Profile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      // Handle form submission logic here
      console.log("Update successful", data);

      // Show success toast
      toast.success("Profile updated successfully");

      reset();
    } catch (error) {
      // Show error toast if something goes wrong
      toast.error("Failed to update profile");
      console.error("Update failed:", error);
    }
  };




  return (
    <div className="min-h-screen bg-gray-50/50 p-6 lg:p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            My Profile
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-gray-100"
            >
              <div className="h-32 bg-gradient-to-r from-[#006A4E] to-[#004e39] relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              </div>

              <div className="px-6 pb-8 relative text-center">
                <div className="relative inline-block -mt-16 mb-4 group">
                  <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden relative bg-gray-100 mx-auto">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/gordon@192.webp"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-1 right-2 bg-white p-2 rounded-full shadow-md text-gray-600 hover:text-[#006A4E] transition-colors">
                    <HiOutlineCamera className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">Admin User</h2>
                <p className="text-[#006A4E] font-medium mb-6">Administrator</p>

                <div className="flex justify-center gap-3">
                  <span className="px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Active
                  </span>
                  <span className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#006A4E]">
                      <HiOutlineMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email Address</p>
                      <p className="text-sm font-medium">admin@ictd.gov.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-[#006A4E]">
                      <HiOutlinePhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Phone</p>
                      <p className="text-sm font-medium text-gray-400 italic">
                        Not added yet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Edit Form */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#006A4E]/10 flex items-center justify-center text-[#006A4E]">
                  <HiOutlineUser className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Profile Details
                  </h3>
                  <p className="text-sm text-gray-500">
                    Update your personal information
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      First Name{" "}
                      <span className="text-xs font-normal text-gray-400">
                        (Bangla)
                      </span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#006A4E] transition-colors">
                        <HiOutlineIdentification className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        {...register("firstNameBangla", { required: true })}
                        placeholder="আপনার নাম"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#006A4E] focus:ring-0 transition-all duration-300 outline-none text-gray-800 font-medium placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      Last Name{" "}
                      <span className="text-xs font-normal text-gray-400">
                        (Bangla)
                      </span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#006A4E] transition-colors">
                        <HiOutlineIdentification className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        {...register("lastNameBangla", { required: true })}
                        placeholder="পদবী"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#006A4E] focus:ring-0 transition-all duration-300 outline-none text-gray-800 font-medium placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      Mobile Number
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#006A4E] transition-colors">
                        <HiOutlinePhone className="w-5 h-5" />
                      </div>
                      <input
                        type="number"
                        {...register("mobile", { required: true })}
                        placeholder="017xxxxxxxx"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#006A4E] focus:ring-0 transition-all duration-300 outline-none text-gray-800 font-medium placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#006A4E] transition-colors">
                        <HiOutlineMail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="example@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-[#006A4E] focus:ring-0 transition-all duration-300 outline-none text-gray-800 font-medium placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex justify-center items-center gap-2 bg-red-600 hover:bg-[#005841] text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-900/20 transition-all duration-300 w-full md:w-auto cursor-pointer"
                  >
                    <FaUser className="w-5 h-5" />
                    <span>Update Profile</span>
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
