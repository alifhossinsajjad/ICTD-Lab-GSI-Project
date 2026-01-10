import React from 'react'
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

function StateDefault({ showPassword, setShowPassword, loginFormData, handleFormFieldChanges, handleStateDefault }) {

    return (
        <>
            {/* Login Card */}
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
                        type={showPassword ? "text" : "password"}
                        required={true}
                        name="password"
                        placeholder="পাসওয়ার্ড"
                        className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <span className="absolute right-3 top-3.5 text-green-600 cursor-pointer">
                        {
                            !loginFormData.password.trim().length > 0 ? <FaLock /> : <span onClick={() => {
                                setShowPassword((prev) => !prev);
                            }} className="text-lg">
                                {
                                    showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                }
                            </span>
                        }
                    </span>
                </div>

                {/* Remember + Button */}
                <div className="flex items-center justify-between mb-4 text-sm">  
                    <label className="flex items-center gap-2 text-gray-700">
                        <input type="checkbox" name="remmember-me" className="accent-green-600 cursor-pointer" />
                        মনে রাখুন
                    </label>

                    <button type="submit"
                        className="bg-green-600 text-white px-6 py-2 rounded-md
                         hover:bg-green-700 transition font-medium cursor-pointer"
                    >
                        প্রবেশ করুন
                    </button>
                </div>
                
                {/* Forgot + Register */}
                <div className="flex justify-between items-center">
                {/* Forgot */}
                <p className="text-sm text-green-700 hover:underline cursor-pointer"> 
                    পাসওয়ার্ড ভুলে গেছেন?
                </p>

                {/* Forgot */}
                <p onClick={handleStateDefault} className="text-sm text-green-700 underline cursor-pointer"> 
                    নিবন্ধন করুন
                </p>
                </div>
            </div>
        </>
    )
}

export default StateDefault