import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaLock, FaKey, FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";

const ChangePassWord = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Password Data:", data);
    // 👉 Call API here
    toast.success("Password updated successfully!");
    reset();
  };

  return (
    <div className="fade-in-up min-h-[80vh] flex items-center justify-center p-4 bg-emerald-950">
      <div className="max-w-lg w-full bg-emerald-900/40 backdrop-blur-xl p-8 rounded-2xl shadow-2xl shadow-emerald-900/20 border border-emerald-500/20">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg shadow-emerald-900/30 border border-emerald-500/30">
            <FaLock />
          </div>
          <h1 className="text-3xl font-bold text-white">
            পাসওয়ার্ড পরিবর্তন করুন
          </h1>
          <p className="text-emerald-200/70 text-sm mt-3">
            নিরাপত্তার স্বার্থে একটি শক্তিশালী পাসওয়ার্ড ব্যবহার করুন
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-emerald-100">বর্তমান পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50">
                <FaKey />
              </div>
              <input
                type={showCurrentPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none text-white placeholder-emerald-500/30 hover:border-emerald-500/50"
                placeholder="Enter current password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPass(!showCurrentPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-500/50 hover:text-emerald-400 cursor-pointer transition-colors"
              >
                {showCurrentPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-emerald-100">নতুন পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50">
                <FaLock />
              </div>
              <input
                type={showNewPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none text-white placeholder-emerald-500/30 hover:border-emerald-500/50"
                placeholder="Enter new password"
                {...register("newPassword", {
                  required: "New password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                    message:
                      "Password must contain uppercase, lowercase, number & special char",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowNewPass(!showNewPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-500/50 hover:text-emerald-400 cursor-pointer transition-colors"
              >
                {showNewPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.newPassword.message}
              </p>
            )}
            <p className="text-xs text-emerald-400/50 mt-2">
              Must be at least 6 characters long.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-emerald-100">পাসওয়ার্ড নিশ্চিত করুন</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500/50">
                <FaCheckCircle />
              </div>
              <input
                type={showConfirmPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-emerald-950/50 border border-emerald-500/30 rounded-xl focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all outline-none text-white placeholder-emerald-500/30 hover:border-emerald-500/50"
                placeholder="Confirm new password"
                {...register("confirmPassword", {
                  required: "Please confirm password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-emerald-500/50 hover:text-emerald-400 cursor-pointer transition-colors"
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-400 text-xs mt-1 ml-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="cursor-pointer w-full bg-red-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-0.5 active:translate-y-0 border border-emerald-500/30"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassWord;
