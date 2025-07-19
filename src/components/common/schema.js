import * as Yup from "yup";


const validationSchemaLogIn = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const initialValuesLogIn = {
    email: '',
    password: '',
}

const validationSchemaSignUp = Yup.object().shape({
    name: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(50, "First name cannot exceed 50 characters")
        .required("First name is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});
const initialValuesSignUp = {
    name: '',
    email: '',
    password: '',
}

const initialValuesEmail = {
    email: '',
}
const validationSchemaEmail = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
});

const initialvaluesnewpassword = {
    newPassword: '',
    confirmPassword: '',
}
const validationSchemanewpassword = Yup.object().shape({
    newPassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("New password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required("Confirm password is required"),
});

export { validationSchemaLogIn, validationSchemaSignUp, initialValuesLogIn, initialValuesSignUp, initialValuesEmail, validationSchemaEmail, initialvaluesnewpassword, validationSchemanewpassword };