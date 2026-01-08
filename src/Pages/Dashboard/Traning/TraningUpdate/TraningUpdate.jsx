import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  HiOutlineUser,
  HiOutlineSave,
  HiOutlineArrowLeft,
} from "react-icons/hi";

const TraningUpdate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your submission logic here
  };

  const lastName = [
    "principal",
    "Headmaster",
    "super",
    "vice-principal",
    "Senior vice-principal",
    "Associate Professor",
    "Assistant Professor",
    "Assistant Headmaster",
    "Assistant Superintendent",
    "Senior Lecturer",
    "Lecturer",
    "Physical Education Teacher",
    "Exhibitor",
    "Librarian",
    "Assistant Librarian",
    "Chief Instructor",
    "Senior Instructor",
    "Trade Instructor",
    "Instructor",
    "Junior Instructor",
    "Senior Teacher",
    "Junior Teacher",
    "Senior Assistant Teacher",
    "Assistant Cleric",
    "Junior Cleric",
    "Maulvi",
    "Ebtedayi Pradhand",
    "Junior Ebtedayi Pradhan",
    "The First Person To do so",
  ];

  const educationDegrees = [
    "Diploma in Engineering",
    "Diploma in Computer Science",
    "Diploma in Information Technology",
    "Diploma in Business Studies",
    "Diploma in Nursing",
    "Diploma in Medical Technology",
    "BA",
    "BSc",
    "BCom",
    "BBA",
    "BCA",
    "BTech",
    "BE",
    "LLB",
    "MBBS",
    "BPharm",
    "BArch",
    "BFA",
    "MA",
    "MSc",
    "MCom",
    "MBA",
    "MCA",
    "MTech",
    "ME",
    "LLM",
    "MPH",
    "MPharm",
    "PhD",
    "EdD",
    "DBA",
    "Professional Certification",
    "Vocational Training",
    "Trade Certificate",
    "Online Course / Bootcamp",
    "Other",
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 15 },
    },
  };

  // Reusable UI Components
  const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="flex items-start gap-4 mb-6 pb-4 border-b border-gray-100">
      <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );

  const InputGroup = ({ label, required, children }) => (
    <div className="space-y-1.5">
      <label className="block text-sm font-semibold text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );

  const Input = ({ className, ...props }) => (
    <input
      className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm ${className}`}
      {...props}
    />
  );

  const Select = ({ className, children, ...props }) => (
    <select
      className={`w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-sm ${className}`}
      {...props}
    >
      {children}
    </select>
  );

  // Helper to render a trainee form section
  const RenderTraineeSection = ({ title, index }) => (
    <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <SectionHeader
        icon={HiOutlineUser}
        title={title}
        subtitle={`Enter personal and professional details for the ${title.toLowerCase()}.`}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <InputGroup label="Name (Bengali)" required>
          <Input
            type="text"
            {...register("bangla", { required: true })}
            placeholder="নাম লিখুন"
          />
        </InputGroup>

        <InputGroup label="Name (English)" required>
          <Input
            type="text"
            {...register("english", { required: true })}
            placeholder="Enter name"
          />
        </InputGroup>

        <InputGroup label="Designation">
          <Select {...register("designation")}>
            <option value="">Select Designation</option>
            {lastName.map((n, i) => (
              <option key={i} value={n}>
                {n}
              </option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup label="Teaching Subject" required>
          <Input
            type="text"
            {...register("subject", { required: true })}
            placeholder="e.g. Mathematics"
          />
        </InputGroup>

        <InputGroup label="Highest Qualification">
          <Select {...register("qualification")}>
            <option value="">Select Degree</option>
            {educationDegrees.map((degree, i) => (
              <option key={i} value={degree}>
                {degree}
              </option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup label="Date of Birth" required>
          <Input
            type="date"
            {...register("dob", { required: true })}
          />
        </InputGroup>

        <InputGroup label="Gender">
          <Select {...register("gender")}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Select>
        </InputGroup>

        <InputGroup label="Mobile No." required>
          <Input
            type="number"
            {...register("mobile", { required: true })}
            placeholder="018xxxxxxxx"
          />
        </InputGroup>

        <InputGroup label="Email" required>
          <Input
            type="email"
            {...register("email", { required: true })}
            placeholder="example@mail.com"
          />
        </InputGroup>

        <InputGroup label="NID Number" required>
          <Input
            type="number"
            {...register("nid", { required: true })}
            placeholder="Enter NID"
          />
        </InputGroup>
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-6">
     <div
       
        >
          <div className=" text-center gap-2 mb-1">
            
            <h1 className="text-2xl font-bold text-gray-800">
              Update Training Information
            </h1>
          </div>
          <p className="text-center text-gray-500 text-sm ml-7">
            Manage trainee details and reservations.
          </p>
        </div>

      <motion.form
        variants={containerVariants}
        
        animate="visible"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RenderTraineeSection title="1st Trainee Information" index={0} />
        <RenderTraineeSection title="2nd Trainee Information" index={1} />
        <RenderTraineeSection title="3rd Trainee Information" index={2} />
        <RenderTraineeSection title="4th Trainee Information" index={3} />
      </motion.form>

       {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-3 ml-7 md:ml-0"
        >
          <Link
            to={'/dashboard/traning'}
            className="px-6 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-medium shadow-sm"
          >
            Cancel
          </Link>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit(onSubmit)}
            className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-sm hover:shadow transition-all font-medium"
          >
            <HiOutlineSave className="w-5 h-5" />
            Reservation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TraningUpdate;
