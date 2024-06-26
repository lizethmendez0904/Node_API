import bcryptjs from 'bcryptjs';
import { faker } from '@faker-js/faker';
import jwt from 'jsonwebtoken';
import userModel from '../models/user.model.js';


export const createUser= async (req,res)=>{
    try{
        await userModel.sync();
        const salt= await bcryptjs.genSalt(10);
        const dataUser= req.body;
        const passwordHash=await bcryptjs.hash(dataUser.user_password,salt);
        const createUser= await userModel.create({
            user_user:dataUser.user_user,
            user_password:passwordHash,
            userStatus_FK:dataUser.userStatus_FK,
            role_FK:dataUser.role_FK,
        });
        res.status(201).json({
            ok:true,
            status:201,
            message:'Create User :)',
            id:createUser.user_id,
        });
    }
    catch(error){
        return res.status(500).json({
            message:`Something went wrong in the request ${error}`,
            status:500,
        });
    }
}

export const showUser= async(req,res)=>{
    try{
        const users= await userModel.findAll();
        res.status(200).json({
            ok:true,
            status:200,
            message:'Show Users :)',
            body:users,
        });
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrung in the requst',
            status:500,
        });
    }
}

export const showUserId= async(req,res)=>{
    try{
        const idUser=req.params.id;
        const user= await userModel.findOne({
            where:{
                user_id:idUser,
            }
        });
        res.status(200).json({
            ok:true,
            status:200,
            message:'Show User ID',
            body:user,
        });
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrong in the request',
            status:500,
        });
    }
}

export const updateUser= async (req,res)=>{
    try{
        await userModel.sync();
        const salt= await bcryptjs.genSalt(10);
        const idUser=req.params.id;
        const dataUser=req.body;
        const passwordHash=await bcryptjs.hash(dataUser.user_password,salt);
        const updateUser= await userModel.update({
            user_user:dataUser.user_user,
            user_password:passwordHash,
            userStatus_FK:dataUser.status,
            role_FK:dataUser.role,
        },{
            where:{
                user_id:idUser,
            }
        });
        res.status(200).json({
            ok:true,
            status:200,
            message:'Update User :)',
            body:updateUser,
        });
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrong in the request',
            status:500,
        });
    }
}

export const deleteUser= async(req,res)=>{
    try{
        await userModel.sync();
        const idUser=req.params.id;
        const deleteUser= await userModel.destroy({
            where:{
                user_id:idUser,
            }
        });
        res.status(200).json({
            ok:true,
            status:204,
            message:'Delete User:)',
            body:deleteUser,
        });
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrong in the request',
            status:500,
        });
    }
}

export const createUserFK= async(req,res)=>{
    try{
        await userModel.sync();
        const createUser= await userModel.create({
        user_user: faker.internet.email(),
        user_password: faker.internet.password(),
        userStatus_FK: 1,
        role_FK: 1,
        });
        res.status(201).json({
            ok:true,
            status:201,
            message:'Crate User:)',
            id: createUser.user_id
        });
    }
    catch(error){
        return res.status(500).json({
            message:'Something went wrong in the request',
            status:500,
        });
    }
}

export const loginUser = async (req,res)=>{
    try{
        await userModel.sync();
        const {email,password}= req.body;
        
        if(!email || !password){
            return res.status(400).json({error:"Missing required fields: email, password"});
        }
        const user= await userModel.findOne({
            where: {
                user_user: email,
            }
        });
        if(!user){
            return res.status(400).json({error: "User not found"});
        }
        
        const isMatch= await bcryptjs.compare(password,user.user_password);
        if (!isMatch){
            return res.status(400).json({error: "Invalid credentials"});
        }
        const token = jwt.sign({email: user.user_user}, process.env.JWK_SECRET, {expiresIn: "1h"});
        
        res.status(200).json({
            ok:true,
            status:200,
            message:'Login API :)',
            id: user.user_id,
            token:token
        });
    }
    catch (error){
        return res.status(500).json({
            message: `Somethin went wrong in the request ${error}`,
            status: 500,
        })
    }
}

