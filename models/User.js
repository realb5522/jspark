const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // ekzmv 2230@gmail.com 옆의 빈칸을 없애주는 역할을 하는게 trim
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: { //유효성 검사
        type: String,
    },
    tokenExp: { // 사용기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //  mongoose.model('이름', 스키마)

module.exports = {User} //다른곳에서도  쓸 수 있도록 익스포트 해주기