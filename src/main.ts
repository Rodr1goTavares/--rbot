import { client } from "./modules/Client";
import { Commands } from "./modules/commands/commands";


client().on('ready', () => {
    console.log("(((Rbot is online)))");

    //Funcionalidades
    Commands.listenChat();
})