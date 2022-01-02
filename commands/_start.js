/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

function doTouchOwnLink(){
  Bot.sendMessage("You click on yours own link!");
}

function doAttracted(refUser){
  User.setProperty("fromre",refUser.username, "string");
  Bot.sendMessage(
    "Hello" + 
    "\n\n" +
    "You attracted by user: " + Libs.commonLib.getLinkFor(refUser));
  
  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "You just attract new user: " + Libs.commonLib.getLinkFor(user)
  );
}

function doAlreadyAttracted(){
  Bot.sendMessage("✅You was already attracted");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.track(trackOptions);
Bot.runCommand("/start02")
