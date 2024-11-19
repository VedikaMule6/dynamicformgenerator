import React, { useState } from "react";
import ReactJson from "react-json-view";

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

interface JSONEditorProps {
  schema: FormSchema;
  onSchemaChange: (schema: FormSchema) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ schema, onSchemaChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleEdit = (edit: any) => {
    try {
      const updatedSchema = edit.updated_src as FormSchema;
      onSchemaChange(updatedSchema);
      setError(null);
    } catch (err) {
      setError("Invalid JSON schema");
    }
  };

  return (
    <div className="p-4 bg-gray-800 text-white shadow-lg">
      <h2 className="text-lg font-bold mb-2">JSON Editor</h2>
      <ReactJson
        src={schema}
        theme="monokai"
        onEdit={handleEdit}
        onAdd={handleEdit}
        onDelete={handleEdit}
        enableClipboard={false}
        displayDataTypes={false}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;

