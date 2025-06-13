require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { connectBots } = require('./bots/connect');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('ready', () => {
  console.log(`✅ Bot listo como ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith('!')) return;

  const args = message.content.slice(1).trim().split(/ +/);
  const [command, partyCode, region, mode] = args;

  if (command === 'ping') {
    message.reply('🏓 ¡Pong!');
  }

  if (command === 'bots') {
    if (!partyCode || !region) {
      return message.reply('❌ Uso correcto: `!bots <código_party> <región> [burst]`');
    }

    const burst = (mode === 'burst');
    message.reply(`🔄 Conectando bots a la party ${partyCode} en ${region}...`);
    connectBots(partyCode, region, message, burst);
  }
});

client.login(process.env.TOKEN);
