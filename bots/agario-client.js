const WebSocket = require('ws');

function createBot(region, partyCode) {
  const ws = new WebSocket(`wss://${region}.agar.io`);

  ws.on('open', () => {
    console.log(`[✅] Bot conectado a ${region} - ${partyCode}`);
    ws.send(Buffer.from([254, 6, 0, 0, 0]));
    ws.send(Buffer.from([255, 114, 105, 99, 104]));
    ws.send(Buffer.concat([
      Buffer.from([80]),
      Buffer.from(partyCode, 'utf8'),
      Buffer.from([0])
    ]));
  });

  ws.on('close', () => {
    console.log(`[❌] Bot desconectado de ${region}`);
  });

  ws.on('error', (err) => {
    console.error(`[⚠️] Error de conexión: ${err.message}`);
  });
}

module.exports = createBot;
