const createBot = require('./agario-client');

function connectBots(region, partyCode, amount = 1) {
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      createBot(region, partyCode);
    }, i * 1000);
  }
}

module.exports = connectBots;
