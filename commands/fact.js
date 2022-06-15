const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed} = require("discord.js")

const {Base}=require("paras-api-wrapper");
const api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("fact")
    .setDescription("Amazing facts"),
    run: async (client,interaction) => {
        let data = await api.fact();
        
        let embed = new MessageEmbed()
        .setTitle(`${data.fact} `)
       
        interaction.reply({embeds:[embed]})

                    }};



