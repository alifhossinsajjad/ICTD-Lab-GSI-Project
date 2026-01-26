import { useMemo, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const AddUser = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "DISTRICT MODERATOR",
    phone: "",
    division: "",
    district: "",
    upazila: "",
  });

  const divisionsData = useMemo(
    () => [
      {
        name: "ঢাকা",
        districts: [
          { name: "ঢাকা", upazilas: ["ধানমন্ডি", "মিরপুর", "মোহাম্মদপুর"] },
          { name: "গাজীপুর", upazilas: ["গাজীপুর সদর", "কালিয়াকৈর", "শ্রীপুর"] },
        ],
      },
      {
        name: "খুলনা",
        districts: [
          { name: "খুলনা", upazilas: ["খুলনা সদর", "সোনাডাঙ্গা", "দাকোপ"] },
          { name: "যশোর", upazilas: ["যশোর সদর", "ঝিকরগাছা", "মণিরামপুর"] },
        ],
      },
      {
        name: "চট্টগ্রাম",
        districts: [
          { name: "চট্টগ্রাম", upazilas: ["চট্টগ্রাম সদর", "পটিয়া", "রাউজান"] },
          { name: "কক্সবাজার", upazilas: ["কক্সবাজার সদর", "টেকনাফ", "উখিয়া"] },
        ],
      },
    ],
    []
  );

  const roles = [
    "SUPER ADMIN",
    "ADMIN",
    "DIVISION MODERATOR",
    "DISTRICT MODERATOR",
    "UPAZILA MODERATOR",
    "USER",
  ];

  const divisions = useMemo(
    () => divisionsData.map((d) => d.name),
    [divisionsData]
  );

  const districts = useMemo(() => {
    const divObj = divisionsData.find((d) => d.name === form.division);
    return divObj ? divObj.districts.map((x) => x.name) : [];
  }, [divisionsData, form.division]);

  const upazilas = useMemo(() => {
    const divObj = divisionsData.find((d) => d.name === form.division);
    const distObj = divObj?.districts.find((x) => x.name === form.district);
    return distObj ? distObj.upazilas : [];
  }, [divisionsData, form.division, form.district]);

  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleDivisionChange = (value) => {
    setForm((prev) => ({
      ...prev,
      division: value,
      district: "",
      upazila: "",
    }));
  };

  const handleDistrictChange = (value) => {
    setForm((prev) => ({
      ...prev,
      district: value,
      upazila: "",
    }));
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      password: "",
      role: "DISTRICT MODERATOR",
      phone: "",
      division: "",
      district: "",
      upazila: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New User Data:", form);
    alert("User form submitted! Check console.");
    handleReset();
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen relative overflow-hidden py-10 px-4 md:px-8 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/95 via-emerald-50/90 to-emerald-100/85 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto mt-16 relative z-10">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-white/80 border border-emerald-100 flex items-center justify-center shadow-sm">
              <FaUserPlus className="text-emerald-700 text-lg" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-950 tracking-tight">
              Add User
            </h1>
          </div>

          <p className="text-emerald-700 max-w-2xl mx-auto">
            Create a new user account with role and location details.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-emerald-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-emerald-100 bg-emerald-50/50">
            <h2 className="text-lg font-semibold text-emerald-900">
              User Information
            </h2>
            <p className="text-sm text-emerald-700 mt-1">
              Fill in the details below to create a new user.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Role
                </label>
                <select
                  value={form.role}
                  onChange={(e) => handleChange("role", e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all cursor-pointer"
                >
                  {roles.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Division
                </label>
                <select
                  value={form.division}
                  onChange={(e) => handleDivisionChange(e.target.value)}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all cursor-pointer"
                >
                  <option value="">Select Division</option>
                  {divisions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  District
                </label>
                <select
                  value={form.district}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  disabled={!form.division}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all cursor-pointer disabled:opacity-50"
                >
                  <option value="">Select District</option>
                  {districts.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Upazila / Thana
                </label>
                <select
                  value={form.upazila}
                  onChange={(e) => handleChange("upazila", e.target.value)}
                  disabled={!form.district}
                  className="w-full bg-white border border-emerald-200 rounded-2xl px-4 py-3 text-sm text-emerald-950 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 outline-none transition-all cursor-pointer disabled:opacity-50"
                >
                  <option value="">Select Upazila</option>
                  {upazilas.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm hover:bg-emerald-50 transition-all shadow-sm"
              >
                Reset
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md hover:shadow-emerald-500/20"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default AddUser;
