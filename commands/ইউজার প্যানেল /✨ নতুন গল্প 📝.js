/*CMD
  command: ✨ নতুন গল্প 📝
  help: 
  need_reply: false
  auto_retry_time: 
  folder: ইউজার প্যানেল 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (message == "✨ নতুন গল্প 📝") {
  Bot.sendMessage(
    "*👋 আসসালামুয়ালাইকুম প্রিয় ইউজার \n\n🌸 আমাদের কাছে গল্প দেওয়ার জন্য আপনার নাম লিখুন ✍️*"
  );
  Bot.runCommand("setName");
}
