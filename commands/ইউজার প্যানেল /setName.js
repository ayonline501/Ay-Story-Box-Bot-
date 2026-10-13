/*CMD
  command: setName
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

User.setProperty("name", message, "string");

Bot.sendMessage(
  "*📖 ধন্যবাদ " + message + "*\n\n*✍️ এখন আপনার গল্প অথবা ক্যাপশন (ইত্যাদি) দিন:*"
);

Bot.runCommand("setStory");
