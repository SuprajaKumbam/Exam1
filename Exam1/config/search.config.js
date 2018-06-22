var mongoose =require('mongoose');

module.exports =mongoose.connect('mongodb+srv://Admin:suppu1196@cluster0-gitgg.mongodb.net/Exam1?retryWrites=true')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);