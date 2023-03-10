const express = require('express')
const app = express();
const path = require('path')
const port = 4000;
const multer  = require('multer')
var fileUpload = require('express-fileupload');
const cors = require('cors');
app.use(cors());
app.use(fileUpload());
//Connecting Data Base
require('./DataBase/dbconnect')
const BlogData = require('./Schema/blogSchema')


//Sarve Static File from Node.js
const staticPath = path.join(__dirname,'./public')
app.use(express.static(staticPath))

//Convert Json And Save MongoDB
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/blog', async (req, res) => {
  BlogData.find({}, function (err, data) {
      // console.log(err, data, data.length); 
      res.json(data);
  });

})


var upload = multer({
  storage:multer.diskStorage({
    destination: function(req, file, cb){
      cb(null,"C:\Users\pubgs\OneDrive\Desktop\borgfy-main\FrontEnd\public")
    },
    filename: function(req, file, cb){
  cb(null, file.filename +"-" + ".jpg")
    }
  })
  }).single('filename');
  // app.post('/upload',upload,(req, res)=>{
  //   res.send('uploads files')
  // })

app.post('/saveblog', (req, res) => {
  let image1 = req.files.myFile
    const thing = new BlogData({
      title: req.body.title,
      content: req.body.content,
      time: new Date().toLocaleTimeString(),
      filename:image1.name
    });
    console.log(thing)

    console.log(image1);
    image1.mv('../FrontEnd/uploads/images/' + image1.name + '.jpg',(err,done)=>{
      if(!err){
        console.log("image saved")
      }else{
        console.log(err)
      }})
    thing.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(402).json({
          error: error
        });
      }
    );
  });
  

// app.post('/saveblog', async (req,res)=>{
//     // console.log(req.body.title, req.body.content)
//   const Savedata = new BlogData({
//     title:req.body.title,
//     content:req.body.content,
//   })
//      console.log(Savedata)
//      res.send(Savedata)

// })


 app.listen(port,()=>{
    console.log('start server')
 })