module.exports = async (client) => {
    console.log("Client is ready as", client.user.tag)

        const commands = [...client.commands].map(x => x[1].data)

            await client.application.commands.set(commands)
            return console.log("[!] Commands have been set globally")
       
}