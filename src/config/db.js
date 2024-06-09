// const MONGODB_URL = "mongodb+srv://hngo34048:Qzr2T8dBykxn4Jd9@cluster0.sns7qkz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// const MONGODB_URL = "mongodb://localhost:27017/websachtruyen"
const MONGODB_URL = "mongodb+srv://hoanguyenn896:nsLfdmcpL1FZz1BL@cluster0.xfv3xfw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongoose = require("mongoose")
const connectDb = ()=>{
    return mongoose.connect(MONGODB_URL);

}
module.exports = {connectDb};