import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineX,
  HiCheck,
  HiOutlineChip,
  HiOutlineCube,
  HiOutlineDocumentText
} from "react-icons/hi";

const ReportForm = ({ onClose, instituteName, labId }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Prepare data for backend
      const reportData = {
        labId: labId,
        basicRobotics: parseInt(data.basicRobotics) || 0,
        advancedRobotics: parseInt(data.advancedRobotics) || 0,
        "3dPrinter": parseInt(data["3dPrinter"]) || 0,
        vrHeadset: parseInt(data.vrHeadset) || 0,
        networkCamera: parseInt(data.networkCamera) || 0,
        ups: parseInt(data.ups) || 0,
        isFunctional: data.isFunctional || null,
        damageDetails: data.damageDetails || null,
        storageConditions: data.storageConditions || null,
        recommendations: data.recommendations || null,
      };

      const response = await fetch(`${API_BASE_URL}/lab-reports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reportData),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Report submitted successfully!");
        onClose();
      } else {
        setSubmitError(result.message || "Failed to submit report");
      }
    } catch (error) {
      console.error("Error submitting report:", error);
      setSubmitError("Failed to submit report. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="ml-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 border-2 border-emerald-400/30 rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-300 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Error Alert */}
      {submitError && (
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 bg-rose-900/90 border-2 border-rose-500/50 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-sm animate-in slide-in-from-top duration-300">
          <p className="font-semibold">❌ {submitError}</p>
        </div>
      )}

      {/* Header */}
      <div className="relative flex items-center justify-between p-6 border-b border-emerald-400/20 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-teal-900/80 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-emerald-900/50">
            <HiOutlineDocumentText className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-white to-teal-200 uppercase tracking-wide">
              SOR: {instituteName || "NAME OF THE INSTITUTE"}
            </h2>
            <p className="text-emerald-300/80 text-sm mt-1 flex items-center gap-2">
              <HiOutlineChip className="w-4 h-4" />
              IT Equipment & Functionality Report
            </p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="group p-2.5 text-emerald-300 hover:text-white bg-emerald-800/30 hover:bg-rose-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-rose-900/50 hover:scale-110 cursor-pointer"
        >
          <HiOutlineX className="w-6 h-6 transition-transform group-hover:rotate-90" />
        </button>
      </div>

      {/* Form Content */}
      <div className="relative flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-track-emerald-950/50 scrollbar-thumb-emerald-600/50 hover:scrollbar-thumb-emerald-500/70">
        <form
          id="report-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-10"
        >
          {/* Section A: IT Equipment */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-emerald-400/40">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg">
                <HiOutlineCube className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200 uppercase tracking-wide">
                A. IT Equipment Inventory
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { label: "Basic Robotics Instruments", name: "basicRobotics", icon: "🤖" },
                { label: "Advanced Robotics Instruments", name: "advancedRobotics", icon: "🦾" },
                { label: "3D Printer & Filament", name: "3dPrinter", icon: "🖨️" },
                { label: "VR Headset with Controller", name: "vrHeadset", icon: "🥽" },
                { label: "IR Fixed Bullet Network Camera", name: "networkCamera", icon: "📹" },
                { label: "UPS", name: "ups", icon: "🔋" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="group flex items-center justify-between gap-4 p-4 bg-gradient-to-r from-emerald-950/60 to-teal-950/40 rounded-xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-0.5"
                >
                  <label className="flex items-center gap-3 text-emerald-100 text-sm font-semibold cursor-pointer">
                    <span className="text-2xl transition-transform group-hover:scale-110">
                      {item.icon}
                    </span>
                    {item.label}
                  </label>
                  <input
                    type="number"
                    min="0"
                    defaultValue="0"
                    {...register(item.name)}
                    className="w-24 bg-emerald-950/80 border-2 border-emerald-500/40 rounded-lg px-4 py-2.5 text-right text-white font-bold focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition-all hover:border-emerald-400/60 shadow-inner"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Section B: Functionality */}
          <div className="bg-gradient-to-br from-teal-900/30 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-teal-400/40">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-200 mb-6 uppercase tracking-wide">
              B. Whether the robotic instruments are functional
            </h3>
            <div className="flex gap-8">
              <label className="group flex items-center gap-4 cursor-pointer p-4 rounded-xl hover:bg-emerald-800/20 transition-all duration-300">
                <div className="relative flex items-center justify-center w-7 h-7">
                  <input
                    type="radio"
                    value="yes"
                    {...register("isFunctional")}
                    className="peer appearance-none w-6 h-6 border-3 border-emerald-400/60 rounded-full checked:border-emerald-400 checked:bg-gradient-to-br checked:from-emerald-500/30 checked:to-teal-500/30 transition-all cursor-pointer shadow-lg hover:shadow-emerald-400/30"
                  />
                  <div className="absolute w-3 h-3 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full scale-0 peer-checked:scale-100 transition-transform shadow-lg shadow-emerald-500/50"></div>
                </div>
                <span className="text-emerald-100 font-semibold text-lg group-hover:text-white transition-colors">
                  ✓ Yes
                </span>
              </label>
              <label className="group flex items-center gap-4 cursor-pointer p-4 rounded-xl hover:bg-rose-800/20 transition-all duration-300">
                <div className="relative flex items-center justify-center w-7 h-7">
                  <input
                    type="radio"
                    value="no"
                    {...register("isFunctional")}
                    className="peer appearance-none w-6 h-6 border-3 border-rose-400/60 rounded-full checked:border-rose-400 checked:bg-gradient-to-br checked:from-rose-500/30 checked:to-red-500/30 transition-all cursor-pointer shadow-lg hover:shadow-rose-400/30"
                  />
                  <div className="absolute w-3 h-3 bg-gradient-to-br from-rose-400 to-red-400 rounded-full scale-0 peer-checked:scale-100 transition-transform shadow-lg shadow-rose-500/50"></div>
                </div>
                <span className="text-emerald-100 font-semibold text-lg group-hover:text-white transition-colors">
                  ✗ No
                </span>
              </label>
            </div>
          </div>

          {/* Section C: Details of damaged/inoperative equipment */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-emerald-400/40">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200 mb-4 uppercase tracking-wide">
              C. Details of damaged/inoperative equipment and possible causes
            </h3>
            <textarea
              {...register("damageDetails")}
              className="w-full bg-gradient-to-br from-emerald-950/80 to-teal-950/60 border-2 border-emerald-500/40 rounded-xl p-5 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition-all resize-y min-h-[120px] placeholder-emerald-500/40 hover:border-emerald-400/60 shadow-inner font-medium leading-relaxed"
              placeholder="Describe any damaged equipment, symptoms, and possible causes..."
            ></textarea>
          </div>

          {/* Section D: Usage conditions and storage conditions */}
          <div className="bg-gradient-to-br from-teal-900/30 to-emerald-900/20 backdrop-blur-sm rounded-2xl p-6 border border-teal-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-teal-400/40">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-emerald-200 mb-4 uppercase tracking-wide">
              D. Usage conditions and storage conditions
            </h3>
            <textarea
              {...register("storageConditions")}
              className="w-full bg-gradient-to-br from-teal-950/80 to-emerald-950/60 border-2 border-teal-500/40 rounded-xl p-5 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-teal-400/60 focus:border-teal-400 transition-all resize-y min-h-[120px] placeholder-teal-500/40 hover:border-teal-400/60 shadow-inner font-medium leading-relaxed"
              placeholder="Describe usage frequency, storage environment, temperature, humidity, etc..."
            ></textarea>
          </div>

          {/* Section E: Problems encountered and necessary recommendations */}
          <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-emerald-400/40">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-teal-200 mb-4 uppercase tracking-wide">
              E. Problems encountered and necessary recommendations
            </h3>
            <textarea
              {...register("recommendations")}
              className="w-full bg-gradient-to-br from-emerald-950/80 to-teal-950/60 border-2 border-emerald-500/40 rounded-xl p-5 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition-all resize-y min-h-[120px] placeholder-emerald-500/40 hover:border-emerald-400/60 shadow-inner font-medium leading-relaxed"
              placeholder="List problems, challenges, and recommendations for improvement..."
            ></textarea>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="relative p-6 border-t border-emerald-400/20 bg-gradient-to-r from-emerald-900/80 via-teal-900/70 to-emerald-900/80 backdrop-blur-xl flex justify-end gap-4">
        <button
          onClick={onClose}
          disabled={isSubmitting}
          className="group px-8 py-3 rounded-xl border-2 border-emerald-400/40 text-emerald-300 hover:bg-emerald-800/40 hover:text-white hover:border-emerald-400/60 transition-all font-semibold cursor-pointer shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          Cancel
        </button>
        <button
          form="report-form"
          type="submit"
          disabled={isSubmitting}
          className="group relative px-10 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 bg-size-200 hover:bg-pos-100 text-white shadow-xl shadow-emerald-900/50 hover:shadow-2xl hover:shadow-emerald-700/60 transition-all duration-300 font-bold flex items-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <HiCheck className="w-6 h-6" />
              Submit Report
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ReportForm;

