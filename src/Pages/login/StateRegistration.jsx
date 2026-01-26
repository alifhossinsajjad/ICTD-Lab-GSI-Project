import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { IoIosLock } from "react-icons/io";

function StateRegistration({
  showPassword,
  setShowPassword,
  loginFormData,
  handleFormFieldChanges,
  handleStateRegistration,
  setLoginFormData,
  LoginPageStateOptions,
}) {
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterRetypePassword, setShowRegisterRetypePassword] =
    useState(false);

  return (
    <div className="w-full h-full">
      <h4 className="text-center text-2xl font-bold text-white mb-8 tracking-wide">
        প্রবেশ করুন
      </h4>

      {/* User ID */}
      <div className="relative mb-6 group">
        <input
          type="text"
          name="email"
          onChange={handleFormFieldChanges}
          value={loginFormData.email}
          required={true}
          placeholder="ইউজার ইমেইল"
          className="w-full bg-emerald-950/50 border border-emerald-500/30 text-white px-5 py-3.5 pr-12 rounded-xl
                             focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 placeholder-emerald-300/60 transition-all duration-300"
        />
        <FaUserAlt className="absolute right-4 top-4 text-emerald-500 group-focus-within:text-emerald-300 transition-colors" />
      </div>

      {/* Password */}
      <div className="relative mb-6 group">
        <input
          onChange={handleFormFieldChanges}
          value={loginFormData.password}
          type={showRegisterPassword ? "text" : "password"}
          required={true}
          name="password"
          placeholder="পাসওয়ার্ড"
          className="w-full bg-emerald-950/50 border border-emerald-500/30 text-white px-5 py-3.5 pr-12 rounded-xl
                             focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 placeholder-emerald-300/60 transition-all duration-300"
        />

        <span className="absolute right-4 top-4 text-emerald-500 cursor-pointer hover:text-emerald-300 transition-colors">
          {!loginFormData.password.trim().length > 0 ? (
            <IoIosLock size={22} />
          ) : (
            <span
              onClick={() => {
                setShowRegisterPassword((prev) => !prev);
              }}
              className="text-lg"
            >
              {showRegisterPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          )}
        </span>
      </div>

      {/* Retype-Password */}
      <div className="relative mb-2 group">
        <input
          onChange={handleFormFieldChanges}
          value={loginFormData.retypePassword}
          type={showRegisterRetypePassword ? "text" : "password"}
          required={true}
          name="retypePassword"
          placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
          className="w-full bg-emerald-950/50 border border-emerald-500/30 text-white px-5 py-3.5 pr-12 rounded-xl
                             focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 placeholder-emerald-300/60 transition-all duration-300"
        />

        <span className="absolute right-4 top-4 text-emerald-500 cursor-pointer hover:text-emerald-300 transition-colors">
          {!loginFormData.retypePassword.trim().length > 0 ? (
            <IoIosLock size={22} />
          ) : (
            <span
              onClick={() => {
                setShowRegisterRetypePassword((prev) => !prev);
              }}
              className="text-lg"
            >
              {showRegisterRetypePassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          )}
        </span>
      </div>

      <label className="flex items-center gap-2 text-emerald-200/80 hover:text-white cursor-pointer transition-colors select-none mb-6">
        <input
          type="checkbox"
          name="remmember-me"
          className="accent-emerald-500 w-4 h-4 cursor-pointer rounded border-emerald-500/30 bg-emerald-900/50"
        />
        মনে রাখুন
      </label>
      {/* 
      <section className="w-full flex items-center justify-center my-5">
        {loginFormData.password !== loginFormData.retypePassword
          ? "password not matched"
          : "password matched"}
      </section> */}

      {/* Remember + Button */}
      <div className="flex w-full items-center justify-between mb-2 text-sm">
        <button
          type="button"
          onClick={() => {
            setLoginFormData((prev) => ({
              ...prev,
              pageState: LoginPageStateOptions[0],
            }));
            localStorage.setItem("LoginPageState", LoginPageStateOptions[0]);
          }}
          className="w-[48%] bg-gradient-to-r from-red-950 to-red-500 text-white px-8 py-2.5 rounded-xl
                             hover:from-red-950 hover:to-red-700 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 cursor-pointer"
        >
          বাতিল করুন
        </button>

        <button
          type="button"
          onClick={handleStateRegistration}
          className="w-[48%] bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-2.5 rounded-xl
                             hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 cursor-pointer"
        >
          নিবন্ধন করুন
        </button>
      </div>
    </div>
  );
}

export default StateRegistration;
