module.exports = {
  name: 'f',
  guildOnly: true,
  async execute(message, args) {
    await message.delete();
    message.channel.messages
      .fetch({ limit: 1 })
      .then((messages) => {
        const lastMessage = messages.first();
        const F = '🇫';
        const FeelsBuzzyMan = '727242758338904064';
        const MonkaS = '717597015911170059';
        const NotLikeThis = '717575061468610560';
        const SadPog = '710543485849174067';
        lastMessage
          .react(F)
          .then(() => lastMessage.react(FeelsBuzzyMan))
          .then(() => lastMessage.react(MonkaS))
          .then(() => lastMessage.react(NotLikeThis))
          .then(() => lastMessage.react(SadPog));

        // do what you need with lastMessage below
      })
      .catch(console.error);
  },
};
