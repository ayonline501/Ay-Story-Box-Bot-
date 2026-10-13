/*CMD
  command: Golpo Reset
  help: 
  need_reply: false
  auto_retry_time: 
  folder: এডমিন প্যানেল 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("totalStory", 0, "integer");

Bot.sendMessage(
  "📊 <b>মোট স্টোরি কাউন্টার রিসেট করা হয়েছে</b> ✅",
  {
    parse_mode: "HTML"
  }
);
