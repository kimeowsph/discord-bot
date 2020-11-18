const moment = require('moment-timezone');
const { MessageEmbed } = require("discord.js");

module.exports = (msg, args) => {
  
    let country = args;
    let allCountries = moment.tz.countries();
    let zones = moment.tz.zonesForCountry(country);
    console.log(zones);

    let timezone = [];

    if (zones === null) {

      const embed = new MessageEmbed()
        .setTitle("Timezone")
        .setDescription("Usage: `beep timezone` { option }")
      msg.channel.send(embed);
      return msg.channel.send("```Option: " + allCountries.join(" ") + "```");

    } else {

      zones.forEach(function(zone) {

        let datetime = moment.tz(zone).format(' dddd, MMMM Do YYYY, h:mm:ss a');
        timezone.push(zone+datetime);

      });

      msg.channel.send(timezone);

    }

  
}