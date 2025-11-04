const mongoose  = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() =>{console.log("connection sucessful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');

}

 let allChats = [
    {
    from : "shiva",
    to : "vamshi",
    msg :"RCB loss the matach",
    created_at: new Date(),
}, 
{
     from : "rohith",
    to : "srinivas",
    msg :"send me sql sheet",
    created_at: new Date(),
},
{
     from : "vamshi",
    to : "rohith",
    msg :"let's play games",
    created_at: new Date(),
},
{   from : "srinivas",
    to : "shiva",
    msg :"prepare for exams",
    created_at: new Date(),
}
];

Chat.insertMany(allChats);