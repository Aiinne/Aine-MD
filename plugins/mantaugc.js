let handler = async (m, { conn, args, participants, groupMetadata }) => {
let id = m.chat
let codegc = args[0]
       if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) chat = args[0]
       // if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(chat)) throw 'Hanya bisa dibuka di grup'
       // let groupMetadata = await conn.groupMetadata(id)
       // if (!groupMetadata) throw 'groupMetadata is undefined :\\'
       // if (!'participants' in groupMetadata) throw 'participants is not defined :('
       // let me = groupMetadata.participants.find(user => user.id === conn.user.jid)
       // if (!me) throw 'Aku tidak ada di grup itu :('
       // if (!m.isGroup) return global.dfail('group', m, conn)
       let pp = './src/avatar_contact.png'
       try {
        pp = await conn.profilePictureUrl(codegc, 'image')
    } catch (e) {
    } finally {
        let { expired, viewonce, antiSticker, antiBadword, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[codegc]
        let groupAdmins = participants.filter(p => p.admin)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
       // const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || codegc.split`-`[0] + '@s.whatsapp.net'
	    let now = new Date() * 1
	    let metadata = await conn.groupMetadata(codegc)
	    console.log(groupMetadata)
        let text = `*「 Group Information 」*\n
*ID:* 
${codegc}

*Name:* 
${await conn.getName(codegc)}

*Description:* 
${metadata.desc}

*Total Members:*
${participants.length} Member

*Group Owner:* 
@${codegc.split`-`[0]}

*Group Admin:*
${listAdmin}

*Expired:*
${(expired - now) > 1 ? msToDate(expired - now) : '*Tidak diatur expired group!*'}

*Group Settings:*
${isBanned ? '✅' : '❌'} Banned
${welcome ? '✅' : '❌'} Welcome
${detect ? '✅' : '❌'} Detect
${global.db.data.chats[codegc].delete ? '❌' : '✅'} Anti Delete
${antiLink ? '✅' : '❌'} Anti Link

*Message Settings:*
Welcome: ${sWelcome}
Bye: ${sBye}
Promote: ${sPromote}
Demote: ${sDemote}
`.trim()

let ownernya = [`${codegc.split`-`[0]}@s.whatsapp.net`]
let mentionedJid = groupAdmins.concat(ownernya)
await conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid: conn.parseMention(text) }})
      }
   }

handler.command = /^(mantaugc)$/i

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
