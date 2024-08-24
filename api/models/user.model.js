import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true ,
        
    },
    email :{
        type : String , 
        unique : true,
    },
    password : {
        type :String,
        required : true,
    },
    profilePicture :{
        type : String,
        default : "https://in.images.search.yahoo.com/images/view;_ylt=AwrKAKn5cchm9s4s6Uq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzg1ZTM4YWIyNmI4M2Q1ZGRlNDVkNzk4NTVhZWZkMTFlBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dprofile%26type%3DE211IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=2048&h=2048&imgurl=www.pngmart.com%2Ffiles%2F23%2FProfile-PNG-Photo.png&rurl=https%3A%2F%2Fwww.pngmart.com%2Fimage%2F764538&size=105.8KB&p=profile&oid=85e38ab26b83d5dde45d79855aefd11e&fr2=piv-web&fr=mcafee&tt=Profile+PNG+Photo+-+PNG+Mart&b=0&ni=21&no=12&ts=&tab=organic&sigr=ydZNhOP4W._5&sigb=W5xWTXiTMs9h&sigi=3uBFBopbNIJJ&sigt=N18FISnooGLy&.crumb=q8V4NGeQv4l&fr=mcafee&fr2=piv-web&type=E211IN885G0"
    },
    isAdmin:{
        type : Boolean,
        default : false,
    },
} , {timestamps : true});

const User = mongoose.model('User' , userSchema);

export default User;