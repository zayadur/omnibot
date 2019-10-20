require('dotenv').config();
var obsws = require('obs-websocket-js');
var tmi = require('tmi.js');

var obs = new obsws();

const prefix = "!scene";

let sceneList = [],
    originalScenes = [];

obs.connect({ address: 'localhost:4444', password: '' })
.then(() => {
    console.log(`OBS connection successful`);
    return obs.getSceneList();
})
.then(data => {
    console.log(`${data.scenes.length} available scenes`);

    data.scenes.forEach(scene => {
        console.log(`- ${scene.name}`);
    });

    originalScenes = data.scenes.map(i => i.name);
    sceneList = data.scenes.map(i => i.name.toLowerCase());
})
.catch(error => {
    console.log(error);
});

tmi.on('chat', (channel, userstate, message, self) => {

    message = message.toLowerCase();
    if(message.indexOf(prefix) === 0) {
        message = message.split(" ");
        if(message.length > 1) {
            message.shift();
            message = message.join(" ");
            if(sceneList.indexOf(message) >= 0 ) {
                const sceneName = originalScenes[sceneList.indexOf(message)];
                obs.setCurrentScene({'scene-name': sceneName});
                console.log(`switching to: ${sceneName} | requested by: ${userstate.username}`);
            }
        }
    }
});
 
// You must add this handler to avoid uncaught exceptions.
obs.on('error', error => {
    console.error('socket error:', error);
});