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
export const profile = {
    name: Yup.string().required().min(3).max(50).label('Name'),
    username: Yup.string().required().min(5).max(50).label('Username'),
    phone: Yup.string().required().min(5).max(16).label('Phone'),
};
