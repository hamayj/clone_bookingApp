import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
// 동기화하는데 시간이 걸리므로 async를 사용.
router.post("/", async (req, res) => {
    const newHotel = new Hotel(req.body)
    console.log(newHotel);
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
        console.log(savedHotel);
    } catch(err){
        res.status(500).json(err) // 500은 서버 오류
        console.log(savedHotel);
    }
})
//update

//delete

//get
//getAll


export default router