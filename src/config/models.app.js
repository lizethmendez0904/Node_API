import sequelize from "../config/connect.db.js";
import UserStatus from "../models/userStatus.model.js";
import Role from "../models/role.model.js";
import User from "../models/user.model.js";
import Pet_shop from '../models/pet_shop.model.js';
import supplier from '../models/supplier.model.js';
import ProductsItem from "../models/products.model.js";


export const modelsApp = function initModels(select) {
    if (select) {
        UserStatus.hasMany(User, { foreignKey: { name: "userStatus_FK", field: "userStatus_FK", allowNull: true } });
        User.belongsTo(UserStatus, {
            foreignKey: { name: "userStatus_FK", field: "userStatus_FK", allowNull: true },
            constraints: true,
        })
        Role.hasMany(User, { foreignKey: { name: "role_FK", field: "role_FK", allowNull: true } });
        User.belongsTo(Role, {
            as: 'Current',
            foreignKey: { name: "role_FK", field: "role_FK", allowNull: true },
            constraints: true
        });
        supplier.hasMany(Pet_shop, { foreignKey: {name: "supplier_FK", field: "supplier_FK", allowNull: true} });
        Pet_shop.belongsTo(supplier, {
            foreignKey: {
                name: "supplier_FK",
                field: "supplier_FK",
                allowNull: true
            },
            constraints: true
        });

        ProductsItem.hasMany(Pet_shop, { foreignKey: { name: "products_FK", field: "products_FK", allowNull: true}});
        Pet_shop.belongsTo(ProductsItem, {
            foreignKey:  {
                name: "products_FK",
                field: "products_FK",
                allowNull: true
            },
            constraints: true
        });

        sequelize.sync();
    }
}