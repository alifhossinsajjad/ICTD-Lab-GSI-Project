import React, { useState } from 'react'
import { HiOutlineMail } from "react-icons/hi";
import AuthCode from "react-auth-code-input";

function StateEnterCode({ loginFormData, setLoginFormData, handleFormFieldChanges, handleStateEnterCode }) {

  const handleOnChange = (res) => {
    setLoginFormData((prev) => ({ ...prev, code: res }));
  };

  return (
    <div className="w-full h-full flex flex-col">

      {/* Title */}
      <div className="w-full flex items-center justify-center gap-3 mb-8 text-emerald-100 font-semibold">
        <span className="text-3xl text-emerald-400">
          <HiOutlineMail />
        </span>
        <h2 className="text-xl tracking-wide">৬ সংখ্যার কোড লিখুন</h2>
      </div>
      {/* User ID / Email*/}
      <div className="w-full relative mb-8 mt-2 px-1">
        <AuthCode
          length={6} // number of digits
          onChange={handleOnChange}
          allowedCharacters="numeric" // only numbers
          containerClassName="flex justify-center gap-2 lg:gap-3 w-full"
          inputClassName="w-10 h-12 lg:w-12 lg:h-14 bg-emerald-950/50 border border-emerald-500/30 text-white text-xl font-bold rounded-lg shadow-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 text-center"
        />
      </div>
      <div className="mt-2">
        <button type='button' onClick={handleStateEnterCode}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl
            hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5">

          কোড যাচাই করুন
        </button>
      </div>
    </div>
  )
}

export default StateEnterCode