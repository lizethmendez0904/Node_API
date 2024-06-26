import express from 'express';
import morgan from 'morgan';
import userRouter from '../routes/user.router.js';
import userStatusRouter from '../routes/userStatus.router.js';
import roleRouter from '../routes/role.router.js';
import pet_shopRouter from '../routes/pet_shop.router.js';
import productsRouter from '../routes/products.router.js';
import supplierRouter from '../routes/supplier.router.js';

const app=express();
app.use(morgan("dev"));
app.use(express.json());

app.use('/api',userRouter);
app.use('/api',userStatusRouter);
app.use('/api',roleRouter);
app.use('/api',pet_shopRouter);
app.use('/api',productsRouter);
app.use('/api',supplierRouter);

app.use((rep,res,nex)=>{
    res.status(404).json({
        Message: 'Endpoint losses'
    });
});

export default app;