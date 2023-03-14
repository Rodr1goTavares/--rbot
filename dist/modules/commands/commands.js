"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Commands = void 0;
const Client_1 = require("../Client");
const discord_js_1 = require("discord.js");
class Commands {
    static listenChat() {
        var _a;
        const showProfileImage = new discord_js_1.SlashCommandBuilder()
            .setName('profilepic')
            .setDescription("Sends a user profile pic");
        (_a = (0, Client_1.client)().application) === null || _a === void 0 ? void 0 : _a.commands.create(showProfileImage.toJSON());
        (0, Client_1.client)().on('interactionCreate', (interaction) => __awaiter(this, void 0, void 0, function* () {
            if (!interaction.isCommand() || interaction.commandName !== "profilepic")
                return;
            const user = interaction.user;
            const picUrl = user.avatarURL();
            if (!picUrl) {
                yield interaction.reply("Imagem não encontrada");
                return;
            }
            yield interaction.reply({ content: 'avatarURL' });
        }));
    }
}
exports.Commands = Commands;
//# sourceMappingURL=commands.js.map