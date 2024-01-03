const express = require('express');

const client = require('twilio')('AC1f89ceca5543000ff6c0e4b786d09555', '908131eb148fa6df4aaee78f857fa973');
//Auth

const server = express();

server.use(express.json());

server.get('/hc', (req, resp) => {
    resp.send("Application is running...................");
});

server.post('/message', (req, resp) => {

   if( client.messages.create({
        body: req.body.message,
        to: '+919561868381',
        from: '+1 832 742 4710',
    }).then((e) => { console.warn("Message send Successfully") }).catch(e => {
        console.warn("Get Error to Send Message..........");
    })){
        resp.json({
            "message":"Message Sent Succesfully"
        })
    }
});

server.listen(4200, () => {
    console.log("server is started on 4200")
});


function sendTextMessage() {

}


sendTextMessage();