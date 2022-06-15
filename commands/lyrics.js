const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

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
        let lyrics = await client.api.lyrics(args);
       
        console.log(lyrics)
        let embed = new MessageEmbed()
        .setTitle(`${lyrics.title} - ${Lyrics.artist}`)
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