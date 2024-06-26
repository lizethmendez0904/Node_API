import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

// Verifica que las variables de entorno se están cargando
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_DIALECT:', process.env.DB_DIALECT);

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);


async function testConnection() {
    try {
        await sequelize
            .authenticate()
            .then(()=>{
                console.log("DATABASE CONNECTED...");
            })
            .catch((err)=> {
                console.log(err);
            });
    } catch(error) {
        console.error('Unable to connect to the database:', error);
    }
}
testConnection();
export default sequelize;