const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get smd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
scarch: ''
};

 for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
 }

let madeMenu = `*Hello ${pushname} *`
> *DOWNLOAD COMMANDS* ⬇️
  
${menu.download}

> *MAIN COMMANDS*🌟

 ${menu.main}

> *GROUP COMMANDS*👾

${menu.group}

> *OWNER COMMANDS*💀

${menu.owner}

> *CONVERT COMMANDS*⭐

${menu.convert}

> *SCARCH COMMANDS*✅

${menu.scarch}

POWERD BY GHOST-MD
.
await conn.sendMessage(from.{text:madeMenu},{qouted:mek})

  
  
}catch(e){
console.log(e)
reply(`${e}`)
