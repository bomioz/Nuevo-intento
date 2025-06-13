const AgarClient = require('./lib');
const { PartyBot } = require('./lib');

async function connectBots(partyCode, region, message, burst = false) {
  const totalBots = 28;
  let botsConnected = 0;

  for (let i = 0; i < totalBots; i++) {
    const bot = new PartyBot({
      party: partyCode,
      region: region,
      name: `Bot${i}`,
    });

    bot.on('connected', () => {
      botsConnected++;
      if (burst) {
        bot.split();
        bot.feed();
        bot.followLeader();
      }
    });

    bot.on('error', (err) => {
      console.error(`Bot${i} Error:`, err.message);
    });

    bot.connect();
    await new Promise(res => setTimeout(res, 500)); // conexión escalonada
  }

  message.channel.send(`✅ Se están conectando ${totalBots} bots a la party \`${partyCode}\` en \`${region}\` ${burst ? '(modo burst)' : ''}`);
}

module.exports = { connectBots };
