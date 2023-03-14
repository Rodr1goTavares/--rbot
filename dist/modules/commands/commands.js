"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const Client_1 = require("../Client");
class Commands {
    static listenChat() {
        (0, Client_1.client)().on('messageCreate', (message) => {
            if (message.author.bot == true)
                return;
        });
    }
}
exports.Commands = Commands;
//# sourceMappingURL=commands.js.map