import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js" // auth에서 router처리 해준 것 import
// import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
// import roomsRoute from "./routes/rooms.js"


const app = express();
dotenv.config();
// dotenv 셋팅.
// const mongoose = require('mongoose'); 이런 형식으로 써왔던 것 같은데 쓰니까 에러가 뜬다. 왜 그런거지. 이따 찾아보자.

// initial connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO); // 우리가 암호화한 키를 연결해준 것.
        //console.log("connected to mongoDB."); // 이거 굳이 설정안해도 하단부 코드에서 콘솔 띄워주네요.
      } catch (error) {
        throw error; // throw? 원래 정의돼 있는 함수야?
      } // 여기까지 에러 없음.
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected.")
}) // mongoDB에 연결되지 못한 경우

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected.")
}) // mongoDB에 연결된 경우

// middlewares

app.use(express.json()); // json 사용을 위함.
app.use("/api/auth", authRoute); // /api/auth 라는 endpoint에서 authRoute를 사용한다.
app.use("/api/users", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", authRoute);






app.listen(8000, () => {
    connect(); // 서버 연결될 때 몽구스도 함께 연결시켜주자.
    console.log("connected to server.");
});