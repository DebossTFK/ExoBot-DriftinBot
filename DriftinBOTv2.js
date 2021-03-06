const Discord = require('discord.js');
const bot = new Discord.Client({
        bot: true
});

// SETTINGS
const settings = {}
settings.config = require('./config.json');
settings.token = settings.config.TOKEN
settings.prefix = `drift `
settings.PREFIX = `drift `
settings.DB = require('./driftinDB.json')
settings.CatID = `177286767903244288`
settings.DebossID = `160853902726660096`
settings.autorestart = true
settings.YTAPI = settings.config.YTAPI
settings.exec = require('child_process').exec;
settings.pf = settings.prefix ? settings.prefix : `${bot.user.toString()} `;
settings.cmdeasy = new Map([
        ["owner", "***The Bot Owners Are ///Deboss\\\\\\\\\\\ & Cat***"],
        ["official server", "**My Official Server Is** \n ***http://discord.io/exobotofficial***"],
	["owner/debosscontact", "Deboss's Contact Info\nDiscordMention : @ムDebossム#8272 \nDiscord ID : 160853902726660096\nTwitter : https://twitter.com/DebossExoDev\nYouTube : https://www.youtube.com/channel/UC93x5w-V7qZ2vC1c0kuFWqQ\n***GitHub*** : https://github.com/DebossTFK/ExoBot-DriftinBot"],
	["owner/catcontact", "Cat's Contact Info\nDiscordMention : @Cat#0822\nDiscord ID : 177286767903244288\n***Git/hub*** : https://github.com/Cat-who-loves-bots"],
	["help", `***Commands Are All Being Rewrote For Another Game***`],
	["invite", "**Here is my invite all permissions ARE needed for certain things** \n https://discordapp.com/oauth2/authorize?client_id=227492512636469260&scope=bot&permissions=536345663"],
        [`stats racer`, `**❯_ **Racer
**❯_ **Speed❯${settings.DB.racer.Speed}
**❯_ **Defense❯${settings.DB.racer.Defense}
**❯_ **Damage❯${settings.DB.racer.Damage}
**❯_ **Handling❯${settings.DB.racer.Handling}`],
        [`stats bully`, `**❯_ **Bully
**❯_ **Speed**❯**${settings.DB.bully.Speed}
**❯_ **Defense**❯**${settings.DB.bully.Defense}
**❯_ **Damage**❯**${settings.DB.bully.Damage}
**❯_ **Handling**❯**${settings.DB.bully.Handling}`],
        [`stats flash`, `**❯_ **Flash
**❯_ **Speed**❯**${settings.DB.flash.Speed}
**❯_ **Defense**❯**${settings.DB.flash.Defense}
**❯_ **Damage**❯**${settings.DB.flash.Damage}
**❯_ **Handling**❯**${settings.DB.flash.Handling}`],
        [`stats hazard`, `**❯_ **Hazard
**❯_ **Speed**❯**${settings.DB.hazard.Speed}
**❯_ **Defense**❯**${settings.DB.hazard.Defense}
**❯_ **Damage**❯**${settings.DB.hazard.Damage}
**❯_ **Handling**❯**${settings.DB.hazard.Handling}`],
        [`stats buster`, `**❯_ **Buster
**❯_ **Speed**❯**${settings.DB.buster.Speed}
**❯_ **Defense**❯**${settings.DB.buster.Defense}
**❯_ **Damage**❯**${settings.DB.buster.Damage}
**❯_ **Handling**❯**${settings.DB.buster.Handling}`],
        [`stats ambulamp`, `**❯_ **Ambulamp
**❯_ **Speed**❯**${settings.DB.ambulamp.Speed}
**❯_ **Defense**❯**${settings.DB.ambulamp.Defense}
**❯_ **Damage**❯**${settings.DB.ambulamp.Damage}
**❯_ **Handling**❯**${settings.DB.ambulamp.Handling}`],
        [`stats piercer`, `**❯_ **Piercer
**❯_ **Speed**❯**${settings.DB.piercer.Speed}
**❯_ **Defense**❯**${settings.DB.piercer.Defense}
**❯_ **Damage**❯**${settings.DB.piercer.Damage}
**❯_ **Handling**❯**${settings.DB.piercer.Handling}`],
        [`stats sludger`, `**❯_ **Sludger
**❯_ **Speed**❯**${settings.DB.sludger.Speed}
**❯_ **Defense**❯**${settings.DB.sludger.Defense}
**❯_ **Damage**❯**${settings.DB.sludger.Damage}
**❯_ **Handling**❯**${settings.DB.sludger.Handling}`],
        [`stats deprived`, `**❯_ **Deprived
**❯_ **Speed**❯**${settings.DB.deprived.Speed}
**❯_ **Defense**❯**${settings.DB.deprived.Defense}
**❯_ **Damage**❯**${settings.DB.deprived.Damage}
**❯_ **Handling**❯**${settings.DB.deprived.Handling}`],
        [`stats star`, `**❯_ **Star
**❯_ **Speed**❯**${settings.DB.star.Speed}
**❯_ **Defense**❯**${settings.DB.star.Defense}
**❯_ **Damage**❯**${settings.DB.star.Damage}
**❯_ **Handling**❯**${settings.DB.star.Handling}`]
]);
// SETTINGS

let queue = {};

const yt = require('ytdl-core');

var search = require('youtube-search');
var opts = {
        maxResults: 2,
        key: settings.YTAPI
};

const commands = {
                'git-pull': msg => {
                        if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
                                settings.exec(`git pull`, function(err, stdout, stderr) {
                                        msg.channel.sendMessage("\`\`\`xl\n" + stdout + "\n" + stderr + "\n\`\`\`").then(() => {
                                                if (settings.autorestart = true) return process.exit(1);
                                                else {
                                                        return msg.channel.sendMessage(`Auto Restart Failed Please Restart Me`)
                                                }
                                        })
                                });
                        }
                },
                'restart': msg => {
                        if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
                                msg.channel.sendMessage('Ok Daddy ;)   (Restarting Now)').then(() => process.exit(1));
                        }
                },
                'eval': (msg, newContent) => {
                                msg.content = msg.content.substring(11)
                                if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
                                        const code = msg.content
                                        if (!code.length) return message.reply(`BOI YOU CANT SIMPLY DRIFT EVAL YOU NEED TO ADD SOME CODE THERE`);
                                        try {
                                                const output = eval(code);
                                                msg.channel.sendMessage(
                                                                `\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`OUTPUT:\`\n\`\`\`${typeof output === 'object' ? JSON.stringify(output) : output}\`\`\``
            );
        } catch(err) {
            msg.channel.sendMessage(`\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`ERROR:\`\n\`\`\`${err}\`\`\``);
        }
    }
  },
  'music': msg => {
msg.content = msg.content.substring(12)
  if(msg.content === 'play') {
			if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**drift add** \`song_name\``);
			if (!bot.voiceConnections.exists('channel', msg.member.voiceChannel)) return msg.channel.sendMessage(`**drift join** to make me join a voice channel`);
			if (queue[msg.guild.id].playing) return msg.channel.sendMessage(`**I am already playing**`);
			let myVoiceConnection = bot.voiceConnections.find('channel', msg.member.voiceChannel);
			let dispatcher;
			queue[msg.guild.id].playing = true;

			console.log(queue);
			(function play(song) {
				console.log(song);
				if (song === undefined) return msg.channel.sendMessage('⏹ playlist is empty\n⏏ left voice channel').then(() => {
					queue[msg.guild.id].playing = false;
					msg.member.voiceChannel.leave();
				});
				msg.channel.sendMessage(`▶ **${song.title}** added by **${song.requester}**`);
				dispatcher = myVoiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });
				let collector = msg.channel.createCollector(m => m);
				collector.on('message', m => {
					if (m.content.startsWith('pause')) {
						msg.channel.sendMessage(`⏸ **${song.title}**`).then(() => {dispatcher.pause();});
					} else if (m.content.startsWith('resume')){
						msg.channel.sendMessage(`⏯ **${song.title}**`).then(() => {dispatcher.resume();});
					} else if (m.content.startsWith('skip')){
						msg.channel.sendMessage(`⏭ **${song.title}**`).then(() => {dispatcher.end();});
				} else if (m.content.startsWith('next')){
						msg.channel.sendMessage(`⏭ **${song.title}**`).then(() => {dispatcher.end();});
				}
				});
				dispatcher.on('end', () => {
					collector.stop();
					queue[msg.guild.id].songs.shift();
					play(queue[msg.guild.id].songs[0]);
				});
				dispatcher.on('error', (err) => {
					return msg.channel.sendMessage('error: ' + err).then(() => {
						collector.stop();
						queue[msg.guild.id].songs.shift();
						play(queue[msg.guild.id].songs[0]);
					});
				});
			})(queue[msg.guild.id].songs[0]);
		} else if(msg.content.startsWith("join")) {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join();
		} else if(msg.content.startsWith("leave")) {
			const voiceChannel = msg.member.voiceChannel;
			voiceChannel.leave();
		}else if(msg.content.startsWith("now")) {
			msg.channel.sendMessage(`**🎤 ${queue[msg.guild.id].songs[0].title}** added by **${queue[msg.guild.id].songs[0].requester}**`)
		}else if(msg.content.startsWith("later")) {
			msg.channel.sendMessage(`**🆙 ${queue[msg.guild.id].songs[1].title}** added by **${queue[msg.guild.id].songs[1].requester}**`)
		}else if(msg.content.startsWith("playlist")) {
			if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**drift add \`song_name\`**. First add songs to see playlist`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`\`${i+1}.\`**${song.title}** added by **${song.requester}**`);});
		msg.channel.sendMessage(`**${msg.guild.name}'s server music playlist \`${tosend.length} song(s)\`**\n${tosend.slice(0,15).join('\n')}`);
		} else if(msg.content.startsWith("add")) {
			let input = msg.content.substring(4)
			
			search(input, opts, function(err, results) {
				if(err) return console.log(err);
				console.dir(results);
				var url = results[0].link;
				yt.getInfo(url, (err, info) => {
					if(err) {
						return msg.channel.sendMessage(`❌ **${input}**`);
					}
					if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
					queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
					msg.channel.sendMessage(`✅ added to playlist **${info.title}**`);
				});
			});
		}
  }
};

bot.on('ready', () => {
    console.log('Hah Ah Suh Dude I Just Restarted Driftin Bot ~Deboss')
    bot.user.setGame(`Under Development For Another Game || Currently in ${bot.guilds.size} Servers`)
});

bot.on('reconnecting', () => {
    console.log('my batteries ended need to change them and join the figth back');
});

    bot.on('message', msg => {
	    let wew = 0;
	    if (msg.content.includes('wew')) {
		    if (msg.author.bot) return;
		    wew++;
	msg.channel.sendMessage(`lad`);
 	}
	    	    if (msg.content.includes('ayy')) {
		    if (msg.author.bot) return;
	msg.channel.sendMessage(`lmao`);
 	}
  var command_name = msg.content.slice(6);
  
  if(settings.cmdeasy.has(command_name)) {
msg.channel.sendMessage(settings.cmdeasy.get(command_name))
    return;
  }


    if (msg.author.bot) return;
    if (!msg.content.startsWith(settings.pf)) return;

    const content = msg.content.slice(settings.pf.length);

    const command = commands[content.split(' ')[0]];
    command(msg, content);
})
bot.login(settings.token);
