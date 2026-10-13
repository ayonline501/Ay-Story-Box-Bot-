/*CMD
  command: userAfterStory
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

Api.sendMessage({
  chat_id: user.telegramid,

  text:
    "✅ <b>আপনার গল্প সফলভাবে এডমিনের কাছে পৌঁছে গেছে</b> 📩\n\n" +
    
    "🧑‍💻 <b>এডমিন খুব শীঘ্রই আপনার গল্প রিভিউ করে আমাদের চ্যানেলে পোস্ট করবে</b> ✨\n\n" +
    
    "📢 <b>আপনার গল্প দেখতে আমাদের চ্যানেলে নজর রাখুন</b> 👀🌸",

  parse_mode: "HTML",

  reply_markup: {
    inline_keyboard: [

      [
        {
          text: "🌐 আমাদের চ্যানেল",
          url: "https://t.me/golpokokha"
        }
      ],

      [
        {
          text: "🏠  অফিসিয়াল চ্যানেল",
          url: "https://t.me/ayofficialbd"
        }
      ]

    ]
  }
});
