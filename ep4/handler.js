module.exports.command = msg => {
  
  let cmdFull = msg.content.toLowerCase().substr(5).trim(" "); // Change to lowercase, extract & remove prefix, trim extra spaces
  let cmdSplit = cmdFull.split(" "); // Split the command into an array of substrings
  let cmdPrimary = cmdSplit[0]; // The first word after prefix
  let cmdArgs = cmdSplit.slice(1).join(" "); // Join other words right after primary command with space

  console.log(`Full : ${cmdFull} \nPrimary : ${cmdPrimary} \nArguments : ${cmdArgs}`);

  try {
    
    let service = require(`./commands/${cmdPrimary}`);
    
    service(msg, cmdArgs);
    
  
  } catch (err) {
         
      return msg.channel.send(":x: Command not found.");
    
  }
};
