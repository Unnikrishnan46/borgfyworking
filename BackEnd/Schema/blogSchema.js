const mongoose = require('mongoose');

const SaveBlog = new mongoose.Schema({
    title:{
        type:String,
    },
    content:{
        type:String,
    },
    time:{
        type:String,
    },
    filename:{
        type:String,
    }
})

const SaveBlogData = new mongoose.model('BlogData', SaveBlog);

module.exports = SaveBlogData;