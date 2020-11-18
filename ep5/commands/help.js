const { MessageEmbed } = require("discord.js");
const fs = require("fs");

// Get all files name in commands foler
const commandFiles = fs.readdirSync("./commands");

module.exports = (msg) => {
    
  let commandList = [];
  
  // Loop through every file name and remove '.js' extension
  for (let i = 0; i < commandFiles.length; i++) {
    
    let files = commandFiles[i].substr(0, commandFiles[i].lastIndexOf("."));
    
    // Push every file name into commandList array
    commandList.push(files);
    
  }
  
  const embed = new MessageEmbed()
    .setTitle("Help")
    .setDescription("Usage: `beep` { command }")
    .addField("Command", commandList.join(" | "));
  return msg.channel.send(embed);
  
  
}