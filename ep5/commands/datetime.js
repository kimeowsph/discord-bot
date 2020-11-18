const { MessageEmbed } = require("discord.js");

let today = new Date()
let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

// Months array 0 - 11
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

module.exports = (msg, args) => {
  
  switch(args) {
      
    case "today": msg.channel.send(`Today is ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`);
      break;
    case "tomorrow" : msg.channel.send(`Tomorrow is ${tomorrow.getDate()} ${months[tomorrow.getMonth()]} ${tomorrow.getFullYear()}`);
      break;
    default:
      const embed = new MessageEmbed()
        .setTitle("Datetime")
        .setDescription("Usage: `beep datetime` { option }")
        .addField("Option", "today | tomorrow");
      return msg.channel.send(embed);
      
  }
  
}