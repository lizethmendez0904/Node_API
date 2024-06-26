
import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';

class ProductsItem extends Model { }

ProductsItem.init(
    {
        products_item_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        products_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    { sequelize, modelName: 'ProductsItem' }
);

export default ProductsItem;
