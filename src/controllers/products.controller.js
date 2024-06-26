
import ProductsItem from '../models/products.model.js';

export const createProducts = async (req, res) => {
    try {
        const { products_name, products_price, } = req.body;
        const newProducts = await ProductsItem.create({
            products_name,
            products_price,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Product created successfully',
            id: newProducts.products_item_id,
        });
    } catch (error) {
        console.error('Error creating Menu:', error);
        res.status(500).json({
            message: 'Something went wrong in the request',
            status: 500,
        });
    }
};

export const showProducts = async (req, res) => {
    try {
        await ProductsItemItem.sync();
        const showProducts = await ProductsItem.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'show Product',
            body: showProducts
        });

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdProducts = async (req, res) => {
    try {
        await ProductsItem.sync();
        const showIdProducts = req.params.id;
        const showProductsId = await ProductsItem.findOne({
            where: {
                products_item_id: idProducts
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Products id',
            body: showProductsId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updateProducts = async (req, res) => {
    try {
        await ProductsItem.sync();
        const { products_name, products_price, } = req.body;
        const idProducts = req.params.id;
        const updateProducts = await ProductsItem.update({
            products_name,
            products_price,
        }, {
            where: {
                products_item_id: idProducts
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Product updated',
            body: updateMenu
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deleteProducts = async (req, res) => {
    try {
        await ProductsItem.sync();
        const idProducts = req.params.id;
        const deleteProducts = await ProductsItem.destroy({
            where: {
                products_item_id: idProducts
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Products',
            body: deleteProducts
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

