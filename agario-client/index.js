// Simulación básica de agario-client
class AgarioClient {
  constructor() {
    console.log('AgarioClient cargado');
  }

  connect(serverURL, partyCode) {
    console.log(`🔗 Conectando a Agar.io en: ${serverURL} con código de party: ${partyCode}`);
    // Aquí va el código de conexión real
  }

  followPlayer(id) {
    console.log(`➡️ Siguiendo al jugador con ID: ${id}`);
  }

  split() {
    console.log("💥 Split ejecutado");
  }

  feed() {
    console.log("🍕 Feeding...");
  }
}

module.exports = AgarioClient;
