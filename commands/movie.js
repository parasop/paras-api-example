const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed, } = require("discord.js")
const {Base}=require("paras-api-wrapper");
const api = new Base()

module.exports = {
    data: new SlashCommandBuilder()
    .setName("movie")
    .setDescription("Find info for specific movie")
    .addStringOption(
        option => option
        .setName("movie")
        .setDescription("movie name")
        .setRequired(true)
    ),
    run: async (client,interaction) => {
        const args = interaction.options.getString("movie");
        let movie = await api.movie(args);
       
        let embed = new MessageEmbed()
        .setTitle(`${movie.name}`)
        .setColor("RANDOM")
        .setDescription(`
**Producer**
${movie.producer}

**Tag**
${movie.tag.join(",")}

**Runtime**
${movie.runtime}

**Languages**
${movie.languages.join(",")}

**Ratings**
${movie.ratings}

        `)  
        
        
        interaction.reply({embeds:[embed]})
               






           }
}