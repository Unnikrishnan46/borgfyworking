
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/AdminBlog',{
// useNewUrlParser:true,
// useUnifiedTopology:true,
// useCreateindex:true
}).then(() => console.log('Connected!'))
