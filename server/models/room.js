const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const RoomSchema = new Schema(
    {
        roomName: String,
        timestamp: { type: Date, default: Date.now},
        status: {default:"Active", type: String} // or inactive
    },
    {collection: "rooms"}
);

// export the new Schema so we could modify it using Node.js
var Room = module.exports = mongoose.model("Chat", RoomSchema);

module.exports.getRoom = function(callback, limit){
    Room.find(callback).limit(limit);
};