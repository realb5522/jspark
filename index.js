const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jspark:1q2w3e4r5t@boilerplate.k5h6c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
// {
//     useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// } 몽구스 6 버전 부터는 자동으로 지원되므로, 적지 않아도 되고 적으면 오류발생한다.
).then(() => console.log('MongoDb Connected..')).catch(err => console.log(err))



app.get('/', (req, res) => {
    res.send('Hello World! ~~ 안녕하세요~~')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})