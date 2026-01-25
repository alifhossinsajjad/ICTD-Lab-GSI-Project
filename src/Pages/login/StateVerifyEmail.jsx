import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

function StateVerifyEmail({
  loginFormData,
  setLoginFormData,
  handleFormFieldChanges,
  handleStateVerifyEmail,
}) {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Title */}
      <div className="w-full flex items-center justify-center gap-3 mb-8 text-emerald-100 font-semibold">
        <span className="text-3xl text-emerald-400">
          <HiOutlineMail />
        </span>
        <h2 className="text-xl tracking-wide">আপনার ইমেইল লিখুন</h2>
      </div>
      {/* User ID / Email*/}
      <div className="w-full relative mb-8 group">
        <input
          type="text"
          name="email"
          onChange={handleFormFieldChanges}
          value={loginFormData.email}
          required={true}
          placeholder="ইউজার আইডি"
          className="w-full bg-emerald-950/50 border border-emerald-500/30 text-white px-5 py-3.5 pr-12 rounded-xl
                                 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 placeholder-emerald-300/60 transition-all duration-300"
        />
        <FaUserAlt className="absolute right-4 top-4 text-emerald-500 group-focus-within:text-emerald-300 transition-colors" />
      </div>
      <div className="mt-2">
        <button
          type="button"
          onClick={handleStateVerifyEmail}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl
                    hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5"
        >
          ইমেইল যাচাই করুন
        </button>
      </div>
    </div>
  );
}

export default StateVerifyEmail;
