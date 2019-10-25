require('dotenv').config();
var tmi = require('tmi.js');

var settings = {
    options: {
        debug: true
    },
    connection: {
        reconnect: true
    },
    identity: {
        username: process.env.USERNAME,
        password: process.env.TMI_TOKEN
    },
    channels: ["ravenscall"]
};

var client = new tmi.client(settings);
client.connect();

function spamRepellent() {
    var text = "";
    var possible = "!@#$%^&*()-+";
  
    for (var i = 0; i <  1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
}

function spamNumber() {
    var length = Math.floor(Math.random() * 12) + 1;
    return length;
}

client.on('chat', (channel, userstate, message, self) => {
    switch(message) {
        case "!9ball":
            function ballReply() {
                let replies = ["YES", "NO", "IDK", "MAYBE SO", "TRY AGAIN", "WHAT?", "drewpDab", "42", "LEAVE A MESSAGE AFTER THE BEEP. *BEEP*"];
                var reply = Math.floor(Math.random() * replies.length);
                return replies[reply];
            }
            client.say("ravenscall", "/me shakes 9ball furiously. The answer is " + ballReply());
            break;
        case "!ass":
            client.say("ravenscall", "drewpB");
            break;
        case "!breathe":
            client.say("ravenscall", "inhale drewpB");
            client.say("ravenscall", "exhale zaderB");
            break;
        case "!clit":
            client.say("ravenscall", "drewpB missalPotatoR");
            client.say("ravenscall", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("ravenscall", "drewpB missalPotatoR drewpB missalPotatoR drewpB missalPotatoR");
            client.say("ravenscall", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("ravenscall", "drewpB missalPotatoR");
            break;
        case "!commands":
            client.say("ravenscall", "/me !9ball | | !ass | !breathe | !clit | !length | !nut | !selfie | !spam | !trash | !wave | !wins");
            break;
        case "!length":
            client.say("ravenscall", "/me You're " + spamNumber() + " inch(es) at full mast! ravens10Sexy");
            break;
        case "!nut":
            client.say("ravenscall", "drewpB drewpR :peanuts:");
            break;
        case "!spam":
            client.say("ravenscall", "ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy");
            break;
        case "!selfie":
            client.say("ravenscall", "drewpB drewpR drewpB");
            break;
        case "!trash":
            client.say("ravenscall", "T");
            client.say("ravenscall", "R");
            client.say("ravenscall", "A");
            client.say("ravenscall", "S");
            client.say("ravenscall", "H");
            break;
        case "!wave":
            client.say("ravenscall", "ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy ravens10Sexy");
            client.say("ravenscall", "ravens10Sexy");
            break;
        case "!wins":
            client.say("ravenscall", "/me crystal ball says 0 wins");
            break;
    }
})

client.on("resub", function (channel, username, months, message, userstate, methods) {
    client.say("ravenscall", "/me SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE");
})
client.on("subscription", function (channel, username, method, message, userstate) {
    client.say("ravenscall", "/me SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE ravens10Sexy SUBHYPE");
});
