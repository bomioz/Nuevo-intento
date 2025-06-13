require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('🤖 Bot listo!');
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('🏓 Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
const { createBot } = require('./bots/connect');

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!bots')) {
    const args = message.content.split(' ');
    const region = args[1]; // Ej: west
    const party = args[2];  // Ej: NPEJCN
    const cantidad = parseInt(args[3]) || 1;

    for (let i = 0; i < cantidad; i++) {
      createBot({ region, party, name: `Bot${i + 1}` });
    }

    message.channel.send(`🚀 Conectando ${cantidad} bot(s) a la party ${party} en región ${region}`);
  }
});
