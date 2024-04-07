const mongoose = require("mongoose")
require('dotenv').config()
const express = require("express");
const UserPost = require("./collection/Posts.js")
const app = express();
const port  = process.env.PORT;
const cors = require('cors')
const bodyParser = require('body-parser')


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/postdata",(req,res)=>{
    const { title, Text, Reactions, Tags } = req.body

    let user1 =UserPost({
        title: title,
        Text:  Text,
        Reactions: Reactions,
        Tags: Tags
      })
    
      user1.save()
})

app.get("/postfind",(req,res)=>{
    UserPost.find() .then(posts => res.json(posts))
    .catch(err => res.json(err))
})



  
  app.post('/deletedata', async (req, res) => {
    const { UserId } = req.body
  
    try {
      await UserPost.deleteOne({ _id: UserId }
      );
      res.send({ status: "ok", data: "delete" })
    } catch (res) {
      console.log(res);
    }
    // res.send()
  })
  

app.listen(port,()=>{
    console.log("your Port Is Successfully run");
})