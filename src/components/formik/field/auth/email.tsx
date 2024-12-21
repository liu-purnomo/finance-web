'use-client';
import { IconMail } from '@/components/icons';
import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import { useFormikContext } from 'formik';
import { FC, useCallback, useEffect, useState } from 'react';
import { ShowError } from '../error';

interface FieldAuthEmail extends FieldGeneralProps {}

export const FieldAuthEmail: FC<FieldAuthEmail> = ({
  name = 'email',
  type = 'email',
  label = 'Email',
  clue,
  placeholder,
  className = 'form-input ps-10 placeholder:text-white-dark',
}) => {
  const formik = useFormikContext();
  const error = getNestedPathFormik(formik.errors, name);

  const [inputData, setInputData] = useState(
    getNestedPathFormik(formik.values, name)
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      formik.setFieldValue(name, value);
    },
    [formik, name]
  );

  const handleOnBlur = useCallback(() => {
    formik.setFieldValue(name, inputData);
  }, [formik, inputData, name]);

  useEffect(() => {
    setInputData(getNestedPathFormik(formik.values, name));
  }, [formik.values, name]);

  return (
    <div
      className={
        formik.submitCount ? `${error ? 'has-error' : 'has-success'}` : ''
      }
    >
      {label && <label htmlFor={label}>{label}</label>}

      <div className="relative text-white-dark">
        <input
          id={label}
          type={type}
          onBlur={handleOnBlur}
          placeholder={placeholder || `Enter ${label}`}
          className={className}
          value={inputData}
          onChange={(e) => handleInputChange(e)}
        />
        <span className="absolute start-3 top-1/2 -translate-y-1/2">
          <IconMail fill={true} />
        </span>
      </div>
      {(error || clue) && <ShowError name={name} clue={clue} />}
    </div>
  );
};
