import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ChangePassWord = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const newPassword = watch("newPassword");

  const onSubmit = (data) => {
    console.log("Password Data:", data);
    // 👉 Call API here
    toast.success("update you pass")
    reset();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-xl font-semibold mb-4">
        পাসওয়ার্ড পরিবর্তন করুন
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Current Password */}
        <div>
          <label className="block mb-1">Current Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            {...register("currentPassword", {
              required: "Current password is required",
            })}
          />
          {errors.currentPassword && (
            <p className="text-red-500 text-sm">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        {/* New Password */}
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            {...register("newPassword", {
              required: "New password is required",
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
                message:
                  "Password must be 6+ chars with uppercase, lowercase, number & special character",
              },
            })}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block mb-1">Re-enter Password</label>
          <input
            type="password"
            className="w-full border rounded-lg px-3 py-2"
            {...register("confirmPassword", {
              required: "Please confirm password",
              validate: (value) =>
                value === newPassword || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassWord;
