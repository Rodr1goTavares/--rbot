"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = () => {
    const client = new discord_js_1.Client({ intents: [1, 512, 32768, 2, 128] });
    const token = process.env.TOKEN;
    client.login(token);
    return client;
};
exports.client = client;
//# sourceMappingURL=Client.js.map