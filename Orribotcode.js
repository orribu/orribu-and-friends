// JavaScript Document
client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  newUsers.set(member.id, member.user);

  if (newUsers.size > 10) {
    const userlist = newUsers.map(u => u.toString()).join(" ");
    guild.defaultChannel.send("Hey there! Welcome aboard!\n" + userlist);
    newUsers.clear();
  }
});
bot.on("message", function(message){ if(message.content === "!welcome"){bot.reply(message,"http://bit.ly/2aAhY5u");}
});
