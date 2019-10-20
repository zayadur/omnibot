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
    channels: ["missalicat"]
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
            client.say("missalicat", "/me shakes 9ball furiously. The answer is " + ballReply());
            break;
        case "!ass":
            client.say("missalicat", "drewpB");
            break;
        case "!breathe":
            client.say("missalicat", "inhale drewpB");
            client.say("missalicat", "exhale zaderB");
            break;
        case "!clit":
            client.say("missalicat", "drewpB missalPotatoR");
            client.say("missalicat", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("missalicat", "drewpB missalPotatoR drewpB missalPotatoR drewpB missalPotatoR");
            client.say("missalicat", "drewpB missalPotatoR drewpB missalPotatoR");
            client.say("missalicat", "drewpB missalPotatoR");
            break;
        case "!commands":
            client.say("missalicat", "/me !9ball | !ass | !breathe | !clit | !length | !nut | !selfie | !spam | !trash | !wave | !wins");
            break;
        case "!length":
            client.say("missalicat", "/me You're " + spamNumber() + " inch(es) at full mast! missalDerp");
            break;
        case "!nut":
            client.say("missalicat", "missalEggplant :peanuts:");
            break;
        case "!selfie":
            client.say("missalicat", "drewpB missalPotatoR drewpB");
            break;
        case "!spam":
            client.say("missalicat", "missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant");
            break;
        case "!trash":
            client.say("missalicat", "T");
            client.say("missalicat", "R");
            client.say("missalicat", "A");
            client.say("missalicat", "S");
            client.say("missalicat", "H");
            break;
        case "!wave":
            client.say("missalicat", "missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant missalEggplant");
            client.say("missalicat", "missalEggplant");
            break;
        case "!wins":
            client.say("missalicat", "/me crystal ball says 0 wins");
            break;
    }
})

client.on("resub", function (channel, username, months, message, userstate, methods) {
    client.say("missalicat", "/me SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE");
})
client.on("subscription", function (channel, username, method, message, userstate) {
    client.say("missalicat", "/me SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE missalEggplant SUBHYPE");
});
