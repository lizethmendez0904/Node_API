// restaurant.model.js

import sequelize from '../config/connect.db.js';
import { Model, DataTypes } from 'sequelize';
import MenuItem from './products.model.js';
import Provider from './supplier.model.js';

class Pet_shop extends Model { }

Pet_shop.init(
    {
        pet_shop_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        pet_shop_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        products_FK: {
            type: DataTypes.INTEGER,
            references: {
                model: MenuItem,
                key: 'products_item_id'
            }
        },
        supplier_FK: {
            type: DataTypes.INTEGER,
            references: {
                model: Provider,
                key: 'supplier_id',
            }
        }
    },
    { sequelize, modelName: 'Pet_shop' }
);

export default Pet_shop;
