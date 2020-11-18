const express = require("express");
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();

app.use(express.static("public"));

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const prefix = process.env.PREFIX;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  let today = new Date();
  let tomorrow = new Date(today);
  
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Months array 0 - 11
  let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  
  if (msg.content === `${prefix} today`) {
    
    msg.channel.send(`Today is ${today.getDate()} ${months[today.getMonth]} ${today.getFullYear()}`);
    
  }
  
  if (msg.content === `${prefix} today`) {
    
    msg.channel.send(`Tomorrow is ${tomorrow.getDate()} ${months[tomorrow.getMonth]} ${tomorrow.getFullYear()}`);
    
  }
  
  if (msg.content === `${prefix} me`) {
    
    msg.channel.send(`Name: ${msg.author.tag} Avatar: ${msg.author.displayAvatarURL()}`);
  
  }
  
  if (msg.content === `${prefix} thonking`) {
    
    const embed = new Discord.MessageEmbed()
    .setImage("https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif")
    
    msg.channel.send(embed);
    
  }
  
});

client.login(process.env.SECRET);
