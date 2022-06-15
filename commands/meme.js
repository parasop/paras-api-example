const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed} = require("discord.js")

const {Base}=require("paras-api-wrapper");
const api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Amazing memes"),
    run: async (client,interaction) => {
        let meme = await api.meme();
        
        let embed = new MessageEmbed()
        .setTitle(`${meme.title} `)
        .setImage(meme.url) 

        interaction.reply({embeds:[embed]})

                    }};



