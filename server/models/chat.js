const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const ChatSchema = new Schema(
    {
        name: { type: String, default: "Blah"},
        message: String,
        room: { type: String, default: "Main Room"},
        timestamp: { type: Date, default: Date.now}
    },
    {collection: "chats"}
);

// export the new Schema so we could modify it using Node.js
var Chat = module.exports = mongoose.model("Chat", ChatSchema);

// get all chat
module.exports.getChat = function(callback, limit){
    Chat.find(callback).limit(limit);
};

// get chat by roomname
module.exports.getChatByRoom = function(room, callback){
    Chat.find({ room : room }, callback);
};