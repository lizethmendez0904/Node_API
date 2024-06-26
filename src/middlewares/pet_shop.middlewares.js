
import Joi from '@hapi/joi';

export default {
    createPet_shop: Joi.object({
        name: Joi.string().required(),
    }),
};
