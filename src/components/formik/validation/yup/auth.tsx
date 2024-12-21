import * as Yup from 'yup';

/**
 * -----------------------------------------------------------------------------------
 * Authentication validation
 * -----------------------------------------------------------------------------------
 *
 * These are validations for fields commonly used in authentication.
 * However, they can also be used outside of authentication.
 * The password validation is separated specifically for registration,
 * as there are validations for password strength.
 * Password strength information is not needed for login.
 *
 */
export const auth = {
  name: Yup.string().required().min(3).max(50).label('Name'),
  username: Yup.string().required().min(5).max(50).label('Username'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).max(50).label('Password'),
  registerPassword: Yup.string()
    .required()
    .test('lowercase', 'Include at least one lowercase letter', (value: any) => /[a-z]/.test(value))
    .test('uppercase', 'Include at least one uppercase letter', (value: any) => /[A-Z]/.test(value))
    .test('number', 'Include at least one number', (value: any) => /\d/.test(value))
    .test('character', 'Include at least one character (!@#$%&)', (value: any) => /[!@#$%&]/.test(value))
    .min(6)
    .label('Password'),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .label('Confirm Password'),
  code: Yup.string().required().max(5).min(5).label('Code'),
};
