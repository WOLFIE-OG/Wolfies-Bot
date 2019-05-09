/*
 * Discord Bot Builder Bot
 * Version 1.2.0
 * Robert Borghese
 */
const client = new Discord.Client();
const Files = require(require('path').join(__dirname, 'js', 'Main.js')).Files;

if(!process.send) {

Files.initStandalone();

} else {

process.on('message', function(content) {
	Files.initBotTest(content);
});
client.on('ready', () => {
    console.log('I am ready!');
});
client.login(process.env.BOT_TOKEN);
}