import AuthorModel from '../models/index.js';
import BookModel from '../models/index.js';



export async function getAll(req, res) {
    try{
    let getdata = await AuthorModel.AuthorModel.findAll({ include: ['books'] });
    if(getdata){
            res.json({
                success: true,
                message:"Data Fetch Successfully",
                data:getdata
            });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function getById(req, res) {
    try{
        let {id} = req.params;

        let getdata = await AuthorModel.AuthorModel.findByPk(id,{include:['books']});
        if(getdata){
                res.json({
                    success: true,
                    message:"Data Fetch Successfully",
                    data:getdata
                });
            }
    }catch(err){
        console.log(err);
        res.status(500).json({
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}

export async function create(req, res) {
    try{
        let data = await AuthorModel.AuthorModel.create(req.body);
        let {bookId} = req.body;
        if(bookId){
            let getBook = await BookModel.BookModel.findByPk(bookId);
            data.addBook(getBook);
        }

        if(data){
                res.status(201).json({
                    status: 201,
                    success: true,
                    message:"Data Fetch Successfully",
                    data:data
                });
            }
    }catch(err){
        res.status(500).json({
            status:500,
            success: false,
            message:`Something went wrong, ${err.message}`,
            data: null
        })
    }
}
