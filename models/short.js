const mongoose=require("mongoose")
const shortId=require("shortid")

const shortUrlSchema=new mongoose.Schema({

    full:{
        type:String,
        required:true
    },
    short:{
        type:String,
        require:true,
        default:shortId.generate
    }
})
module.exports=mongoose.model('shortUrl',shortUrlSchema)