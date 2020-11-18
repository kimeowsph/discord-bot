const { MessageEmbed } = require("discord.js");

// Emoji object
let emoji = {
  thonking: "https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif"
};

module.exports = (msg, args) => {
  
  console.log(args.length);
  
  if (args.length === 0) {
    
    const embed = new MessageEmbed()
      .setTitle("Emoji")
      .setDescription("Usage: `beep emoji` { option }")
      .addField("Option", "thonking")
    return msg.channel.send(embed);
    
  } else if ( !(args in emoji) ) {
    
    msg.channel.send("Emoji not found");
    
  } else {
    
    const emojiEmbed = new MessageEmbed().setImage(emoji[args]);

    msg.channel.send(emojiEmbed);
  }  
}