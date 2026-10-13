/*CMD
  command: setStory
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

var admin = 8718182111;

var name = User.getProperty("name") || "Unknown";

// ===== COUNTER =====
var storyCount = User.getProperty("storyCount") || 0;
storyCount = storyCount + 1;
User.setProperty("storyCount", storyCount, "integer");

var total = Bot.getProperty("totalStory") || 0;
total = total + 1;
Bot.setProperty("totalStory", total, "integer");

// ===== SAFE TEXT =====
var text = message || request.caption || "📎 Media Message";

// ===== ADMIN MESSAGE =====
var adminMsg =
"✨ <b>নতুন গল্প এসেছে</b> ✨\n\n" +
"👤 নাম: " + name + "\n" +
"📊 ইউজার স্টোরি: " + storyCount + "\n" +
"🌍 মোট স্টোরি: " + total + "\n\n" +
"📝 গল্প:\n" + text;

// ===== USER CLEAN MESSAGE (IMPORTANT FIX) =====
var userMsg =
"";

// ===== ADMIN SEND =====
function sendToAdmin(type, file) {

  if (type == "photo") {
    Api.sendPhoto({
      chat_id: admin,
      photo: file,
      caption: adminMsg,
      parse_mode: "HTML"
    });
  }

  else if (type == "video") {
    Api.sendVideo({
      chat_id: admin,
      video: file,
      caption: adminMsg,
      parse_mode: "HTML"
    });
  }

  else {
    Api.sendMessage({
      chat_id: admin,
      text: adminMsg,
      parse_mode: "HTML"
    });
  }
}

// ===== USER SEND =====
function sendToUser(type, file) {

  if (type == "photo") {
    Api.sendPhoto({
      chat_id: user.telegramid,
      photo: file,
      caption: userMsg,
      parse_mode: "HTML"
    });
  }

  else if (type == "video") {
    Api.sendVideo({
      chat_id: user.telegramid,
      video: file,
      caption: userMsg,
      parse_mode: "HTML"
    });
  }

  else {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: userMsg,
      parse_mode: "HTML"
    });
  }
}

// ===== MEDIA HANDLING =====
if (request.photo && request.photo.length > 0) {

  var file = request.photo[request.photo.length - 1].file_id;

  sendToAdmin("photo", file);
  sendToUser("photo", file);

}

else if (request.video) {

  sendToAdmin("video", request.video.file_id);
  sendToUser("video", request.video.file_id);

}

else {

  sendToAdmin("text", null);
  sendToUser("text", null);
}

// ===== NEXT STEP COMMAND =====
Bot.runCommand("userAfterStory");

// ===== RESET =====
Bot.runCommand("resetStory");
