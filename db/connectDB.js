const mongoose = require('mongoose');
const local_url = 'mongodb://127.0.0.1:27017/api'
const live_url = 'mongodb+srv://akashkushwah:akash123@cluster0.r8elrqi.mongodb.net/api?retryWrites=true&w=majority&appName=Cluster0'

const connectDB = async () => {
    return mongoose.connect(live_url)
        .then(() => {
            console.log('Connected to the database');
        }).catch((error) => {
            console.log(error)
        })

}
module.exports = connectDB;