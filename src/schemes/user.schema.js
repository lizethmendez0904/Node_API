import Joi from '@hapi/joi';

const   createUserSchema= Joi.object({
        user_user: Joi.string().required().min(10),
        user_password: Joi.string().required().min(7),
        userStatus_FK: Joi.number().required(),
        role_FK: Joi.number().required(),
    });
const     updateUserSchema= Joi.object({
        user_user: Joi.string().required().min(10),
        user_password: Joi.string().required().min(7),
        userStatus_FK: Joi.number().required(),
        role_FK: Joi.number().required(),
    });

export default{
    createUser: createUserSchema,
    updateUser: updateUserSchema,
}