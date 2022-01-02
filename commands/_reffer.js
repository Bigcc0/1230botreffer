/*CMD
  command: /reffer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


//Bot.runCommand("/dopost")
let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{
var address = User.getProperty("ad")
var twitter = User.getProperty("tw")
//var balance = Libs.ResourcesLib.userRes("balance");
//let res = Libs.ResourcesLib.userRes("referral");
//let reflink=Libs.ReferralLib.currentUser.getRefLink("SoyKingAirdrop_bot","");
let link=Libs.ReferralLib.getLink("buildtest123002bot","");
// let lib = Libs.ReferralLib
//var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User : @"+user.username+"\n Address:"+ address +" \n Twitter:"+ twitter +"\n🔗 Referral Link ⬇️\n"+link+"*");
Api.sendMessage({ 
chat_id: "@testdadadq", 
text: "#simpan User : @"+user.username+" |Address:"+ address +" |Twitter:"+ twitter +""})
}


//Bot.sendMessage(link);
// 💰 Balance

// var balance = Libs.ResourcesLib.userRes("balance")
// var lib = Libs.ReferralLib
// var refList = lib.currentUser.refList.get();
// Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed()+" ₹\n\n⚜️Refer And Earn More*")
