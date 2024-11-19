import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-800 dark:bg-gray-800">
      <div className="w-full max-w-3xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-auto h-5/6 md:h-4/5">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200 mb-4 text-center">
          {schema.formTitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
          {schema.formDescription}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {schema.fields?.map((field: any) => (
            <FormField
              key={field.id}
              field={field}
              register={register}
              errors={errors}
            />
          ))}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormGenerator;

