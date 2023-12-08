import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import sequilize from './config/connection.js';
import dotenv from 'dotenv';

import CatgeoryRoute from './routes/CategoryRoute.js';
import AuthorRoute from './routes/AuthorRoute.js';
import BookRoute from './routes/BookRoute.js';
import AdminRoute from "./routes/AdminRoute.js";

import {verifyToken} from './middleware/auth.js';


dotenv.config();

const app = express();
app.use(cors());

const server =  http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
});

const port = process.env.PORT || 5000;

// sequilize.sync()   


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{ res.send("hello world")} )
app.use('/admins',verifyToken, AdminRoute)
app.use('/categories',CatgeoryRoute)
app.use('/authors', AuthorRoute)
app.use('/books', BookRoute)


server.listen(port,()=>{
   console.log(`SERVER IS RUNNING ON PORT ${port}`);
})





// server.listen(5000, () => {
//   console.log("SERVER IS RUNNING");
// });