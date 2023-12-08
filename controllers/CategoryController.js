import CategoryModel from '../models/index.js';

export async function getAll(req, res) {
    try{
        let getdata = await CategoryModel.CategoryModel.findAll();
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
        }
        catch(err){
            res.status(500).json({
                success: false,
                message:`Something went wrong, ${err.message}`,
                data: null
            })
        }
    }

export async function getById(req, res) {
    try{
        let getdata = await CategoryModel.CategoryModel.findByPk(req.params.id);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
        }
        catch(err){
            res.status(500).json({
                success: false,
                message:`Something went wrong, ${err.message}`,
                data: null
            })
        }
    }

export async function create(req, res) {
    try{
        let getdata = await CategoryModel.CategoryModel.create(req.body);
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
        }
        catch(err){
            res.status(500).json({
                success: false,
                message:`Something went wrong, ${err.message}`,
                data: null
            })
        }
    }

export async function update(req, res) {
    try{
        let getdata = await CategoryModel.CategoryModel.update(req.body, { 
            where:{
                id: req.params.id
            },
            returning: true,
            plain: true
        });


        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
        }
        catch(err){
            res.status(500).json({
                success: false,
                message:`Something went wrong, ${err.message}`,
                data: null
            })
        }
    }