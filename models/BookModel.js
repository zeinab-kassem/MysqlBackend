import Sequelize from 'sequelize';
import db from '../config/connection.js';


const BookModel =  db.define("books",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true 
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false
    },
    description:{
        type:Sequelize.TEXT,
        allowNull:true
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true
    },
    isDeleted:{
        type:Sequelize.BOOLEAN,
        allowNull:true,
        defaultValue: 0
    },
    categoryId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
          as: 'categoryId',
        }
    },


}
);

export default BookModel