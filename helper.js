const Discord = require("discord.js");
function member(msg) {
    return msg.guild.member(msg.author);
}
exports.m = member;