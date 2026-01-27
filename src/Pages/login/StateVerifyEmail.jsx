import React, { useContext, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";

function StateVerifyEmail({
  loginFormData,
  setLoginFormData,
  handleFormFieldChanges,
  handleStateVerifyEmail,
  LoginPageStateOptions,
}) {
  const { verifyEmail } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!loginFormData.email) {
      toast.error("ইমেইল প্রদান করুন");
      return;
    }
    setLoading(true);
    try {
      await verifyEmail(loginFormData.email);
      toast.success("যাচাইকরণ কোড পাঠানো হয়েছে!");
      // Proceed to next state
      handleStateVerifyEmail(e);
    } catch (error) {
      // If user not found, maybe they need to register? 
      // But the backend `signup` needs verification first. 
      // If 404, it might mean they need to register, but standard flow verifyEmail checks if user exists?
      // Wait, verifyEmail backend: if !user return 404 "User not found". 
      // But signup says "if user.pageState !== ...". 
      // Actually, how does a NEW user sign up if verifyEmail requires user to exist?
      // Ah, looking at backend: `signup` finds user by email. If not user -> 404 User not exist.
      // So... how is a user created?
      // "Determine how users are initially created (is it Admin only? or missing endpoint?)" -> I marked this as X but did I answer it?
      // I need to check if there is a "register" endpoint that creates the user.
      // Re-reading auth.controller.ts: `signup` updates password. `verifyEmail` updates pageState.
      // Neither CREATE the user.
      // Validated: Users must be pre-created (likely by Admin or another process).
      // So I will just show the error message.
      toast.error(error.response?.data?.message || "যাচাইকরণ ব্যর্থ হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col ">
      {/* Title */}
      <div className="w-full flex items-center justify-center gap-3 mb-8 text-emerald-100 font-semibold">
        <span className="text-3xl text-emerald-400">
          <HiOutlineMail />
        </span>
        <h2 className="text-xl tracking-wide">আপনার ইমেইল লিখুন</h2>
      </div>
      {/* User ID / Email*/}
      <div className="w-full relative mb-4 group">
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
      <div className="">
        <button
          type="button"
          onClick={handleVerify}
          disabled={loading}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl
                    hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "অপেক্ষা করুন..." : "ইমেইল যাচাই করুন"}
        </button>
      </div>

      <div className="flex w-full items-center justify-center mt-6">
        <section className="flex items-center justify-center border border-emerald-500/30 gap-2 cursor-pointer px-5 py-2 rounded-full  text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:border-emerald-400/40  hover:cursor-pointer">
          <span className="cursor-pointer text-emerald-400">
            <LuArrowLeftFromLine />
          </span>
          <button
            onClick={() => {
              setLoginFormData((prev) => ({
                ...prev,
                pageState: LoginPageStateOptions[0],
              }));
              localStorage.setItem("LoginPageState", LoginPageStateOptions[0]);
            }}
            type="button"
            className=" cursor-pointer"
          >
            Back
          </button>
        </section>
      </div>
    </div>
  );
}

export default StateVerifyEmail;
