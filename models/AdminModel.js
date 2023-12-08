import Sequelize from 'sequelize';
import db from '../config/connection.js'


const AdminModel =  db.define("admins",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false, // coloumn can't be empty
        primaryKey:true // id coloumn will act as primary key
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false

    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
})
export default AdminModel