'use-client';
import { IconLockDots } from '@/components/icons';
import { getNestedPathFormik } from '@/utilities/functions/formik/getNestedFormik';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { useFormikContext } from 'formik';
import Link from 'next/link';
import React, { FC, useCallback, useState } from 'react';
import { ShowError } from '../error';

interface FieldAuthPasswordProps extends FieldGeneralProps {
  isShowConfirm?: boolean;
  isShowForgot?: boolean;
  confirmName?: string;
  confirmLabel?: string;
  confirmPlaceholder?: string;
  confirmClue?: string;
}

export const FieldAuthPassword: FC<FieldAuthPasswordProps> = ({
  name = 'password',
  label = 'Password',
  isShowConfirm,
  isShowForgot,
  confirmName = 'confirmPassword',
  confirmLabel = 'Confirm Password',
  confirmPlaceholder,
  placeholder,
  clue,
  confirmClue,
  max = 50,
}) => {
  const formik = useFormikContext();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  const passwordError = getNestedPathFormik(formik.errors, name);
  const confirmPasswordError = getNestedPathFormik(formik.errors, confirmName);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOnChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > max) return;
      formik.setFieldValue(name, value);
    },
    [max, name, formik]
  );

  const handleOnChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > max) return;
      formik.setFieldValue(confirmName, value);
    },
    [max, confirmName, formik]
  );

  return (
    <>
      <div
        className={
          formik.submitCount
            ? `${passwordError ? 'has-error' : 'has-success'}`
            : ''
        }
      >
        {label && (
          <div className="flex justify-between">
            <label htmlFor={name}>{label}</label>
            {isShowForgot && (
              <Link
                href="/auth/forgot-password"
                className=" text-primary transition hover:text-black dark:hover:text-white"
              >
                Forgot Password
              </Link>
            )}
          </div>
        )}
        <div className="relative text-white-dark">
          <input
            id={name}
            name={name}
            value={getNestedPathFormik(formik.values, name)}
            onChange={(e) => handleOnChangePassword(e)}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeholder || `Enter ${label}`}
            className="form-input ps-10 placeholder:text-white-dark"
          />
          <span className="absolute start-2 top-1/2 -translate-y-1/2">
            <IconLockDots fill={true} />
          </span>
          <button
            type="button"
            onClick={() => toggleShowPassword()}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
          >
            {showPassword ? (
              <EyeSlashIcon className="text-gray-400 h-5" />
            ) : (
              <EyeIcon className="text-gray-400 h-5" />
            )}
          </button>
        </div>
        {(passwordError || clue) && <ShowError name={name} clue={clue} />}
      </div>
      {isShowConfirm && (
        <div
          className={`mt-5 ${
            formik.submitCount
              ? `${confirmPasswordError ? 'has-error' : 'has-success'}`
              : ''
          }`}
        >
          {confirmLabel && <label htmlFor={confirmName}>{confirmLabel}</label>}
          <div className="relative text-white-dark">
            <input
              name={confirmName}
              id={confirmName}
              value={getNestedPathFormik(formik.values, confirmName)}
              onChange={(e) => handleOnChangeConfirmPassword(e)}
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder={confirmPlaceholder || `Enter ${confirmLabel}`}
              className="form-input ps-10 placeholder:text-white-dark"
            />
            <span className="absolute start-2 top-1/2 -translate-y-1/2">
              <IconLockDots fill={true} />
            </span>
            <button
              type="button"
              onClick={() => toggleShowConfirmPassword()}
              className="absolute right-4 top-1/2 -translate-y-1/2 transform"
            >
              {showConfirmPassword ? (
                <EyeSlashIcon className="text-gray-400 h-5" />
              ) : (
                <EyeIcon className="text-gray-400 h-5" />
              )}
            </button>
          </div>

          {(confirmPasswordError || confirmClue) && (
            <ShowError name={confirmName} clue={confirmClue} />
          )}
        </div>
      )}
    </>
  );
};
