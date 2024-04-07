const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
     Tags:{
        type:[String],
        require:true
    },
    Text:{
        type:String,
        require:true
    },
    Reactions:{
        type:Number,
        require:true
    }
})

const UserPost = mongoose.model('user',UserSchema)

module.exports = UserPost