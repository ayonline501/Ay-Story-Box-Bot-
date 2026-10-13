/*CMD
  command: Clone
  help: 
  need_reply: true
  auto_retry_time: 
  folder: এডমিন প্যানেল 
  answer: *Send Your Bot Business Email*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

BBAdmin.installBot({
  email: message,
  bot_id: bot.id,
as_protected: true
})
Bot.sendMessage("done, enjoy!")
