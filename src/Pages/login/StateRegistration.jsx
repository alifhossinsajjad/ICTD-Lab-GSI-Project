import React, { useContext } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { IoIosLock } from "react-icons/io";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function StateRegistration({
  showPassword,
  setShowPassword,
  loginFormData,
  handleFormFieldChanges,
  handleStateRegistration,
  setLoginFormData,
  LoginPageStateOptions,
}) {
  const { register } = useContext(AuthContext);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showRegisterRetypePassword, setShowRegisterRetypePassword] =
    useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (loginFormData.password !== loginFormData.retypePassword) {
      toast.error("পাসওয়ার্ড মেলেনি!");
      return;
    }
    setLoading(true);
    try {
      await register(loginFormData.email, loginFormData.password);
      toast.success("নিবন্ধন সফল হয়েছে!");
      // Optionally auto-login or redirect to login
      // Since `signup` returns token (if I recall correctly or if I modified it - wait, auth service register returns response.data)
      // Check auth.controller: signup returns token?
      // TypeCheck.type === "cookie" for WebApp. It returns `201` with `data` (user info). No token in JSON body for WebApp, it's in cookie?
      // Wait, `auth.controller.ts`:
      // if (typeCheck.type === "cookie") -> res.cookie(...) is missing in the controller code I saw!
      // Ah, `assignJwtToken` util likely handles `res.cookie`.
      // The JSON response: `success: true, message: "User Register successfully", data: {...}`.
      // It does NOT return the token in the JSON for WebApp flow?
      // If it sets a cookie, then subsequent requests will work.
      // But `AuthService.login` manually sets `localStorage` user.
      // `AuthService.register` does NOT set `localStorage` user.
      // So I should probably redirect to login page or auto-login.
      // Let's redirect to login (default state) for safety, or just navigate to dashboard if cookie is set.
      // I'll try to navigate to dashboard, assuming cookie is set.
      // Actually, if I want to update `user` state in context for a "logged in" UI, I need to fetch current user or set acts like login.
      // `register` in AuthContext just calls service.
      // Let's redirect to Default State (Login) so they can login.

      setLoginFormData((prev) => ({
        ...prev,
        pageState: LoginPageStateOptions[0],
      }));
      localStorage.setItem("LoginPageState", LoginPageStateOptions[0]);
      toast.success("অনুগ্রহ করে লগইন করুন");

    } catch (error) {
      toast.error(error.response?.data?.message || "নিবন্ধন ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

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
          onClick={handleRegister}
          disabled={loading}
          className="w-[48%] bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-2.5 rounded-xl
                             hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "অপেক্ষা করুন..." : "নিবন্ধন করুন"}
        </button>
      </div>
    </div>
  );
}

export default StateRegistration;
