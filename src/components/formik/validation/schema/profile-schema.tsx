import * as Yup from 'yup';
import { profile } from '../yup/profile';

export const profileValidationSchema = Yup.object().shape({
    name: profile.name,
    username: profile.username,
});
