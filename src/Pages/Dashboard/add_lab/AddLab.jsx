import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";

const AddLab = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  /* ======================
     Submit
  ======================= */
  const onSubmit = (data) => {
    const payload = {
      institute: data.institute,
      seat: Number(data.seat),
      email: data.email,
      labType: data.labType,
      lat: Number(data.lat),
      long: Number(data.long),
    };

    console.log("✅ Backend Payload:", payload);
    alert("Lab added successfully");
    reset();
  };

  const baseInput =
    "w-full mt-1 rounded-xl px-4 py-3 text-sm bg-white border border-emerald-300 " +
    "focus:border-emerald-500 focus:ring-2 focus:ring-emerald-400 outline-none transition-all";

  const errorText = "text-xs text-red-600 mt-1";

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-emerald-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
              <MdOutlineLibraryAdd className="text-emerald-700 text-2xl" />
            </div>
            <h1 className="text-3xl font-bold text-emerald-900">
              Add Lab
            </h1>
          </div>
          <p className="text-emerald-700">
            Division based lab registration
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-3xl p-8 shadow-xl border border-emerald-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Institute */}
            <Field label="Institute Name">
              <input
                className={baseInput}
                {...register("institute", { required: true })}
              />
              {errors.institute && (
                <p className={errorText}>Institute name is required</p>
              )}
            </Field>

            {/* Seat */}
            <Field label="Seat">
              <input
                className={baseInput}
                inputMode="numeric"
                {...register("seat", {
                  required: true,
                  pattern: /^[0-9]+$/,
                })}
              />
              {errors.seat && (
                <p className={errorText}>Valid seat number required</p>
              )}
            </Field>

            {/* Email */}
            <Field label="Email">
              <input
                type="email"
                className={baseInput}
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <p className={errorText}>Valid email is required</p>
              )}
            </Field>

            {/* Lab Type */}
            <Field label="Lab Type">
              <select
                className={baseInput}
                {...register("labType", { required: true })}
              >
                <option value="">Select lab type</option>
                <option value="sof">SOF</option>
                <option value="ictdl_sof">ICTDL + SOF</option>
                <option value="dl_sof">DL + SOF</option>
              </select>
              {errors.labType && (
                <p className={errorText}>Lab type is required</p>
              )}
            </Field>

            {/* Latitude */}
            <Field label="Latitude">
              <input
                type="number"
                step="any"
                className={baseInput}
                {...register("lat", { required: true })}
              />
              {errors.lat && (
                <p className={errorText}>Latitude is required</p>
              )}
            </Field>

            {/* Longitude */}
            <Field label="Longitude">
              <input
                type="number"
                step="any"
                className={baseInput}
                {...register("long", { required: true })}
              />
              {errors.long && (
                <p className={errorText}>Longitude is required</p>
              )}
            </Field>

          </div>

          {/* Actions */}
          <div className="mt-10 flex justify-end gap-4">
            <button
              type="reset"
              onClick={() => reset()}
              className="px-10 py-3 bg-gray-600 hover:bg-gray-700 cursor-pointer text-white rounded-xl font-semibold"
            >
              <GrPowerReset  className="text-2xl"/>
            </button>

            <button
              type="submit"
              className="px-10 py-3 bg-emerald-600 hover:bg-emerald-700 cursor-pointer text-white rounded-xl font-semibold"
            >
              Add Lab
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

/* ======================
   Reusable Field
====================== */
const Field = ({ label, children }) => (
  <div>
    <label className="text-xs font-semibold text-emerald-700">
      {label}
    </label>
    {children}
  </div>
);

export default AddLab;
