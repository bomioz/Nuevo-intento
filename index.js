require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { connectBots } = require('./bots/connect');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`Bot listo como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '!ping') {
    return message.reply('Pong! ✅');
  }

  if (message.content.startsWith('!bots')) {
    const args = message.content.split(' ');
    const partyCode = args[1];
    const region = args[2];

    if (!partyCode || !region) {
      return message.reply('Uso correcto: `!bots <código_party> <región>`');
    }

    connectBots(partyCode, region, message);
  }
});

client.login(process.env.DISCORD_TOKEN);
