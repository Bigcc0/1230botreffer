/*CMD
  command: /bharokaro2b
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
    })
var yes2 = Bot.getProperty("grouplink", "https://t.me/SoyKingOfficial_Chat")
var msgid = User.getProperty("ok")
var b5 = [[{ text: "Done", callback_data: "/bharokaro3b" }]]
var yu =
  "\n🔘Please Join [Group💬](" + yes2 + ") View Information About The Project."
Api.sendPhoto({
  chat_id: chat.chatid,
  photo: "https://soyking.finance/static/image/STEP2-01.png", // it is picture!
  caption: yu,
  message_id: msgid,
  parse_mode: "Markdown",
  reply_markup: { inline_keyboard: b5 },
  disable_web_page_preview: "true"
})

