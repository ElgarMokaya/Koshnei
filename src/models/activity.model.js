
const mongoose=require("mongoose")
const activitySchema=new  mongoose.Schema({
day:{
    type:String,
    required:true,
},
time:{
    type:String,
   default:""

},
venue:{
    type:String,
    required:true,
},
activity:{
    type:String,
    required:true,
},
profilepicture:{
    type:String,
    default:""
}

},
{timestamps:true}
);
module.exports=mongoose.model('Activity',activitySchema)