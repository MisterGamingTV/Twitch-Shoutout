import config from './config.json';

let options = {
	options: {
		debug: false
	},
	connection: {
		secure: true,
		reconnect: true
	},
	identity: {
		username: config.bot.name,
		password: config.bot.token
	},
	channels: ["#"+config.stuff.channel]
};


client.on('connected', (address, port) => {
	console.log(`[CONNECTED] Connected to channel ${config.stuff.channel} on ${address}:${port}`);

});

client.login()