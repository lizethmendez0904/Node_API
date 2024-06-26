
import Pet_shop from '../models/pet_shop.model.js';

export const createPet_shop = async (req, res) => {
    try {
        const { pet_shop_name, products_FK, supplier_FK } = req.body;
        const newPet_shop = await Pet_shop.create({
            Pet_shop_name,
            products_FK,
            supplier_FK
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Pet_shop created successfully',
            id: newPet_shop.pet_shop_id,
        });
    } catch (error) {
        console.error('Error creating pet_shop:', error);
        res.status(500).json({
            message: `Something went wrong in the request ${error}`,
            status: 500,
        });
    }
};

export const showPet_shop = async (req, res) => {
    try {
        await Pet_shop.sync();
        const showPet_shop = await Pet_shop.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'show Pet_shop',
            body: showPet_shop
        });

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdPet_shop = async (req, res) => {
    try {
        await Pet_shop.sync();
        const idPet_shop = req.params.id;
        const showPet_shopId = await Pet_shop.findOne({
            where: {
                pet_shop_id: idPet_shop
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Pet_shop id',
            body: showPet_shoptId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updatePet_shop = async (req, res) => {
    try {
        await Pet_shop.sync();
        const { pet_shop_name, products_FK, supplier_FK } = req.body;
        const idPet_shop = req.params.id;
        const updatePet_shop = await Pet_shop.update({
            pet_shop_name,
            products_FK,
            supplier_FK,
        }, {
            where: {
                pet_shop_id: idPet_shop
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Pet_shop updated',
            body: updatePet_shop
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deletePet_shop = async (req, res) => {
    try {
        await Pet_shop.sync();
        const idPet_shop = req.params.id;
        const deletePet_shop = await Pet_shop.destroy({
            where: {
                pet_shop_id: idPet_shop
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Pet_shop',
            body: deletePet_shop
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

