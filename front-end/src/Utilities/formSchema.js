import * as yup from 'yup'

export default yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email('Please input a vaild email').required(),
    password: yup.string().required().min(4, 'Password must have atleast 4 characters'),
    // terms: yup.boolean().oneOf([true], 'You must agree to terms'),
})