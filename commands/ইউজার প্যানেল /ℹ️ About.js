/*CMD
  command: ℹ️ About
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
    "🤖 <b>Story Box Bot</b> এ আপনাকে স্বাগতম ✨\n\n" +

    "📝 <b>আপনার মনের অনুভূতি, গল্প, ক্যাপশন ও স্মৃতিগুলো আমাদের সাথে শেয়ার করুন</b> 💖\n\n" +

    "🌸 <b>নতুন নতুন গল্প লিখুন এবং সবার মাঝে আপনার অনুভূতি ছড়িয়ে দিন</b> ✨\n\n" +

    "📩 <b>আপনার পাঠানো গল্প এডমিন রিভিউ করার পর আমাদের চ্যানেলে পোস্ট করা হবে</b> 🚀\n\n" +

    "📢 <b>নতুন নতুন গল্প দেখতে এবং আমাদের সাথে যুক্ত থাকতে নিচের বাটনে ক্লিক করুন</b> 👇",

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
