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
    channels: ["dunnncan"]
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
            client.say("dunnncan", "/me shakes 9ball furiously. The answer is " + ballReply());
            break;
        case "!ass":
            client.say("dunnncan", "THICC");
            client.say("dunnncan", "THICC THICC");
            client.say("dunnncan", "THICC THICC THICC");
            client.say("dunnncan", "THICC THICC");
            client.say("dunnncan", "THICC");
            break;
        case "!breathe":
            client.say("dunnncan", "inhale drewpB");
            client.say("dunnncan", "exhale zaderB");
            break;
        case "!clit":
            client.say("dunnncan", "drewpB missalPotatoR");
            client.say("dunnncan", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("dunnncan", "drewpB missalPotatoR drewpB missalPotatoR drewpB missalPotatoR");
            client.say("dunnncan", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("dunnncan", "drewpB missalPotatoR");
            break;
        case "!commands":
            client.say("dunnncan", "/me !9ball | | !ass | !breathe | !clit | !length | !nut | !selfie | !spam | !trash | !wave | !wins");
            break;
        case "!dance":
            client.say("dunnncan", "pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER PepeLaugh PepoDance pepeJAMMER");
            break;
        case "!length":
            client.say("dunnncan", "/me You're " + spamNumber() + " inch(es) at full mast! drewpWow");
            break;
        case "!nut":
            client.say("dunnncan", "drewpB drewpR :peanuts:");
            break;
        case "!spam":
            client.say("dunnncan", "drewpWow");
            client.say("dunnncan", "drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow drewpWow");
            client.say("dunnncan", "drewpWow drewpWow");
            client.say("dunnncan", "drewpWow");
            break;
        case "!selfie":
            client.say("dunnncan", "drewpB drewpR drewpB");
            break;
        case "!trash":
            client.say("dunnncan", "T");
            client.say("dunnncan", "R");
            client.say("dunnncan", "A");
            client.say("dunnncan", "S");
            client.say("dunnncan", "H");
            break;
        case "!wave":
            client.say("dunnncan", "drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP drewpP");
            client.say("dunnncan", "drewpP drewpP");
            client.say("dunnncan", "drewpP");
            break;
        case "!wins":
            client.say("dunnncan", "/me crystal ball says 0 wins");
            break;
    }
})

client.on("resub", function (channel, username, months, message, userstate, methods) {
    client.say("dunnncan", "/me SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE");
})
client.on("subscription", function (channel, username, method, message, userstate) {
    client.say("dunnncan", "/me SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE drewpP SUBHYPE");
});
