import mongoose from 'mongoose';
// const { Schema } = mongoose; 밑에서 . 형태로 사용했기에 지웠음.
// 스키마 모델은 공식 문서에서 가져왔음.

const HotelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    rooms: {
        type: [String],
    },
    cheapestPrice: {
        type: Number,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false 
        // 추천 호텔 기능에서 사용할 것이므로 default가 false인 것.
    },
});

export default mongoose.model("Hotel", HotelSchema);
// 모델 이름과 호텔 스키마 설정.

