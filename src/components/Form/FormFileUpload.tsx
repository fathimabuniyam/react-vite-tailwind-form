import { CirclePlus, FileTextIcon, XIcon } from 'lucide-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFileUploadStatus } from '../../store/slices/add-user.slice';
import type { FormFieldFileUpload } from '../../types/form.types';

interface FormFileUploadProps {
  field: FormFieldFileUpload;
  value: File[];
  onChange: (files: File[]) => void;
  error?: string;
}

const FormFileUpload: React.FC<FormFileUploadProps> = ({
  field,
  value = [],
  onChange,
  error,
}) => {
  const dispatch = useDispatch();
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (files.length > 0) {
      setIsUploading(true);
      dispatch(setFileUploadStatus({ field: field.id, status: true }));

      // Simulate file upload
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (field.multiple) {
        onChange([...(value || []), ...files]);
      } else {
        onChange([files[0]]);
      }

      setIsUploading(false);
      dispatch(setFileUploadStatus({ field: field.id, status: false }));
    }
  };

  const removeFile = (index: number) => {
    const newFiles = [...(value || [])];
    newFiles.splice(index, 1);
    onChange(newFiles);
  };

  const renderAddedFile = (file: File, index: number) => {
    return (
      <div
        key={index}
        className="flex items-center border border-gray-300 px-3 py-2 rounded"
      >
        <FileTextIcon size={17} />
        <span className="text-[15px] truncate mx-2">{file.name}</span>
        <button
          type="button"
          onClick={() => removeFile(index)}
          className="text-red-500 hover:text-red-700 text-sm cursor-pointer ml-auto"
        >
          <XIcon size={17} strokeWidth={3} />
        </button>
      </div>
    );
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {value && value.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-1 my-2">
          {value.map((file, index) => renderAddedFile(file, index))}
        </div>
      )}

      <div className="flex items-center gap-4">
        {/* Upload */}
        <label className="cursor-pointer">
          {/* Input with Plus */}
          <div className="flex flex-row items-center">
            <div
              className={`flex flex-row items-center border rounded-md text-[15px] pl-4 min-w-[300px]
              ${isUploading ? 'bg-gray-100' : 'bg-white hover:bg-blue-200'}
              ${error ? 'border-red-500' : 'border-gray-300'}
            `}
            >
              {isUploading ? 'Uploading...' : 'Choose File'}

              <span className="text-gray-500 text-xs italic ml-1">
                {field.multiple ? `(Multiple)` : '(Single)'}
              </span>

              <span
                className={`${isUploading ? 'bg-gray-300' : 'bg-gray-500'} text-white px-3 py-2 ml-auto rounded-md`}
              >
                Upload
              </span>
            </div>
            {field.multiple && (
              <CirclePlus
                className="w-9 h-9 text-[#0095da]"
                stroke="#FFFFFF"
                fill="currentColor"
              />
            )}
          </div>
          <input
            type="file"
            className="hidden"
            onChange={handleFileChange}
            multiple={field.multiple}
            accept={field.accept}
            disabled={isUploading}
          />
        </label>
      </div>

      <p className="mt-1 text-xs text-gray-500">
        Accepted Formats (.pdf/.xlsx/.png/.jpeg)
      </p>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default FormFileUpload;
