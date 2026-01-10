import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt, FaLock } from "react-icons/fa";

function StateVerifyEmail({ loginFormData, setLoginFormData, handleFormFieldChanges, handleStateVerifyEmail }) {
    return (
        <div className="w-full h-full flex flex-col">

            {/* Title */}
            <div className="w-full flex items-center justify-center gap-2 mb-5 text-green-800 font-semibold">
                <span className="text-2xl">
                    <HiOutlineMail />
                </span>
                <h2 className="c">আপনার ইমেইল লিখুন</h2>
            </div>
            {/* User ID / Email*/}
            <div className="w-full relative mb-2">
                <input
                    type="text"
                    name="email"
                    onChange={handleFormFieldChanges}
                    value={loginFormData.email}
                    required={true}
                    placeholder="ইউজার আইডি"
                    className="w-full border border-green-300 px-4 py-3  rounded-md
                                 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <FaUserAlt className="absolute right-3 top-3.5 text-green-600" />
            </div>
            <div className="c">
                <button type='button' onClick={handleStateVerifyEmail} className="w-full border bg-green-600 cursor-pointer border-green-300 px-4 py-2 rounded-md text-white font-medium hover:bg-green-700">
                    ইমেইল যাচাই করুন
                </button>
            </div>
        </div>
    )
}

export default StateVerifyEmail