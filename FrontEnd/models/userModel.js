import mongoose from 'mongoose';

const userSchema  = mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
})

const myUserSgema = mongoose.model('blogdata', userSchema);
export default myUserSgema;