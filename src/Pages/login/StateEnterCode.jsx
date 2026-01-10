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
      <div className="w-full flex items-center justify-center gap-2 mb-5 text-green-800 font-semibold">
        <span className="text-2xl">
          <HiOutlineMail />
        </span>
        <h2 className="c">৬ সংখ্যার কোড লিখুন</h2>
      </div>
      {/* User ID / Email*/}
      <div className="w-full relative mb-4 mt-2 px-1">
        <AuthCode
          length={6} // number of digits
          onChange={handleOnChange}
          allowedCharacters="numeric" // only numbers
          containerClassName="flex justify-center gap-2 lg:gap-5 w-full h-8 lg:h-12"
          inputClassName="h-full w-full border border-green-600 rounded shadow text-center"
        />
      </div>
      <div className="c">
        <button type='button' onClick={handleStateEnterCode} className="w-full border bg-green-600 cursor-pointer border-green-300 px-4 py-2 rounded-md text-white font-medium hover:bg-green-700">

          কোড যাচাই করুন
        </button>
      </div>
    </div>
  )
}

export default StateEnterCode