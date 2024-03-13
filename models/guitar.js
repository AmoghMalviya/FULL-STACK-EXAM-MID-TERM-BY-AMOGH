
const mongoose = require('mongoose')
const {Schema} = mongoose

const guitarSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    color:{
        type:String,
        required:true,
        trim:true
    },
    
    material:{
        type:String,
        required:true,
        trim:true
    },
    brand:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    }
},{timestamps:true})

const Guitar = mongoose.model('Guitar', guitarSchema)
module.exports = Guitar