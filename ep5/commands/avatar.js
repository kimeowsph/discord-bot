module.exports = (msg, args) => {
  
  return msg.channel.send(`Name: ${msg.author.tag} Avatar: ${msg.author.displayAvatarURL()}`);
  
}