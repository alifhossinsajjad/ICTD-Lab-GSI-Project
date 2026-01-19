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
import profilepic from "../../../../public/profilepic.jpg";

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
    <div className="min-h-screen bg-emerald-950 p-6 lg:p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">My Profile</h1>
          <p className="text-emerald-200/70 mt-2 text-lg">
            Manage your personal information and account settings
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-emerald-900/40 backdrop-blur-xl rounded-3xl shadow-xl shadow-emerald-900/20 overflow-hidden border border-emerald-500/20"
            >
              <div className="h-32 bg-gradient-to-r from-emerald-800 to-emerald-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="px-6 pb-8 relative text-center">
                <div className="relative inline-block -mt-16 mb-4 group">
                  <div className="w-32 h-32 rounded-full border-4 border-emerald-900 shadow-lg overflow-hidden relative bg-emerald-800 mx-auto">
                    <img
                      src={profilepic}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-1 right-2 bg-emerald-800 p-2 rounded-full shadow-md text-emerald-200 hover:text-white border border-emerald-500/30 transition-colors">
                    <HiOutlineCamera className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-white">Admin User</h2>
                <p className="text-red-500 font-medium mb-6">Administrator</p>

                <div className="flex justify-center gap-3">
                  <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Active
                  </span>
                  <span className="px-4 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="mt-8 pt-6 border-t border-emerald-500/20 flex flex-col gap-4 text-left">
                  <div className="flex items-center gap-3 text-emerald-100">
                    <div className="w-8 h-8 rounded-lg bg-emerald-800/50 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <HiOutlineMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400/70">Email Address</p>
                      <p className="text-sm font-medium">admin@ictd.gov.bd</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-100">
                    <div className="w-8 h-8 rounded-lg bg-emerald-800/50 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                      <HiOutlinePhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-400/70">Phone</p>
                      <p className="text-sm font-medium text-emerald-200/50 italic">
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
              className="bg-emerald-900/40 backdrop-blur-xl rounded-3xl shadow-xl shadow-emerald-900/20 border border-emerald-500/20 p-8"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-emerald-500/20">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <HiOutlineUser className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Profile Details
                  </h3>
                  <p className="text-sm text-emerald-200/70">
                    Update your personal information
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-emerald-100 ml-1">
                      First Name{" "}
                      <span className="text-xs font-normal text-emerald-400/70">
                        (Bangla)
                      </span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors">
                        <HiOutlineIdentification className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        {...register("firstNameBangla", { required: true })}
                        placeholder="আপনার নাম"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:bg-emerald-900/50 focus:border-emerald-400 focus:ring-0 transition-all duration-300 outline-none text-white font-medium placeholder-emerald-500/30"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-emerald-100 ml-1">
                      Last Name{" "}
                      <span className="text-xs font-normal text-emerald-400/70">
                        (Bangla)
                      </span>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors">
                        <HiOutlineIdentification className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        {...register("lastNameBangla", { required: true })}
                        placeholder="পদবী"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:bg-emerald-900/50 focus:border-emerald-400 focus:ring-0 transition-all duration-300 outline-none text-white font-medium placeholder-emerald-500/30"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-emerald-100 ml-1">
                      Mobile Number
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors">
                        <HiOutlinePhone className="w-5 h-5" />
                      </div>
                      <input
                        type="number"
                        {...register("mobile", { required: true })}
                        placeholder="017xxxxxxxx"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:bg-emerald-900/50 focus:border-emerald-400 focus:ring-0 transition-all duration-300 outline-none text-white font-medium placeholder-emerald-500/30"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-emerald-100 ml-1">
                      Email Address
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50 group-focus-within:text-emerald-400 transition-colors">
                        <HiOutlineMail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="example@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:bg-emerald-900/50 focus:border-emerald-400 focus:ring-0 transition-all duration-300 outline-none text-white font-medium placeholder-emerald-500/30"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 flex justify-end">
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex justify-center items-center gap-2 bg-red-600 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-900/30 transition-all duration-300 w-full md:w-auto cursor-pointer border border-emerald-500/30"
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
