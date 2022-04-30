import Joi from "joi"
export default  Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string().required(),
    confirmPassword: Joi.any().valid(Joi.ref('password')).required(),

    registerNo: Joi.string().required(),
    phone: Joi.number().required().min(10).max(10),

    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})