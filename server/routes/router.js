var express = require('express');
var router = express.Router();
// Database Models
var Chat = require('../models/chat');
var Event = require('../models/event');

// get all chat history
router.get('/api/history', (req, res) => {
    Chat.getChat(function (err, chats){
        if(err){
            throw err;
        }
        res.json(chats);
    });
});

// get chat history by room
router.post('/api/roomhistory', (req, res) => {
    var roomname = req.query.roomname;
    Chat.getChatByRoom(roomname, (err, chats) => {
        if(err){
            throw err;
        }
        res.json(chats);
    });
})

// get all eventlogs
router.get('/api/eventlog', (req, res) => {
    Event.getEvent(function (err, events){
        if(err){
            throw err;
        }
        res.json(events);
    })
})

module.exports = router;
