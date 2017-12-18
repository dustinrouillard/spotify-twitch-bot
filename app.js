const NodeSpotify = require("node-spotify-helper");
const tmi         = require("tmi.js");
const colors      = require('colors');
const config      = require('./config.js');
const commands    = require('./commands.js');
const functions   = require('./functions.js');
const webHelper   = new NodeSpotify.SpotifyWebHelper();

// Twitch API configuration
const client = new tmi.client({
    options: { debug: false },
    connection: { reconnect: true },
    identity: { username: config.twitch.username, password: config.twitch.oauthtoken }, channels: config.twitch.channels
});

// Script started
console.log(`${"[Script]".grey}  Started, connecting to Spotify and Twitch`);

// Connect to the spotify webhelp process.
webHelper.connect().then(() => {
    console.log(`${"[Spotify]".red} Connected to Spotify Client`);

    // Connect to the twitch api
    client.connect();
});

// Twitch login event
client.on("logon", () => {
    console.log(`${"[Twitch]".blue}  Connected to twitch as ${client.getUsername()}`);
});

// Twitch chat event
client.on("chat", (channel, user, msg, self) => {
    if (config.options.logging.chat) {
        // Chat logging enabled in config
        console.log(`${"[Chat]".magenta} [${colors.yellow(new Date().getHours())}:${colors.yellow(new Date().getMinutes())}] [${colors.blue(channel)}] <${colors.green(user["display-name"])}> : ${msg}`);
    }

    // Ignore self
    if (self) return;

    // Ignore messages that don't start with the prefix
    if (!msg.startsWith(config.twitch.prefix)) return;

    // Command handler
    let lc = msg.toLowerCase();
    let params = msg.split(config.twitch.prefix)[1].split(/[ ]+/);
    let raw = msg.split(" ").splice(1).join(" ");
    let cmd = lc.split(config.twitch.prefix.toLowerCase()).slice(1).join('').split(' ')[0];

    if (commands[cmd]) {
        // Permission checking
        functions.permissions({ cmd, commands, user }).then(value => {
            if (value) {
                if (config.options.logging.commands) {
                    // Command logging enabled in config
                    console.log(`${"[Commands]".green} ${user["display-name"]} triggered command ${commands[cmd].name} total command: ${msg}`);
                }
                
                // Trigger command
                commands[cmd].func({ webHelper, client, params, raw, cmd, msg, user, lc, channel });
            }
        }).catch(console.error);
        
    }
});