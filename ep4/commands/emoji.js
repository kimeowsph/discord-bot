const { MessageEmbed } = require("discord.js");

// Emoji object
let emoji = {
  thonking: "https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif"
};

module.exports = (msg, args) => {
        
  const emojiEmbed = new MessageEmbed().setImage(emoji[args]);

  msg.channel.send(emojiEmbed);
  
}