import { client } from '../Client';

export class Commands{
    public static listenChat(): void{
        client().on('messageCreate', (message) => {
            if(message.author.bot == true) return;
            
            

        })
    }
}