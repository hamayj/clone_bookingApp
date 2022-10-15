import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
dotenv.config();
// dotenv 셋팅.
// const mongoose = require('mongoose'); 이런 형식으로 써왔던 것 같은데 쓰니까 에러가 뜬다. 왜 그런거지. 이따 찾아보자.

// initial connection
// const connect = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO); // 우리가 암호화한 키를 연결해준 것.
//         console.log("connected to mongoDB.");
//       } catch (error) {
//         throw error; // throw? 원래 정의돼 있는 함수야?
//       } // 이 함수에서 막히는 줄 알고, 설마 오타..? 하면서 정화꺼 붙여넣어봤는데 똑같이 안먹음 ㅠㅠ
// }

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected.")
}) // mongoDB에 연결되지 못한 경우

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected.")
}) // mongoDB에 연결된 경우


app.listen(8000, () => {
    connect() // 서버 연결될 때 몽구스도 함께 연결시켜주자.
    console.log("connected to server.")
});