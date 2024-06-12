const mongoose = require("mongoose")
const Schema = mongoose.Schema(
    {
        "id":{type:String,required:true},
        "name":{type:String,required:true},
        "img":{type:String,required:true},
        "price":{type:String,required:true},
        "description":{type:String,required:true},
        "category":{type:String,required:true}
    }
)

let productmodel=mongoose.model("product",Schema);
module.exports={productmodel}