'use-client';
import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import 'flatpickr/dist/flatpickr.css';
import { Field, useFormikContext } from 'formik';
import { FC } from 'react';
import { ShowError } from './error';

interface FieldProps extends FieldGeneralProps {
  name: string;
  onChange?: (prop: any) => void;
}

export const Checkbox: FC<FieldProps> = ({
  label,
  name,
  type = 'checkbox',
  clue,
  className = 'form-checkbox',
  onChange,
}) => {
  const formik = useFormikContext();

  const error = getNestedPathFormik(formik.errors, name);
  const values = getNestedPathFormik(formik.values, name);

  return (
    <div
      className={
        formik.submitCount ? `${error ? 'has-error' : 'has-success'}` : ''
      }
    >
      <div className="flex">
        <Field name={name} id={name} type={type} className={className} />
        {values}
        <label htmlFor={name}>{label || name}</label>
      </div>

      {(error || clue) && <ShowError name={name} clue={clue} />}
    </div>
  );
};
