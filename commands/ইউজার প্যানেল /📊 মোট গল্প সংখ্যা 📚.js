/*CMD
  command: 📊 মোট গল্প সংখ্যা 📚
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

var total = Bot.getProperty("totalStory") || 0;

Bot.sendMessage(
  "📊 <b>স্টোরি স্ট্যাটাস</b>\n\n" +
  "🌍 মোট গল্প এসেছে: " + total + "\n\n" +
  "✨ আমাদের স্টোরি সিস্টেম চলছে সক্রিয়ভাবে",
  { parse_mode: "HTML" }
);
