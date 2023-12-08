import Sequelize from 'sequelize';
import db from '../config/connection.js';


const CategoryModel =  db.define("categories",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true 
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
          }
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:true
    },
})
export default CategoryModel