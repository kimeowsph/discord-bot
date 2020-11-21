const moment = require("moment-timezone");

module.exports = (msg, args) => {
  let country = args;
  let allCountries = moment.tz.countries();
  let zones = moment.tz.zonesForCountry(country);
  let timezone = [];

  if (zones === null) {
    
    return msg.channel.send("Timezone not found.");
    
  } else {
    
    zones.forEach(function(zone) {
      
      let datetime = moment.tz(zone).format(" dddd MMMM Do YYYY, h:mm:ss a");
      timezone.push(zone + datetime);
      
    });
  }

  return msg.channel.send(timezone);
};
