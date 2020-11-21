let today = new Date();
let tomorrow = new Date(today);

tomorrow.setDate(tomorrow.getDate() + 1);

// Months array 0 - 11
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

module.exports = (msg, args) => {
  switch (args) {
    case "today":
      return msg.reply(
        `Today is ${today.getDate()} ${
          months[today.getMonth()]
        } ${today.getFullYear()}`
      );
      break;
    case "tomorrow":
      return msg.reply(
        `Tomorrow is ${tomorrow.getDate()} ${
          months[tomorrow.getMonth()]
        } ${tomorrow.getFullYear()}`
      );

      break;
    default: msg.channel.send("Datetime not found");
  }
};
