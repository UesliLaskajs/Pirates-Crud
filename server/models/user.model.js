const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a Name"]
    },
    image:{
        type: String ,
        required : [ true ,"please provide an Email"]
    },
    treasure_chests:{
        type:Number,
        required:[true,'Treasury Chests number is Required']

    },
    phrase:{
        type:String,
        required:[true,'Please add a Phrase']
    },
    positions:{
        type:String,
        required:[true,'Please select a role'],
        enum: ['captain','first mate', 'quarter master','boatswain','powder monkey']
    },
    leg:{
        type:Boolean,
    },
    eye:{
        type:Boolean
    },
    hand:{
        type:Boolean
    }
},{timestamps:true});

module.exports=mongoose.model('Exam',UserSchema)