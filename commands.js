var cmds = [];

cmds.pause = {
    name: "pause",
    help: "Pauses the current playing song on spotify.",
    permission: 2,
    func: ({ webHelper, client, params, raw, cmd, msg, user, lc, channel }) => {
        webHelper.isPlaying().then((value) => {
            if (value) {
                webHelper.pause().then(() => {
                    console.log(`${"[Spotify]".red} Player status update: ${"Player paused".blue}`);
                    client.say(channel, `Paused the playing song.`);
                });
            } else {
                client.say(channel, `The player is already paused, you may not pause right now.`);
            }
        }).catch(console.error);
    }
};

cmds.resume = {
    name: "resume",
    help: "Resumes the current playing song on spotify.",
    permission: 2,
    func: ({ webHelper, client, params, raw, cmd, msg, user, lc, channel }) => {
        webHelper.isPlaying().then((value) => {
            if (!value) {
                webHelper.unpause().then(() => {
                    console.log(`${"[Spotify]".red} Player status update: ${"Player resumed".blue}`);
                    client.say(channel, `Resumed the playing song.`);
                });
            } else {
                client.say(channel, `The player is already playing, you may not resume right now.`);
            }
        }).catch(console.error);
    }
};

cmds.playing = {
    name: "playing",
    help: "Shows the current playing song in the chat.",
    permission: 1,
    func: ({ webHelper, client, params, raw, cmd, msg, user, lc, channel }) => {
        webHelper.status().then(status => {
            let song = status.current.track;
            let artist = status.current.artist;

            if (status.playing) {
                client.say(channel, `Currently playing: ${song.name} by ${artist.name} from spotify`);
            } else {
                client.say(channel, `The player is currently paused`);
            }
        }).catch(console.error);
    }
};

module.exports = cmds;