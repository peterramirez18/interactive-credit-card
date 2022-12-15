import * as yup from "yup"
export const cardNumberSchema = yup.object().shape({
    number: yup.string().max(16).required(),
    cvc: yup.string().min(3).max(4).required(),
    name: yup.string().required(),
    month: yup.string().min(2).max(2).required(),
    year: yup.string().min(4).max(4).required(),
})