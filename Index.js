require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const AgarioBot = require('./agario-client/index.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

let bot = null;

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('!')) return;

  const [cmd, ...args] = message.content.slice(1).split(' ');

  if (cmd === 'start') {
    const partyCode = args[0];
    bot = new AgarioBot(partyCode, "Bot");
    bot.start();
    message.reply(`✅ Bot conectado a la party: ${partyCode}`);
  }

  if (cmd === 'split' && bot) {
    bot.split();
    message.reply('🔪 Split ejecutado.');
  }

  if (cmd === 'feed' && bot) {
    bot.feed();
    message.reply('🍪 Alimentando.');
  }

  if (cmd === 'stop' && bot) {
    bot.stop();
    message.reply('⛔ Bot desconectado.');
  }
});

client.login(process.env.DISCORD_TOKEN);
