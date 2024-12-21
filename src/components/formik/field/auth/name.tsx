'use-client';
import { IconUser } from '@/components/icons';
import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import { useFormikContext } from 'formik';
import { FC, useCallback, useEffect, useState } from 'react';
import { ShowError } from '../error';

interface FieldAuthName extends FieldGeneralProps {}

export const FieldAuthName: FC<FieldAuthName> = ({
  name = 'name',
  type = 'text',
  label = 'Name',
  clue,
  placeholder,
  max = 50,
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

      if (value.length > max) return;

      formik.setFieldValue(name, value);
    },
    [formik, name, max]
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
          <IconUser fill={true} />
        </span>
      </div>
      {(error || clue) && <ShowError name={name} clue={clue} />}
    </div>
  );
};
