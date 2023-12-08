import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AdminModel from "../models/AdminModel.js";


export async function getAll(req, res) {
    try{

        let getdata = await AdminModel.findAll();

        if(getdata){
            res.json({
                success: true,
                message:"Data Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}
export async function register(req, res) {
    try{
        let { username, password } = req.body;

        let getdata = await AdminModel.create({
            username,
            password: await bcrypt.hash(password, 15)
        });

        if(getdata){
            res.json({
                success: true,
                message:"Data Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}
export async function signInUser (req, res) {
    try {
        const { username, password } = req.body;
        const user = await AdminModel.findOne({
            where: {username}
        });
      
        // Verify password
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid || !user) {
            return res.status(404).json('Incorrect email and password combination');
        }


        // Authenticate user with jwt
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
   
        res.status(200).send({
            id: user.id,
            email: user.username,
            accessToken: token,
        });
    } catch (err) {
        return res.status(500).send('Sign in error');
    }
}