import * as yup from 'yup';
import {ref} from 'yup';

const getCharacterValidation =(str)=>{
    return `Your password must have at least one ${str} character`;
}
export const profileSchema = yup.object({
    username: yup.string()
        .max(10, 'User name cannot be more than 10 characters')
        .required('User name required'),
    password: yup.string()
        .required('Password required')
        .matches(/[0-9]/,getCharacterValidation('digit'))
        .matches(/[A-Z]/,getCharacterValidation('uppercase'))
        .matches(/[a-z]/,getCharacterValidation('lowercase')),
  confirmPassword :yup.string()
  .required('Please re-enter your password')
  .oneOf([ref('password')],'Passwords does not match')
})