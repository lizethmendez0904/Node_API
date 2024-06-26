
import Supplier from '../models/supplier.model.js';

export const createSupplier = async (req, res) => {
    try {
        const { Supplier_name, Supplier_contact_name, } = req.body;
        const newSupplier = await Supplier.create({
            supplier_name,
            supplier_contact_name,
        });

        res.status(201).json({
            ok: true,
            status: 201,
            message: 'Supplier created successfully',
            id: newSupplier.Supplier_id,
        });
    } catch (error) {
        console.error('Error creating Supplier:', error);
        res.status(500).json({
            message: 'Something went wrong in the request',
            status: 500,
        });
    }
};

export const showSupplier = async (req, res) => {
    try {
        await Supplier.sync();
        const showSupplier = await Supplier.findAll();
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'show Supplier',
            body: showSupplier
        });

    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const showIdSupplier = async (req, res) => {
    try {
        await Supplier.sync();
        const idSupplier = req.params.id;
        const showSupplierId = await Supplier.findOne({
            where: {
                Supplier_id: idSupplier
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Show Supplier id',
            body: showSupplierId
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const updateSupplier = async (req, res) => {
    try {
        await Supplier.sync();
        const { supplier_name, supplier_contact_name, } = req.body;
        const idSupplier = req.params.id;
        const updateSupplier = await Supplier.update({
            supplier_name,
            supplier_contact_name,
        }, {
            where: {
                supplier_id: idSupplier
            }
        });
        res.status(200).json({
            ok: true,
            status: 200,
            message: 'Supplier updated',
            body: updateSupplier
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

export const deleteSupplier = async (req, res) => {
    try {
        await Supplier.sync();
        const idSupplier = req.params.id;
        const deleteSupplier = await Supplier.destroy({
            where: {
                supplier_id: idSupplier
            }
        });
        res.status(200).json({
            ok: true,
            status: 204,
            message: 'Delete Supplier',
            body: deleteSupplier
        });
    } catch (error) {
        return res.status(500).json({
            message: `Something went wrong in the request: ${error}`,
            status: 500
        });
    }
}

