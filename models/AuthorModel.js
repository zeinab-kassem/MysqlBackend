import Sequelize from 'sequelize';
import db from '../config/connection.js'


const AuthorModel =  db.define("authors",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false, // coloumn can't be empty
        primaryKey:true // id coloumn will act as primary key
    },
    first_name:{
        type:Sequelize.STRING,
        allowNull:false

    },
    last_name:{
        type:Sequelize.STRING(255),
        allowNull:false
    },
    score:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
})
export default AuthorModel