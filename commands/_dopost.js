/*CMD
  command: /dopost
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

// Automatic fix
var rowIndex;

let newRow = {
  'Country': User.getProperty("country"),
  'Age': User.getProperty("age"),
  'Do you like Bots.Business?': User.getProperty("liked")
}

let prms = {
  sheetName: "Users",
  row: newRow,
  onSuccess: "onSuccess",
  onError: "onError"
}

var rowIndex = User.getProperty("rowIndex");
if(rowIndex){
  prms.rowIndex = rowIndex;
  Libs.GoogleSpreadSheet.editRow(prms);
  return
}

Libs.GoogleSpreadSheet.addRow(prms)
