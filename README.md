# PROGAMP *(A fork of [ZerioDev/Music-bot](https://github.com/ZerioDev/Music-bot))*

This is the source code for PROGAMP, The music bot used in the [Progressbar95 +Plus!](https://discord.com/invite/HWFYmwsFX9) Discord server. This is a fork of [ZerioDev/Music-bot](https://github.com/ZerioDev/Music-bot).

The rest of this file is mostly the same, but has been tweaked to have some more information.

---

A complete code to download for a music bot 🎧

Looking for a code for a music bot? This fully open source code is made for your project!

If you need help with this project, to get support faster you can join the help server by just clicking [here](https://discord.gg/5cGSYV8ZZj).

*If you don't have any development knowledge, it is recommended to join the Discord support server to get help.*

### 📑 Installation

To use the project correctly you will need some tools.

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (v16.6) for environment

Without forgetting of course the code editor ^^

To run the bot, make a clone of this repo

```
git clone https://github.com/Progressbar-Discord-Server/PROGAMP
cd ./PROGAMP
```

Install all dependencies 

```
npm i
```

Run the bot!

```
npm start
```

Don't forget to [configure the configuration](https://github.com/Progressbar-Discord-Server/PROGAMP#-configuration) before you run the bot!

### ⚡ Configuration

Make a copy of `config.template.js` and rename it to `config.js`

```js
module.exports = {
    app: {
        token: '',
        playing: 'PROGRESSBAR 95 (Main Theme) · Andrei Scerbatiuc',
        global: false,
        guild: ''
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
```

Basic configuration

- `app/token`, the token of the bot available on the [Discord Developers](https://discordapp.com/developers/applications) section
- `app/playing`, the activity of the bot
- `app/global`, whether the commands will work on all servers or just one (if global they might take up to an hour to show up)
- `app/guild`, the guild the slash command will be loaded to (this only applys if global is set to false)

DJ mode configuration

- `opt/DJ/enabled`, whether the DJ mode should be activated or not 
- `opt/DJ/roleName`, the name of the DJ role to be used
- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration

- `opt/maxVol`, the maximum volume that users can define
- `opt/leaveOnEnd`,  if the bot will leave on finishing the queue
- `opt/loopMessage`, if the message that a music is played should be sent when it is looped
- `opt/spotifyBridge`, takes spotify songs/playlists and searches it on youtube and plays it (highly recommended)
- `opt/defaultvolume`, is the defaul volume the queue will start at
- `opt/discordPlayer`, options used by discord-player

### 📝 ToDo 

- [ ] lyrics command

-  [ ] Vote to skip command https://github.com/ZerioDev/Music-bot/issues/187

- [ ] history commnad

- [ ] auto autocomplete (play, search, filters, ect)

- [ ] better button option's

- [ ] more config's for discord player 
