import * as Yup from 'yup';
import { auth } from '../yup/auth';

export const registerValidationSchema = Yup.object().shape({
  name: auth.name,
  username: auth.username,
  email: auth.email,
  password: auth.registerPassword,
  confirmPassword: auth.confirmPassword,
});

export const loginValidationSchema = Yup.object().shape({
  email: auth.email,
  password: auth.password,
});

export const resetPasswordValidationSchema = Yup.object().shape({
  //   email: auth.email,
  //   code: auth.code,
  password: auth.registerPassword,
  confirmPassword: auth.confirmPassword,
});

export const activationValidationSchema = Yup.object().shape({
  email: auth.email,
  code: auth.code,
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: auth.email,
});
