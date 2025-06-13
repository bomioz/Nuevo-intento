const EventEmitter = require('events');

class AgarClient extends EventEmitter {
    constructor() {
        super();
        this.connected = false;
        this.nick = '';
    }

    connect(region, partyCode) {
        this.connected = true;
        setTimeout(() => {
            this.emit('connected');
        }, 1000);
    }

    spawn(nick) {
        this.nick = nick;
        this.emit('spawned', nick);
    }

    split() {
        this.emit('split');
    }

    eject() {
        this.emit('eject');
    }

    disconnect() {
        this.connected = false;
        this.emit('disconnected');
    }
}

module.exports = AgarClient;
