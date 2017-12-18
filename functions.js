var funcs = [];

funcs.permissions = ({ cmd, commands, user }) => {
    return new Promise((resolve, reject) => {
        if (commands[cmd].permission == 0) {
            // Command disabled
            resolve(false);
        } else if (commands[cmd].permission == 1) {
            // Everyone
            resolve(true);
        } else if (commands[cmd].permission == 2) {
            // Mods and Broadcaster only
            if (user.mod || user.badges.broadcaster == '1') { resolve(true); } else { resolve(false); }
        } else if (commands[cmd].permission == 3) {
            // Channel owner only
            if (user.badges.broadcaster == '1') { resolve(true); } else { resolve(false); }
        }
    });
};

module.exports = funcs;