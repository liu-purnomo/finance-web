// name, alt, file, description, tags

import * as Yup from 'yup';
import { global } from '../yup/global';

export const fileValidationSchema = Yup.object().shape({
    name: global.name,
    file: global.file,
    description: global.description,
});
