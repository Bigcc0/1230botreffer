/*CMD
  command: /read
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var rowIndex = User.getProperty("rowIndex");
if(!rowIndex){ Bot.sendMessage("You need /post data in first") }

Libs.GoogleSpreadSheet.getRow({
  sheetName: "Users",
  rowIndex: rowIndex,
  onSuccess: "onSuccessRead",
  onError: "onError"
})

Libs.GoogleSpreadSheet.setUrl("https://script.google.com/macros/s/AKfycbwJcg6tD5IcD7Y4OjSCg1OADiwfwFIubB8Hg7lBtAKeDIBNnPo/exec");
