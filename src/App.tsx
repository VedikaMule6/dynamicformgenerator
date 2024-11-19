import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormGenerator from "./components/FormGenerator";
import "./index.css";

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  validation?: {
    pattern: string;
    message: string;
  };
  options?: {
    value: string;
    label: string;
  }[];
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

const initialSchema: FormSchema = {
  formTitle: "Project Requirements Survey",
  formDescription: "Please fill out this survey about your project needs",
  fields: [
    {
      id: "name",
      type: "text",
      label: "Full Name",
      required: true,
      placeholder: "Enter your full name",
    },
    {
      id: "email",
      type: "email",
      label: "Email Address",
      required: true,
      placeholder: "you@example.com",
      validation: {
        pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        message: "Please enter a valid email address",
      },
    },
  ],
};

const App = () => {
  const [schema, setSchema] = useState<FormSchema>(initialSchema);

  return (
    <div className="flex flex-col md:flex-row bg-gray-800 text-gray-100">
      <div className="w-full md:w-1/2">
        <JSONEditor schema={schema} onSchemaChange={setSchema} />
      </div>
      <div className="w-full md:w-1/2">
        <FormGenerator schema={schema} />
      </div>
    </div>
  );
};

export default App;



