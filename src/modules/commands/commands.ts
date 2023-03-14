import { client } from '../Client';
import { CommandInteraction, IntegrationExpireBehavior, SlashCommandBuilder } from 'discord.js';

export class Commands{
    public static listenChat(): void{
        const showProfileImage = new SlashCommandBuilder()
            .setName('profilepic')
            .setDescription("Sends a user profile pic");
        
        client().application?.commands.create(showProfileImage.toJSON());

        client().on('interactionCreate', async (interaction) => {
            if(!interaction.isCommand() || interaction.commandName !== "profilepic") return;

            const user = interaction.user;
            const picUrl = user.avatarURL();

            if(!picUrl){
                await interaction.reply("Imagem não encontrada");
                return;
            }

            await interaction.reply({ content: 'avatarURL' });
        })
    }
}