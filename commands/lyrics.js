const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed,Util } = require("discord.js")
const {Base}=require("paras-api-wrapper");
const api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lyrics")
    .setDescription("Find lyrics for specific song")
    .addStringOption(
        option => option
        .setName("song")
        .setDescription("song name")
        .setRequired(true)
    ),
    run: async (client,interaction) => {
        const args = interaction.options.getString("song");
        console.log(client.api)
        let lyrics = await api.lyrics(args);
       
        let embed = new MessageEmbed()
        .setTitle(`${lyrics.title} - ${lyrics.artist}`)
            const Embed= Util.splitMessage(lyrics.lyrics,{
                        maxLength:2048,
                        char:"\n",
                        prepend:"",
                        append:""
                    })
                    interaction.reply({content:"_ _"})
                    Embed.forEach(x => {
                        embed.setDescription(x);
                        interaction.channel.send({embeds:[embed]})
                    });







           }
}