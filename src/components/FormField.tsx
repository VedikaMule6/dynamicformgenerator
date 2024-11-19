import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormFieldProps {
  field: any;
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  switch (field.type) {
    case "text":
    case "email":
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400">{field.label}</label>
          <input
            {...register(field.id, { required: field.required })}
            type={field.type}
            placeholder={field.placeholder}
            className="mt-1 p-2 border rounded w-full"
          />
          {errors[field.id] && (
            <span className="text-red-500 text-sm">
              {field.validation?.message || "This field is required"}
            </span>
          )}
        </div>
      );
    case "select":
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium">{field.label}</label>
          <select
            {...register(field.id, { required: field.required })}
            className="mt-1 p-2 border rounded w-full"
          >
            <option value="">Select an option</option>
            {field.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors[field.id] && (
            <span className="text-red-500 text-sm">
              {field.validation?.message || "This field is required"}
            </span>
          )}
        </div>
      );
    case "textarea":
      return (
        <div className="mb-4">
          <label className="block text-sm font-medium">{field.label}</label>
          <textarea
            {...register(field.id, { required: field.required })}
            placeholder={field.placeholder}
            className="mt-1 p-2 border rounded w-full"
          />
          {errors[field.id] && (
            <span className="text-red-500 text-sm">
              {field.validation?.message || "This field is required"}
            </span>
          )}
        </div>
      );
    default:
      return null;
  }
};

export default FormField;

