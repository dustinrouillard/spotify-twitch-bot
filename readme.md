## Spotify Twitch Bot
Use twitch chat to control your spotify client

## DO KEEP IN MIND THIS IS OUT OF DATE AND I WILL UPDATE IT SOON, THE WAY THIS CURRENTLY IS SETUP TO WORK IS WITH THE SPOTIFY WEB HELPER AND THAT HAS BEEN DISCONTINUED.

___

## Dependencies
- node.js >= 8
- npm >= 5
- node-spotify-helper = 0.4.7
- colors = 1.1.2
- tmi.js = 1.2.1

___

## How to install
Installing this on Windows is very simple

### Manual Installtion
- Step 1: Download the zip file above.
- Step 2: Extract it to a folder anywhere.
- Step 3: Rename the `config.js.example` file to `config.js` and then change the login twitch login details and channels to listen to.
- Step 4: Open the folder and then Shift + Right click the empty space while nothing is highlighted
- Step 5: Select `Open command window here` or `Open PowerShell window here`
- Step 6: Type `npm i`
- Step 7: Type `npm start`

### Command Prompt
- Step 1: Type `git clone https://github.com/TheTetrabyte/spotify-twitch-bot.git`
- Step 2: Type `cd twitch-spotify-bot`
- Step 3: Rename the `config.js.example` file to `config.js` and then change the login twitch login details and channels to listen to.
- Step 4: Type `npm i`
- Step 5: Type `npm start`

___

## Features
- Pausing and resuming tracks
- Controlling the player volume
- Changing the current playing song (Or playlist by spotify URI)
- Adding songs to the queue to be played (**Coming soon**)

___

## Default Permissions
|    Command    |            Description           | Default Permission |
| ------------- | -------------------------------- | ------------------ |
|    Pause      |      Pause the current song      |     Moderators     |
|    Resume     |     Resume the paused player     |     Moderators     |
|    Playing    |    Get the current song info     |      Everyone      |

___

## This is still under heavy developement.
I'm activly working on this to add new features and mod commands \
If you have any suggestions feel free to make an issue request \
with the suggestion, if you find any bugs please report those as well. 

Created by: TheTetrabyte under the GNU General Public License. \
Please view the license file for more information.
