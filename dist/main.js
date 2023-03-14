"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("./modules/Client");
const commands_1 = require("./modules/commands/commands");
(0, Client_1.client)().on('ready', () => {
    console.log("(((Rbot is online)))");
    //Funcionalidades
    commands_1.Commands.listenChat();
});
//# sourceMappingURL=main.js.map