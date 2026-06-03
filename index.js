const { Client, GatewayIntentBits, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.GuildMemberAdd, member => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`👋 Welcome ${member} to ${member.guild.name}!`);
  }
});

client.on(Events.GuildMemberRemove, member => {
  const channel = member.guild.systemChannel;
  if (channel) {
    channel.send(`😢 ${member.user.tag} left the server.`);
  }
});

client.login(process.env.TOKEN);
