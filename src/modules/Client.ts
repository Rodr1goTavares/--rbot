import { Client } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

export const client = () => {
    const client = new Client({intents: [1, 512, 32768, 2, 128]});
    const token = process.env.TOKEN;
    client.login(token);

    return client;
}




