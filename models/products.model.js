const mongoose=require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        quantity:{
            type:String,
            required:true,
            default:0
        },
        price:{
            type:String,
            required:true,
            default:0
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        timestamps:true
    }
)
const products=mongoose.model("Products",ProductSchema);
module.exports=products;