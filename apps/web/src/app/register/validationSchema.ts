import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Name is required"),
    email: Yup.string().required("Invalid email").email("Email is required"),
    password: Yup.string().required("Password is required")
});