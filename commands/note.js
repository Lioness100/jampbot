const discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  name: "note",
  guildOnly: true,
  judgeOnly: true,
  async execute(message, args) {
    const good = '👍'
    let Note = args.slice(0).join(" ");
    if(!Note) return message.channel.send('❌ You did not tell me what to note.\nCorrect usage: ``!note insert note here``')
    if (Note.length > 2048) return message.channel.send('❌ The embed character limit is ``2048`` characters. Please try again with a shorter message, or split your message into two different notes.')
    const embed = new discord.MessageEmbed()
    .setAuthor('Noted by ' + message.author.username)
    .setThumbnail('https://cdn0.iconfinder.com/data/icons/online-education-butterscotch-vol-2/512/Student_Notes-512.png')
    .setColor('GREEN')
    .setDescription(Note)
    .setFooter('React to mark as resolved')
    let msg = await message.client.channels.cache.get(config.channelID.notes).send(embed);
    await msg.react(good)
    message.channel.send('Note added.')
  }};