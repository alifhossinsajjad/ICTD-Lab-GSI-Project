import { FaUserAlt, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 px-4">
      <div className="w-full max-w-md">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-widest text-green-800">
            ICTD
          </h1>
          <h2 className="text-4xl font-bold tracking-widest text-green-800">
            DIGITAL
          </h2>
          <h3 className="text-4xl font-bold tracking-widest text-green-800">
            LAB
          </h3>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-xl p-8">

          <h4 className="text-center text-lg font-semibold text-green-800 mb-6">
            প্রবেশ করুন
          </h4>

          {/* User ID */}
          <div className="relative mb-5">
            <input
              type="text"
              placeholder="ইউজার আইডি"
              className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaUserAlt className="absolute right-3 top-3.5 text-green-600" />
          </div>

          {/* Password */}
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="পাসওয়ার্ড"
              className="w-full border border-green-300 px-4 py-3 pr-10 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <FaLock className="absolute right-3 top-3.5 text-green-600" />
          </div>

          {/* Remember + Button */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="accent-green-600" />
              মনে রাখুন
            </label>

            <button
              className="bg-green-600 text-white px-6 py-2 rounded-md
                         hover:bg-green-700 transition font-medium"
            >
              প্রবেশ করুন

            </button>
          </div>

          {/* Forgot */}
          <p className="text-sm text-green-700 hover:underline cursor-pointer">
            পাসওয়ার্ড ভুলে গেছেন?
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-6 leading-relaxed">
          কারিগরি সহায়তায়: তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর,
          <br />
          তথ্য ও যোগাযোগ প্রযুক্তি বিভাগ
        </p>

      </div>
    </section>
  );
};

export default Login;
