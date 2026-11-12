import { ActivityType } from "discord.js";

export default {
	name: 'clientReady',
	async execute(bot) {
		await bot.application.commands.set(bot.arrayOfSlashCommands);

		bot.user.setPresence({
			activities: [{ name: 'Naruto RP', type: ActivityType.Streaming, url: 'https://twitch.tv/4wipyk' }], status: 'online'
		});
	}
};
