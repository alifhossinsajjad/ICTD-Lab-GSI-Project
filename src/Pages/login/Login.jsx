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
    setLoginFormData((prev) => ({...prev, pageState: LoginPageStateOptions[1]}))
    localStorage.setItem("LoginPageState", LoginPageStateOptions[1])
  }

  const handleStateVerifyEmail = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({...prev, pageState: LoginPageStateOptions[2]}));
     localStorage.setItem("LoginPageState", LoginPageStateOptions[2]);
  }

  const handleStateEnterCode = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({...prev, pageState: LoginPageStateOptions[3]}));
     localStorage.setItem("LoginPageState", LoginPageStateOptions[3]);
  }

  const handleStateRegistration = (e) => {
    e.preventDefault();
    setLoginFormData((prev) => ({...prev, pageState: LoginPageStateOptions[0]}));
    localStorage.removeItem("LoginPageState")
    
  }


  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 loginPage to-green-200 px-4">
      <form className="w-full max-w-md">
        {/* Title */}
        <div className="text-center mb-8 ">
          <h1 className="text-4xl font-bold tracking-widest text-green-800">
            ICTD DIGITAL LAB
          </h1>
          <p className="text-center text-md text-green-800 mt-6 leading-relaxed font-bold ">
            কারিগরি সহায়তায়: তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর,
            <br />
            তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8  flex flex-co items-center justify-center">

          {
            loginFormData.pageState === "default" &&
            <StateDefault showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateDefault={handleStateDefault}/>
          }

          {
            loginFormData.pageState === "verifyEmail" &&
            <StateVerifyEmail showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateVerifyEmail={handleStateVerifyEmail}/>
          }

          {
            loginFormData.pageState === "enterCode" &&
            <StateEnterCode showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateEnterCode={handleStateEnterCode}/>
          }

          {
            loginFormData.pageState === "registeration" &&
            <StateRegistration showPassword={showPassword} setShowPassword={setShowPassword} loginFormData={loginFormData} setLoginFormData={setLoginFormData} handleFormFieldChanges={handleFormFieldChanges} handleStateRegistration={handleStateRegistration}/>
          }

        </div>


        {/* Footer */}


        <div className="flex justify-center ">
          <Link
            to={"/"}
            className="mt-6 flex items-center gap-1 bg-white border border-green-600 text-green-600 px-5 py-2 rounded-md hover:bg-green-50 font-medium relative "
          >
            <BiLeftArrow className="l-2 text-green-600 " />
            Home
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
