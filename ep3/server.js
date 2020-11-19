const express = require("express");
const app = express();
const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment-timezone');

app.use(express.static("public"));

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const prefix = process.env.PREFIX;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
  
  if (msg.content.startsWith(prefix)) {
    
    handleCommand(msg);
    
  }
  
  function handleCommand(msg) {
    
    let cmdFull = msg.content.toLowerCase().substr(5).trim(" "); // Change to lowercase, extract & remove prefix, trim extra spaces
    let cmdSplit = cmdFull.split(" "); // Split the command into an array of substrings
    let cmdPrimary = cmdSplit[0]; // The first word after prefix
    let cmdArgs = cmdSplit.slice(1).join(" "); // Join other words right after primary command with space

    console.log(`Full : ${cmdFull} \nPrimary : ${cmdPrimary} \nArguments : ${cmdArgs}`);
    
    let today = new Date();
    let tomorrow = new Date(today);

    tomorrow.setDate(tomorrow.getDate() + 1);

    // Months array 0 - 11
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    switch (cmdPrimary) {
        
      case 'today':
        
        msg.channel.send(`Today is ${today.getDate()} ${months[today.getMonth]} ${today.getFullYear()}`);
        break;
        
      case 'tomorrow':
        
        msg.channel.send(`Tomorrow is ${tomorrow.getDate()} ${months[tomorrow.getMonth]} ${tomorrow.getFullYear()}`);
        break;
        
      case 'me':
        
        msg.channel.send(`Name: ${msg.author.tag} Avatar: ${msg.author.displayAvatarURL()}`);
        break;
        
      case 'thonking':
        
        const embed = new Discord.MessageEmbed()
        .setImage("https://media.giphy.com/media/CaiVJuZGvR8HK/giphy.gif")

        msg.channel.send(embed);
        break;
        
      case 'timezone':
        
        if (cmdArgs != 0) {

          let country = cmdArgs;
          let zones = moment.tz.zonesForCountry(country);

          console.log(zones);

          // Declare empty array
          let timezone = [];

          if (zones === null) {

            msg.channel.send('Timezone not found.');
            return;

          } else {

            // Loop all zones
            zones.forEach(function(zone) {

              let datetime = moment.tz(zone).format(" dddd MMMM Do YYYY, h:mm:ss a");

              // Push zones data into timezone array
              timezone.push(zone+datetime);

            });

            msg.channel.send(timezone); 
 
          }
        }
        break;
        
      default: msg.channel.send('command not found.');
    }
  }  
});

client.login(process.env.SECRET);
