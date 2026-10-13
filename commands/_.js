/*CMD
  command: *
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// ===== RANDOM EMOJI LIST =====
var myEmoji = [
  "👍", "❤", "🔥", "🥰", "👏", "😁", "🤔", "🎉", "🤩",
  "🙏", "👌", "😍", "💯", "🤣", "⚡", "🏆", "💘", "😘"
];

// ===== RANDOM SELECT =====
var doEmoji = myEmoji[Math.floor(Math.random() * myEmoji.length)];

// ===== CHANNEL POST CHECK =====
if (request.channel_post) {

  HTTP.post({
    url: "https://api.telegram.org/bot" + bot.token + "/setMessageReaction",

    body: {
      chat_id: request.channel_post.chat.id,

      message_id: request.channel_post.message_id,

      reaction: JSON.stringify([
        {
          type: "emoji",
          emoji: doEmoji
        }
      ]),

      is_big: true
    }
  });

}
