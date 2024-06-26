
import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';

class Supplier extends Model { }

Supplier.init(
    {
        supplier_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        supplier_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        supplier_contact_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    { sequelize, modelName: 'Supplier' }
);

export default Supplier;
