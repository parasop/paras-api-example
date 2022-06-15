const { Client, Intents, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const {Base} = require("paras-api-wrapper")
require("dotenv").config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

//CTK WARRIOR'S HANDLER 
console.log(Base)
client.api = new Base();
console.log(client.api)
client.commands = new Collection(readdirSync("./commands").map(cmd => (cmd = require(`./commands/${cmd}`), [cmd.data.name, cmd])))
for (const event of readdirSync("./events")) client.on(event.split(".")[0], require(`./events/${event}`).bind(null))

client.login(process.env.TOKEN)