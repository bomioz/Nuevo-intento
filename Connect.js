const AgarClient = require('./agario-client'); // Usarás una versión local del cliente
const bots = [];

function createBot({ region, party, name }) {
  const bot = new AgarClient();

  bot.on('connected', () => {
    console.log(`${name} conectado al servidor.`);
    bot.setNickname(name);
  });

  bot.on('lostMyBalls', () => {
    bot.spawn(name);
  });

  bot.connect(region, party);
  bots.push(bot);
}

module.exports = {
  createBot,
  bots
};
