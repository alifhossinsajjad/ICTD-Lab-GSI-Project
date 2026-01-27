import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import AuthCode from "react-auth-code-input";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuLoader } from "react-icons/lu";

function StateEnterCode({
  loginFormData,
  setLoginFormData,
  handleFormFieldChanges,
  handleStateEnterCode,
  LoginPageStateOptions,
  onResendCode, // Add this prop to handle resending code
}) {
  const handleOnChange = (res) => {
    setLoginFormData((prev) => ({ ...prev, code: res }));
  };

  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const handleResendCode = async () => {
    if (!canResend || isResending) return;

    setIsResending(true);

    try {
      // Call your API to resend the code
      if (onResendCode) {
        await onResendCode(loginFormData.email || loginFormData.userId);
      }

      // Reset timer
      setTimeLeft(60);
      setCanResend(false);
    } catch (error) {
      console.error("Failed to resend code:", error);
      // You might want to show an error message to the user
    } finally {
      setIsResending(false);
    }
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
      <div className="w-full relative mb-5 mt-2 px-1">
        <AuthCode
          length={6}
          onChange={handleOnChange}
          allowedCharacters="numeric"
          containerClassName="flex justify-center gap-2 lg:gap-3 w-full"
          inputClassName="w-10 h-12 lg:w-12 lg:h-14 bg-emerald-950/50 border border-emerald-500/30 text-white text-xl font-bold rounded-lg shadow-sm focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/50 transition-all duration-300 text-center"
        />
      </div>

      <div className="">
        <button
          type="button"
          onClick={handleStateEnterCode}
          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-3 rounded-xl
            hover:from-emerald-400 hover:to-green-500 transition-all duration-300 font-semibold shadow-lg shadow-emerald-900/20 transform hover:-translate-y-0.5 cursor-pointer"
        >
          কোড যাচাই করুন
        </button>
      </div>

      <div className="mt-3 flex items-center justify-end">
        <section className="flex items-center justify-center gap-2">
          {!canResend ? (
            <>
              <span className="text-emerald-300 text-sm">{timeLeft}s</span>
              <span className="text-emerald-400 animate-spin">
                <LuLoader />
              </span>
              <span className="text-gray-400 text-sm cursor-not-allowed">
                send code again
              </span>
            </>
          ) : (
            <button
              type="button"
              onClick={handleResendCode}
              disabled={isResending}
              className="text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isResending ? (
                <>
                  <span className="animate-spin">
                    <LuLoader />
                  </span>
                  <span>Sending...</span>
                </>
              ) : (
                <span>Send code again</span>
              )}
            </button>
          )}
        </section>
      </div>

      <div className="flex w-full items-center justify-center mt-6">
        <section className="flex items-center justify-center border border-emerald-500/30 gap-2 cursor-pointer px-5 py-2 rounded-full text-emerald-400 hover:text-white hover:bg-emerald-800/50 hover:border-emerald-400/40 hover:cursor-pointer">
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
            className="cursor-pointer"
          >
            Back
          </button>
        </section>
      </div>
    </div>
  );
}

export default StateEnterCode;
