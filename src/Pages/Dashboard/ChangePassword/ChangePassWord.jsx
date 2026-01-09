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
    <div className="fade-in-up min-h-[80vh] flex items-center justify-center p-4 bg-emerald-50">
      <div className="max-w-lg w-full bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-lg">
            <FaLock />
          </div>
          <h1 className="text-3xl font-bold text-green-950">
            পাসওয়ার্ড পরিবর্তন করুন
          </h1>
          <p className="text-gray-600 text-sm mt-3">
            নিরাপত্তার স্বার্থে একটি শক্তিশালী পাসওয়ার্ড ব্যবহার করুন
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3 mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Current Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">বর্তমান পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaKey />
              </div>
              <input
                type={showCurrentPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-gray-700 hover:border-gray-300"
                placeholder="Enter current password"
                {...register("currentPassword", {
                  required: "Current password is required",
                })}
              />
              <button
                type="button"
                onClick={() => setShowCurrentPass(!showCurrentPass)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors"
              >
                {showCurrentPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.currentPassword.message}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">নতুন পাসওয়ার্ড</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaLock />
              </div>
              <input
                type={showNewPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-gray-700 hover:border-gray-300"
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
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors"
              >
                {showNewPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.newPassword.message}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              Must be at least 6 characters long.
            </p>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700">পাসওয়ার্ড নিশ্চিত করুন</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaCheckCircle />
              </div>
              <input
                type={showConfirmPass ? "text" : "password"}
                className="w-full pl-10 pr-10 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all outline-none text-gray-700 hover:border-gray-300"
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
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-emerald-600 cursor-pointer transition-colors"
              >
                {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1 ml-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-950 hover:bg-green-900 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-green-950/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassWord;
