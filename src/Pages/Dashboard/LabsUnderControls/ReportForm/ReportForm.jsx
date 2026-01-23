import React from "react";
import { useForm } from "react-hook-form";
import { HiOutlineX, HiCheck } from "react-icons/hi";

const ReportForm = ({ onClose, instituteName, labId }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Report Data:", { ...data, labId, instituteName });
        // TODO: Send data to backend
        onClose();
    };

    return (
        <div className="bg-emerald-950 border border-emerald-500/30 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald-500/30 bg-emerald-900/50 backdrop-blur-sm">
                <div>
                    <h2 className="text-xl font-bold text-white uppercase tracking-wider">
                        SOR: {instituteName || "NAME OF THE INSTITUTE"}
                    </h2>
                    <p className="text-emerald-400 text-sm mt-1">
                        IT Equipment & Functionality Report
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 text-emerald-400 hover:text-white hover:bg-emerald-800/50 rounded-lg transition-colors cursor-pointer"
                >
                    <HiOutlineX className="w-6 h-6" />
                </button>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-emerald-950 scrollbar-thumb-emerald-700/50 hover:scrollbar-thumb-emerald-600/70">
                <form id="report-form" onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Section A: IT Equipment */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-300 border-b border-emerald-500/30 pb-2 mb-6">
                            A. IT Equipment
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                { label: "Basic Robotics Instruments", name: "basicRobotics" },
                                {
                                    label: "Advanced Robotics Instruments",
                                    name: "advancedRobotics",
                                },
                                { label: "3D Printer & Filament", name: "3dPrinter" },
                                {
                                    label: "VR Headset with Controller",
                                    name: "vrHeadset",
                                },
                                {
                                    label: "IR Fixed Bullet Network Camera",
                                    name: "networkCamera",
                                },
                                { label: "UPS", name: "ups" },
                            ].map((item) => (
                                <div
                                    key={item.name}
                                    className="flex items-center justify-between gap-4 p-3 bg-emerald-900/20 rounded-lg border border-emerald-500/10 hover:border-emerald-500/30 transition-colors"
                                >
                                    <label className="text-emerald-100/90 text-sm font-medium">
                                        {item.label} :
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        {...register(item.name)}
                                        className="w-20 bg-emerald-950/80 border border-emerald-500/30 rounded-md px-3 py-1.5 text-right text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Section B: Functionality */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-300 border-b border-emerald-500/30 pb-2 mb-6">
                            B. Whether the robotic instruments are functional.
                        </h3>
                        <div className="flex gap-10">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center w-6 h-6">
                                    <input
                                        type="radio"
                                        value="yes"
                                        {...register("isFunctional")}
                                        className="peer appearance-none w-5 h-5 border-2 border-emerald-500/50 rounded-full checked:border-emerald-400 checked:bg-emerald-500/20 transition-all cursor-pointer"
                                    />
                                    <div className="absolute w-2.5 h-2.5 bg-emerald-400 rounded-full scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></div>
                                </div>
                                <span className="text-emerald-100 group-hover:text-white transition-colors">
                                    Yes
                                </span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center justify-center w-6 h-6">
                                    <input
                                        type="radio"
                                        value="no"
                                        {...register("isFunctional")}
                                        className="peer appearance-none w-5 h-5 border-2 border-rose-500/50 rounded-full checked:border-rose-400 checked:bg-rose-500/20 transition-all cursor-pointer"
                                    />
                                    <div className="absolute w-2.5 h-2.5 bg-rose-400 rounded-full scale-0 peer-checked:scale-100 transition-transform pointer-events-none"></div>
                                </div>
                                <span className="text-emerald-100 group-hover:text-white transition-colors">
                                    No
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Section C: Details of damaged/inoperative equipment */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-300 border-b border-emerald-500/30 pb-2 mb-4">
                            C. Details of damaged/inoperative equipment and possible causes.
                        </h3>
                        <textarea
                            {...register("damageDetails")}
                            className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-y min-h-[100px] placeholder-emerald-500/30"
                            placeholder="Describe any damaged equipment..."
                        ></textarea>
                    </div>

                    {/* Section D: Usage conditions and storage conditions */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-300 border-b border-emerald-500/30 pb-2 mb-4">
                            D. Usage conditions and storage conditions.
                        </h3>
                        <textarea
                            {...register("storageConditions")}
                            className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-y min-h-[100px] placeholder-emerald-500/30"
                            placeholder="Describe usage and storage conditions..."
                        ></textarea>
                    </div>

                    {/* Section E: Problems encountered and necessary recommendations */}
                    <div>
                        <h3 className="text-lg font-semibold text-emerald-300 border-b border-emerald-500/30 pb-2 mb-4">
                            E. Problems encountered and necessary recommendations.
                        </h3>
                        <textarea
                            {...register("recommendations")}
                            className="w-full bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4 text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-y min-h-[100px] placeholder-emerald-500/30"
                            placeholder="List problems and recommendations..."
                        ></textarea>
                    </div>
                </form>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-emerald-500/30 bg-emerald-900/50 backdrop-blur-sm flex justify-end gap-4">
                <button
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-800/50 hover:text-white transition-all font-medium cursor-pointer"
                >
                    Cancel
                </button>
                <button
                    form="report-form"
                    type="submit"
                    className="px-8 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all font-semibold flex items-center gap-2 cursor-pointer"
                >
                    <HiCheck className="w-5 h-5" />
                    Submit Report
                </button>
            </div>
        </div>
    );
};

export default ReportForm;