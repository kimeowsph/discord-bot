const express = require("express");
const app = express();
const Discord = require("discord.js");
const client = new Discord.Client();
const handler = require("./handler");

app.use(express.static("public"));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on("message", msg => {
  
  if (msg.content.startsWith(prefix)) {
    
    handler.command(msg);
    
  }
  
});

client.login(process.env.SECRET);
