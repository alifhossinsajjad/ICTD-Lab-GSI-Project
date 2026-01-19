import { BiLeaf, BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link } from "react-router";
import { useState, useEffect } from "react"
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

import StateDefault from "./StateDefault";
import StateEnterCode from "./StateEnterCode";
import StateRegistration from "./StateRegistration";
import StateVerifyEmail from "./StateVerifyEmail";
import { LocateOff } from "lucide";

const Login = () => {

  const LoginPageStateOptions = ["default", "verifyEmail", "enterCode", "registeration"];

  const [showPassword, setShowPassword] = useState(false);
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
    retypePassword: "",
    code: "",
    pageState: "verifyEmail", // default, verifyEmail, enterCode, registeration
  })


  useEffect(() => {
    const checkPageState = localStorage.getItem("LoginPageState") || LoginPageStateOptions[0];
    setLoginFormData((prev) => ({ ...prev, pageState: checkPageState }))
  }, [])


  const handleFormFieldChanges = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));
  };

  const handleStateDefault = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({ ...prev, pageState: LoginPageStateOptions[1] }))
    localStorage.setItem("LoginPageState", LoginPageStateOptions[1])
  }

  const handleStateVerifyEmail = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({ ...prev, pageState: LoginPageStateOptions[2] }));
    localStorage.setItem("LoginPageState", LoginPageStateOptions[2]);
  }

  const handleStateEnterCode = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({ ...prev, pageState: LoginPageStateOptions[3] }));
    localStorage.setItem("LoginPageState", LoginPageStateOptions[3]);
  }

  const handleStateRegistration = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({ ...prev, pageState: LoginPageStateOptions[0] }));
    localStorage.removeItem("LoginPageState")

  }


  return (
    <section className="min-h-screen flex items-center justify-center bg-emerald-950 px-4 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-emerald-500/10 blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-blue-500/10 blur-[100px]"></div>
      </div>

      <form className="w-full max-w-md relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-widest text-white drop-shadow-lg">
            ICTD DIGITAL LAB
          </h1>
          <p className="text-center text-md text-emerald-100 mt-6 leading-relaxed font-medium opacity-90">
            কারিগরি সহায়তায়: তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর,
            <br />
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </p>
        </div>

        <div className="bg-emerald-900/40 backdrop-blur-xl rounded-2xl shadow-2xl border border-emerald-500/20 p-8 flex flex-col items-center justify-center">

          {
            loginFormData.pageState === "default" &&
            <StateDefault showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateDefault={handleStateDefault} />
          }

          {
            loginFormData.pageState === "verifyEmail" &&
            <StateVerifyEmail showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateVerifyEmail={handleStateVerifyEmail} />
          }

          {
            loginFormData.pageState === "enterCode" &&
            <StateEnterCode showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateEnterCode={handleStateEnterCode} />
          }

          {
            loginFormData.pageState === "registeration" &&
            <StateRegistration showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateRegistration={handleStateRegistration} />
          }

        </div>


        {/* Footer */}


        <div className="flex justify-center ">
          <Link
            to={"/"}
            className="mt-6 flex items-center gap-2 bg-emerald-900/50 border border-emerald-500/30 text-emerald-100 px-6 py-2.5 rounded-full hover:bg-emerald-800/50 hover:text-white hover:border-emerald-400 transition-all duration-300 font-medium shadow-lg"
          >
            <BiLeftArrow className="text-emerald-400" />
            Back to Home
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
