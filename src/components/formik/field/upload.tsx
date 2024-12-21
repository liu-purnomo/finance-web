'use client';

import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import { TrashIcon } from '@heroicons/react/24/outline';
import { useFormikContext } from 'formik';
import { ChangeEvent } from 'react';
import { ShowError } from './error';

export const FileField = ({
  label,
  required,
}: {
  label: string;
  required?: boolean;
}) => {
  const formik = useFormikContext();

  const error = getNestedPathFormik(formik.errors, 'file');

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    formik.setFieldValue('file', files[0]);
    // console.log('File selected:', files[0]); // Log file yang dipilih
  };

  return (
    <div className="mb-5">
      <div>
        <div className="flex justify-between items-center">
          {label && (
            <label className="font-bold text-sm">
              {label}
              {required && <span className="text-danger">*</span>}
            </label>
          )}
          <button type="button">
            <TrashIcon className="w-4 h-4 text-red-500" />
          </button>
        </div>
        <input type="file" name="file" onChange={handleOnChange} />
      </div>
      {error && <ShowError name="file" />}
    </div>
  );
};
