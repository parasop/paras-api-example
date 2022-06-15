const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed} = require("discord.js")

const {Base}=require("paras-api-wrapper");
const api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("advice")
    .setDescription("Amazing advice"),
    run: async (client,interaction) => {
        let data = await api.advice();

        let embed = new MessageEmbed()
        .setTitle(`${data.advice} `)
       
        interaction.reply({embeds:[embed]})

                    }};



