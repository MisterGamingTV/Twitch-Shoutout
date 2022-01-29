# Twitch-Shoutout

Twitch-Shoutout is a little Bot and Widget for your Twitch-Channel to make Shoutouts great again.

## Installation

### Download the code from GitHub:
```bash
git pull https://github.com/MisterGamingTV/Twitch-Shoutout
```
### Setup Bot-Name
Change `bot.name` in the config to the name of yout Botaccount
### Setup Bot-Token
Login to https://twitchapps.com/tmi/ with your Botaccount and paste the token you got into `bot.token`. 
### Setup channel to listen
Change `stuff.channel` to your channel name so the Bot knows where to join.


## Setup in OBS:
#### Add a new Browser Source in OBS:
![Add new Browser Source](https://us-east-1.tixte.net/uploads/cdn.mistergamingtv.com/Jx0B2bn5la.png)
#### Select "Local file"
![Local file](https://us-east-1.tixte.net/uploads/cdn.mistergamingtv.com/obs64_iQNcHNfh3z.png)
#### Select index.html
![Select index.html](https://us-east-1.tixte.net/uploads/cdn.mistergamingtv.com/obs64_FggJl3g14q.png)
#### Ready!


## Customization
In the `config.json` you can change nearly everything.

### Bot: `bot`
`name` -> Set the name of your Bot-Account
`token` -> Set the Token of your Bot-Account

### Messages: `msgs`
`enabled` -> Enable or disable Chat-Messages

`join` -> Change the message the bot sends if it joins the channel. Available placeholders: CHANNEL

`cmd` -> Change the Shoutout-Message. Available placeholders: USER, USER_LINK, CHANNEL

### Widget: `widget`
`enabled` -> Enable or disable the Overlay

`line1` -> Change the text of Line 1. Available placeholders: USER, CHANNEL, AUTHOR

`line2` -> Change the text of Line 2. Available placeholders: USER, CHANNEL, AUTHOR

`line3` -> Change the text of Line 3. Available placeholders: USER, CHANNEL, AUTHOR

`icon` -> Change the Widget-Icon. Available placeholders: USER_ICON, CHANNEL_ICON

`color` -> Change the Widget-Backgroundcolor (HEX-Codes only)

`font` -> Change the Font of the text

`color` -> Change the Color of the text

### Stuff: `stuff`
`channel` -> Change the channel to listen to

`debug` -> Enable or disable Debug-Messages in the console


## Contributing
If you wanna help me with this project, just make a pull request. If you want to add some bigger features, please open an Issue first.

Please make sure to test everything before making the pull request.

## License
[MIT](https://choosealicense.com/licenses/mit/)