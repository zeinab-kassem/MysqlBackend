import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


dotenv.config();

const sequilize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_TYPE
    }
);

sequilize
  .authenticate()
  .then(() => {
    console.log("DATABASE CONNECTED");
  })
  .catch((err) => {
    console.log("err ",err);
  });

export default sequilize;

