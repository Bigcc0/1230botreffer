/*CMD
  command: /sendtwitter
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var msgid = User.getProperty("ok")
var yes3 = Bot.getProperty("twitter", "https://twitter.com/soykingbsc")
var yu =
  "🔘Now Please Follow Our [Twitter](" +
  yes3 +
  ") Page\nAnd Retweet Pinned Post, Then Enter Your\nTwitter Username With '@'. \n\n *Example:@SoyKingBSC*"
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://soyking.finance/static/image/STEP3-01.png", // it is picture!
  caption: yu,
  message_id: msgid,
  parse_mode: "Markdown",
  disable_web_page_preview: "true"
})
Bot.runCommand("/catchtwitter")

