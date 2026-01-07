import React from "react";
import { useForm } from "react-hook-form";

const TraningUpdate = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const lastName = ["principal", "Headmaster","super", "vice-principal","Senior vice-principal","Associate Professor","Assistant Professor","Assistant Headmaster","Assistant Superintendent","Senior Lecturer","Lecturer", "Physical Education Teacher", "Exhibitor","Librarian", "Assistant Librarian","Chief Instructor","Senior Instructor","Trade Instructor","Instructor","Junior Instructor","Senior Teacher","Junior Teacher", "Senior Assistant Teacher","Assistant Cleric", "Junior Cleric","Maulvi","Ebtedayi Pradhand", "Junior Ebtedayi Pradhan","The First Person To do so"];

  return (
    <div>
      <div>
        {/* title */}
        Title
      </div>

      <div>
        <form>
          <div>
            <h1>1st trainee information</h1>
            <label>name(in Bengali)</label>
            <input
              type="text"
              {...register("Bangla", { required: true })}
              className="border"
            />
            <label>Name (English)</label>
            <input
              type="text"
              {...register("English", { required: true })}
              className="border"
            />
            <label>Last Name</label>
            <select>
              {lastName.map((n, index) => (
                <option key={index} value="">
                  {n}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TraningUpdate;
