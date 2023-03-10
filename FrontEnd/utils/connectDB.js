const mongoose = require('mongoose');

async function connectDB(){
try {
    // const MONGO_URL = 'mongodb://127.0.0.1:27017/AdminBlog';
    const MONGO_URL = 'mongodb+srv://unnikrishnan:<unnicr7>@cluster0.xnxb2nf.mongodb.net/NFTMarketplace?retryWrites=true&w=majority';
    // await mongoose.connect(MONGO_URL,{
    //     useUnifiedTopology:true,
    //     useNewUrlParser:true
    // });
    await mongoose.connect(MONGO_URL)
    console.log('Connected to mongodb')
} catch (error) {
    console.log(error)
}
}

module.exports = connectDB;