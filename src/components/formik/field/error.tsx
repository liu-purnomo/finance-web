import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import { useFormikContext } from 'formik';
import React from 'react';

interface ShowErrorProps {
  name: string;
  clue?: string;
}

export const ShowError: React.FC<ShowErrorProps> = ({ name, clue }) => {
  const formik = useFormikContext();

  const error = getNestedPathFormik(formik.errors, name);
  return formik.submitCount && error ? (
    <div className="mt-1 text-sm text-danger">{error}</div>
  ) : (
    <div className="mt-1 text-sm text-success">
      <i>{clue}</i>
    </div>
  );
};
