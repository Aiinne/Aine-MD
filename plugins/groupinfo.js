let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.profilePictureUrl(m.chat, 'image')
    } catch (e) {
    } finally {
        let { expired, viewonce, antiSticker, antiBadword, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = participants.filter(p => p.admin)
        const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
       // const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
	let now = new Date() * 1
        let text = `*「 Group Information 」*\n
*ID:* 
${groupMetadata.id}

*Name:* 
${groupMetadata.subject}

*Description:* 
${groupMetadata.desc}

*Total Members:*
${participants.length} Members

*Group Owner:* 
@${m.chat.split`-`[0]}

*Group Admin:*
${listAdmin}

*Expired:*
${(expired - now) > 1 ? msToDate(expired - now) : '*Tidak diatur expired group!*'}

*Group Settings:*
${isBanned ? '✅' : '❌'} Banned
${welcome ? '✅' : '❌'} Welcome
${detect ? '✅' : '❌'} Detect
${global.db.data.chats[m.chat].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()
        let ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
      //  conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentions: mentionedJid } })
      //  conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id)] })
       conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid: conn.parseMention(text) }})
     }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
