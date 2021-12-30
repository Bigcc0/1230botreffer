/*CMD
  command: /like
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Do you like Bots.Business?
  keyboard: Yes, No
  aliases: 
CMD*/

User.setProperty("liked", message, "string");

Bot.runCommand("/dopost");
