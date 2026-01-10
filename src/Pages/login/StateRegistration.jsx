import React from 'react'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6"; 
import { useState } from 'react';
import { IoIosLock } from "react-icons/io";

function StateRegistration({ showPassword, setShowPassword, loginFormData, handleFormFieldChanges, handleStateRegistration }) {

  const [showRegisterPassword, setShowRegisterPassword] = useState(false)
  const [showRegisterRetypePassword, setShowRegisterRetypePassword] = useState(false)

  return (
    <div className='w-full h-full'>

      <h4 className="text-center text-lg font-semibold text-green-800 mb-6">
        প্রবেশ করুন
      </h4>

      {/* User ID */}
      <div className="relative mb-5">
        <input
          type="text"
          name="email"
          onChange={handleFormFieldChanges}
          value={loginFormData.email}
          required={true}
          placeholder="ইউজার আইডি"
          className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <FaUserAlt className="absolute right-3 top-3.5 text-green-600" />
      </div>

      {/* Password */}
      <div className="relative mb-4">
        <input
          onChange={handleFormFieldChanges}
          value={loginFormData.password}
          type={showRegisterPassword ? "text" : "password"}
          required={true}
          name="password"
          placeholder="পাসওয়ার্ড"
          className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <span className="absolute right-3 top-3.5 text-green-600 cursor-pointer">
          {
            !loginFormData.password.trim().length > 0 ? <IoIosLock size={22}/> : <span onClick={() => {
              setShowRegisterPassword((prev) => !prev);
            }} className="text-lg">
              {
                showRegisterPassword ? <FaRegEye /> : <FaRegEyeSlash />
              }
            </span>
          }
        </span>
      </div>

      {/* Retype-Password */}
      <div className="relative mb-4">
        <input
          onChange={handleFormFieldChanges}
          value={loginFormData.retypePassword}
          type={showRegisterRetypePassword ? "text" : "password"}
          required={true}
          name="retypePassword"
          placeholder="পাসওয়ার্ড পুনরায় টাইপ করুন"
          className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                             focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <span className="absolute right-3 top-3.5 text-green-600 cursor-pointer">
          {
            !loginFormData.retypePassword.trim().length > 0 ? <IoIosLock size={22}/> : <span onClick={() => {
              setShowRegisterRetypePassword((prev) => !prev);
            }} className="text-lg">
              {
                showRegisterRetypePassword ? <FaRegEye /> : <FaRegEyeSlash />
              }
            </span>
          }
        </span>
      </div>

      {/* Remember + Button */}
      <div className="flex items-center justify-between  text-sm">
        <label className="flex items-center gap-2 text-gray-700">
          <input type="checkbox" name="remmember-me" className="accent-green-600 cursor-pointer" />
          মনে রাখুন
        </label>

        <button type="button" onClick={handleStateRegistration}
          className="bg-green-600 text-white px-6 py-2 rounded-md
                             hover:bg-green-700 transition font-medium cursor-pointer"
        >
          নিবন্ধন করুন
        </button>
      </div>
    </div>
  )
}

export default StateRegistration