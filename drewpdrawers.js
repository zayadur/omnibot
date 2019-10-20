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
    channels: ["drewpdrawers"]
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
            client.say("drewpdrawers", "/me shakes 9ball furiously. The answer is " + ballReply());
            break;
        case "!ass":
            client.say("drewpdrawers", "drewpB");
            break;
        case "!breathe":
            client.say("drewpdrawers", "inhale drewpB");
            client.say("drewpdrawers", "exhale zaderB");
            break;
        case "!clip":
            client.say("drewpdrawers", "@DrewPdrawers clip!");
            client.say("drewpdrawers", "@DrewPdrawers clip!");
            client.say("drewpdrawers", "@DrewPdrawers clip!");
            break;
        case "!clit":
            client.say("drewpdrawers", "drewpB missalPotatoR");
            client.say("drewpdrawers", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("drewpdrawers", "drewpB missalPotatoR drewpB missalPotatoR drewpB missalPotatoR");
            client.say("drewpdrawers", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("drewpdrawers", "drewpB missalPotatoR");
            break;
        case "!commands":
            client.say("drewpdrawers", "/me !9ball | | !ass | !breathe | !clit | !length | !nut | !selfie | !spam | !trash | !wave | !wins");
            break;
        case "!length":
            client.say("drewpdrawers", "/me You're " + spamNumber() + " inch(es) at full mast! drewpWow");
            break;
        case "!nut":
            client.say("drewpdrawers", "drewpB drewpR :peanuts:");
            break;
        case "!spam":
            client.say("drewpdrawers", "drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow drewpWow");
            client.say("drewpdrawers", "drewpWow");
            break;
        case "!selfie":
            client.say("drewpdrawers", "drewpB drewpR drewpB");
            break;
        case "!trash":
            client.say("drewpdrawers", "T");
            client.say("drewpdrawers", "R");
            client.say("drewpdrawers", "A");
            client.say("drewpdrawers", "S");
            client.say("drewpdrawers", "H");
            break;
        case "!wave":
            client.say("drewpdrawers", "drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP drewpP");
            client.say("drewpdrawers", "drewpP drewpP");
            client.say("drewpdrawers", "drewpP");
            break;
        case "!wins":
            client.say("drewpdrawers", "/me crystal ball says 0 wins");
            break;
    }
})

client.on("resub", function (channel, username, months, message, userstate, methods) {
    client.say("drewpdrawers", "/me SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE");
})
client.on("subscription", function (channel, username, method, message, userstate) {
    client.say("drewpdrawers", "/me SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE");
});
