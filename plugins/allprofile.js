let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const axios = require ("axios")
const fetch = require("node-fetch")
let handler = async (m, { conn, text, usedPrefix, command }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }
  
   if(!text && !m.quoted) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6289654360447*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6289654360447*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6289654360447*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m) 
 let pp = './src/avatar_contact.png'
  try {
  	//pp = await conn.updateProfilePicture(text)
		if(text) {
			var who = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var who = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var who = number + '@s.whatsapp.net'
			} 
			//let pp = './src/avatar_contact.png'
			pp = await conn.profilePictureUrl(who, 'image')
		} catch (e) {
					//pp = 'https://telegra.ph/file/32ffb10285e5482b19d89.jpg'
		//} catch (e) {
  } finally {
  	if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == who) : {}
	let number = who.split('@')[0]
	//let pp = await conn.updateProfilePicture(who)
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let health = global.db.data.users[who].health
    let armor = global.db.data.users[who].armor 
   // let warn = global.db.data.users[who].warn
    let pet = global.db.data.users[who].pet
    let kucing = global.db.data.users[who].kucing
    let _kucing = global.db.data.users[who].anakkucing
    let rubah = global.db.data.users[who].rubah
    let _rubah = global.db.data.users[who].anakrubah
    let serigala = global.db.data.users[who].serigala
    let _serigala = global.db.data.users[who].anakserigala
    let naga = global.db.data.users[who].naga
    let _naga = global.db.data.users[who].anaknaga
    let kuda = global.db.data.users[who].kuda
    let _kuda = global.db.data.users[who].anakkuda
    let phonix = global.db.data.users[who].phonix
    let _phonix = global.db.data.users[who].anakphonix
    let griffin = global.db.data.users[who].griffin
    let _griffin = global.db.data.users[who].anakgriffin
    let kyubi = global.db.data.users[who].kyubi
    let _kyubi = global.db.data.users[who].anakkyubi
    let centaur = global.db.data.users[who].centaur
    let _centaur = global.db.data.users[who].anakcentaur
    let diamond = global.db.data.users[who].diamond
    let potion = global.db.data.users[who].potion
    let ramuan = global.db.data.users[who].ramuan
    let common = global.db.data.users[who].common
    let makananpet = global.db.data.users[who].makananpet
    let makanannaga = global.db.data.users[who].makanannaga
    let makananphonix = global.db.data.users[who].makananphonix
    let makanangriffin = global.db.data.users[who].makanangriffin
    let makanankyubi = global.db.data.users[who].makanankyubi
    let makanancentaur = global.db.data.users[who].makanancentaur
    let uncommon = global.db.data.users[who].uncommon
    let mythic = global.db.data.users[who].mythic
    let legendary = global.db.data.users[who].legendary
    let sampah = global.db.data.users[who].sampah
    let anggur = global.db.data.users[who].anggur
    let jeruk = global.db.data.users[who].jeruk
    let apel = global.db.data.users[who].apel
    let mangga = global.db.data.users[who].mangga
    let pisang = global.db.data.users[who].pisang
    let bibitanggur = global.db.data.users[who].bibitanggur
    let bibitjeruk = global.db.data.users[who].bibitjeruk
    let bibitapel = global.db.data.users[who].bibitapel
    let bibitmangga = global.db.data.users[who].bibitmangga
    let bibitpisang = global.db.data.users[who].bibitpisang 
    let gardenboxs = global.db.data.users[who].gardenboxs
    let cupon = global.db.data.users[who].cupon
    let tiketcoin = global.db.data.users[who].tiketcoin
    let tiketm = global.db.data.users[who].healtmonster
    let aqua = global.db.data.users[who].aqua
    let expg = global.db.data.users[who].expg
    let boxs = global.db.data.users[who].boxs
    let botol = global.db.data.users[who].botol
    let kayu = global.db.data.users[who].kayu 
    let batu = global.db.data.users[who].batu
    let iron = global.db.data.users[who].iron
    let sword = global.db.data.users[who].sword
    let string = global.db.data.users[who].string
    let kaleng = global.db.data.users[who].kaleng
    let kardus = global.db.data.users[who].kardus
    let berlian = global.db.data.users[who].berlian
    let emas = global.db.data.users[who].emas
    let emaspro = global.db.data.users[who].emasbatang
    let hero = global.db.data.users[who].hero
    let exphero = global.db.data.users[who].exphero
    let now = new Date() * 1
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
   // let buffer = await getBuffer(pp)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran @${pasangan.split`@`[0]}`
    let str = `
Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.split`@`[0]})${about ? '\nAbout: ' + about : ''}
Status: ${pasangan ? jodoh : 'Jomblo' }
Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
Premium: ${premium ? 'Yes' : 'No'}
Kadaluarsa Premium: ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : '*Tidak diatur expired premium!*'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}

*Inventory*
Level: ${level}
Role: *${role}*
Limit: *${limit}*
Exp: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
Money: *${money}*
Health: *${health}*
Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*
Atm: *${bank}*
Cupon: *${cupon}*
Expg: *${expg}*
Tiketm: *${tiketm}*
Tiketcoin: *${tiketcoin}*

*Package*
Potion: *${potion}*
Ramuan: *${ramuan}*
Iron: *${iron}*
String: *${string}*
Sword: *${sword}*
Sampah: *${sampah}*
Kayu: *${kayu}*
Batu: *${batu}*
Aqua: *${aqua}*
Makanan Pet: *${makananpet}*
Makanan Phonix: *${makananphonix}*
Makanan Naga: *${makanannaga}*
Makanan Griffin: *${makanangriffin}*
Makanan Kyubi: *${makanankyubi}*
Makanan Centaur: *${makanancentaur}*
Total inv: *${diamond + potion + ramuan + sampah + kayu + sword + iron + string + makananpet + makananphonix + makanannaga + makanangriffin + makanankyubi + makanancentaur}* item

*Crate*
Boxs: *${boxs}*
Common: *${common}*
Uncommon: *${uncommon}*
Mythic: *${mythic}*
Legendary: *${legendary}*.
Pet: *${pet}*
Gardenboxs: *${gardenboxs}*

*Fruits*
Mangga: ${mangga}
Anggur: ${anggur}
Pisang: ${pisang}
Jeruk: ${jeruk}
Apel: ${apel}

*Seeds*
Bibit Mangga: ${bibitmangga}
Bibit Anggur: ${bibitanggur}
Bibit Pisang: ${bibitpisang}
Bibit Jeruk: ${bibitjeruk}
Bibit Apel: ${bibitapel}

*Trash Man*
Kardus: ${kardus}
Kaleng: ${kaleng}
Botol: ${botol}

*Mining*
Berlian: ${berlian}
Emas: ${emas}
Diamond: ${diamond}

*Hero*
My Hero: *${hero == 0 ? 'Tidak Punya' : '' || hero == 1 ? 'Level 1' : '' || hero == 2 ? 'Level 2' : '' || hero == 3 ? 'Level 3' : '' || hero == 4 ? 'Level 4' : '' || hero == 5 ? 'Level 5' : '' || hero == 6 ? 'Level 6' : '' || hero == 7 ? 'Level 7' : '' || hero == 8 ? 'Level 8' : '' || hero == 9 ? 'Level 9' : '' || hero == 10 ? 'Level 10' : '' || hero == 11 ? 'Level 11' : '' || hero == 12 ? 'Level 12' : '' || hero == 13 ? 'Level 13' : '' || hero == 14 ? 'Level 14' : '' || hero == 15 ? 'Level 15' : '' || hero == 16 ? 'Level 16' : '' || hero == 17 ? 'Level 17' : '' || hero == 18 ? 'Level 18' : '' || hero == 19 ? 'Level 19' : '' || hero == 20 ? 'Level 20' : '' || hero == 21 ? 'Level 21' : '' || hero == 22 ? 'Level 22' : '' || hero == 23 ? 'Level 23' : '' || hero == 24 ? 'Level 24' : '' || hero == 25 ? 'Level 25' : '' || hero == 26 ? 'Level 26' : '' || hero == 27 ? 'Level 27' : '' || hero == 28 ? 'Level 28' : '' || hero == 29 ? 'Level 29' : '' || hero == 30 ? 'Level 30' : '' || hero == 31 ? 'Level 31' : '' || hero == 32 ? 'Level 32' : '' || hero == 33 ? 'Level 33' : '' || hero == 34 ? 'Level 34' : '' || hero == 35 ? 'Level 35' : '' || hero == 36 ? 'Level 36' : '' || hero == 37 ? 'Level 37'  : '' || hero == 38 ? 'Level 38' : '' || hero == 39 ? 'Level 39' : '' || hero == 40 ? 'Level MAX' : ''}*

*Pet*
Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
Naga: *${naga == 0 ? 'Tidak Punya' : '' || naga == 1 ? 'Level 1' : '' || naga == 2 ? 'Level 2' : '' || naga == 3 ? 'Level 3' : '' || naga == 4 ? 'Level 4' : '' || naga == 5 ? 'Level 5' : '' || naga == 6 ? 'Level 6' : '' || naga == 7 ? 'Level 7' : '' || naga == 8 ? 'Level 8' : '' || naga == 9 ? 'Level 9' : '' || naga == 10 ? 'Level 10' : '' || naga == 11 ? 'Level 11' : '' || naga == 12 ? 'Level 12' : '' || naga == 13 ? 'Level 13' : '' || naga == 14 ? 'Level 14' : '' || naga == 15 ? 'Level 15' : '' || naga == 16 ? 'Level 16' : '' || naga == 17 ? 'Level 17' : '' || naga == 18 ? 'Level 18' : '' || naga == 19 ? 'Level 19' : '' || naga == 20 ? 'Level MAX' : ''}*
Kyubi: *${kyubi == 0 ? 'Tidak Punya' : '' || kyubi == 1 ? 'Level 1' : '' || kyubi == 2 ? 'Level 2' : '' || kyubi == 3 ? 'Level 3' : '' || kyubi == 4 ? 'Level 4' : '' || kyubi == 5 ? 'Level 5' : '' || kyubi == 6 ? 'Level 6' : '' || kyubi == 7 ? 'Level 7' : '' || kyubi == 8 ? 'Level 8' : '' || kyubi == 9 ? 'Level 9' : '' || kyubi == 10 ? 'Level 10' : '' || kyubi == 11 ? 'Level 11' : '' || kyubi == 12 ? 'Level 12' : '' || kyubi == 13 ? 'Level 13' : '' || kyubi == 14 ? 'Level 14' : '' || kyubi == 15 ? 'Level 15' : '' || kyubi == 16 ? 'Level 16' : '' || kyubi == 17 ? 'Level 17' : '' || kyubi == 18 ? 'Level 18' : '' || kyubi == 19 ? 'Level 19' : '' || kyubi == 20 ? 'Level MAX' : ''}*
Centaur: *${centaur == 0 ? 'Tidak Punya' : '' || centaur == 1 ? 'Level 1' : '' || centaur == 2 ? 'Level 2' : '' || centaur == 3 ? 'Level 3' : '' || centaur == 4 ? 'Level 4' : '' || centaur == 5 ? 'Level 5' : '' || centaur == 6 ? 'Level 6' : '' || centaur == 7 ? 'Level 7' : '' || centaur == 8 ? 'Level 8' : '' || centaur == 9 ? 'Level 9' : '' || centaur == 10 ? 'Level 10' : '' || centaur == 11 ? 'Level 11' : '' || centaur == 12 ? 'Level 12' : '' || centaur == 13 ? 'Level 13' : '' || centaur == 14 ? 'Level 14' : '' || centaur == 15 ? 'Level 15' : '' || centaur == 16 ? 'Level 16' : '' || centaur == 17 ? 'Level 17' : '' || centaur == 18 ? 'Level 18' : '' || centaur == 19 ? 'Level 19' : '' || centaur == 20 ? 'Level MAX' : ''}*
Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*  
Phonix: *${phonix == 0 ? 'Tidak Punya' : '' || phonix == 1 ? 'Level 1' : '' || phonix == 2 ? 'Level 2' : '' || phonix == 3 ? 'Level 3' : '' || phonix == 4 ? 'Level 4' : '' || phonix == 5 ? 'Level 5' : '' || phonix == 6 ? 'Level 6' : '' || phonix == 7 ? 'Level 7' : '' || phonix == 8 ? 'Level 8' : '' || phonix == 9 ? 'Level 9' : '' || phonix == 10 ? 'Level 10' : '' || phonix == 11 ? 'Level 11' : '' || phonix == 12 ? 'Level 12' : '' || phonix == 13 ? 'Level 13' : '' || phonix == 14 ? 'Level 14' : '' || phonix == 15 ? 'Level MAX' : ''}*
Griffin: *${griffin == 0 ? 'Tidak Punya' : '' || griffin == 1 ? 'Level 1' : '' || griffin == 2 ? 'Level 2' : '' || griffin == 3 ? 'Level 3' : '' || griffin == 4 ? 'Level 4' : '' || griffin == 5 ? 'Level 5' : '' || griffin == 6 ? 'Level 6' : '' || griffin == 7 ? 'Level 7' : '' || griffin == 8 ? 'Level 8' : '' || griffin == 9 ? 'Level 9' : '' || griffin == 10 ? 'Level 10' : '' || griffin == 11 ? 'Level 11' : '' || griffin == 12 ? 'Level 12' : '' || griffin == 13 ? 'Level 13' : '' || griffin == 14 ? 'Level 14' : '' || griffin == 15 ? 'Level MAX' : ''}*
Serigala: *${serigala == 0 ? 'Tidak Punya' : '' || serigala == 1 ? 'Level 1' : '' || serigala == 2 ? 'Level 2' : '' || serigala == 3 ? 'Level 3' : '' || serigala == 4 ? 'Level 4' : '' || serigala == 5 ? 'Level 5' : '' || serigala == 6 ? 'Level 6' : '' || serigala == 7 ? 'Level 7' : '' || serigala == 8 ? 'Level 8' : '' || serigala == 9 ? 'Level 9' : '' || serigala == 10 ? 'Level 10' : '' || serigala == 11 ? 'Level 11' : '' || serigala == 12 ? 'Level 12' : '' || serigala == 13 ? 'Level 13' : '' || serigala == 14 ? 'Level 14' : '' || serigala == 15 ? 'Level MAX' : ''}*\n
*Proges*
╭────────────────
│Level *${level}* To Level *${level}*
│Exp *${exp}* -> *${max}*
│
│Hero ${hero == 0 ? 'Tidak Punya' : '' || hero > 0 && hero < 40 ? `Level *${hero}* To level *${hero + 1}*\n│Exp *${exphero}* -> *${hero *500}*` : '' || hero == 40 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Rubah ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *1000}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *1000}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *1000}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Naga ${naga == 0 ? 'Tidak Punya' : '' || naga > 0 && naga < 20 ? `Level *${naga}* To level *${naga + 1}*\n│Exp *${_naga}* -> *${naga *10000}*` : '' || naga == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Phonix ${phonix == 0 ? 'Tidak Punya' : '' || phonix > 0 && phonix < 15 ? `Level *${phonix}* To level *${phonix + 1}*\n│Exp *${_phonix}* -> *${phonix *10000}*` : '' || phonix == 15 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kyubi ${kyubi == 0 ? 'Tidak Punya' : '' || kyubi > 0 && kyubi < 20 ? `Level *${kyubi}* To level *${kyubi + 1}*\n│Exp *${_kyubi}* -> *${kyubi *10000}*` : '' || kyubi == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Centaur ${centaur == 0 ? 'Tidak Punya' : '' || centaur > 0 && centaur < 20 ? `Level *${centaur}* To level *${centaur + 1}*\n│Exp *${_centaur}* -> *${centaur *10000}*` : '' || centaur == 20 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Griffin ${griffin == 0 ? 'Tidak Punya' : '' || griffin > 0 && griffin < 15 ? `Level *${griffin}* To level *${griffin + 1}*\n│Exp *${_griffin}* -> *${griffin *10000}*` : '' || griffin == 15 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Serigala ${serigala == 0 ? 'Tidak Punya' : '' || serigala > 0 && serigala < 15 ? `Level *${serigala}* To level *${serigala + 1}*\n│Exp *${_serigala}* -> *${serigala *10000}*` : '' || serigala == 15? '*Max Level*' : ''}
╰────────────────
`.trim()
     let mentionedJid = [who]
 	conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid: conn.parseMention(str) }})
 }
}
handler.help = ['allprofile [@user]']
handler.tags = ['info']
handler.command = /^allprofile$/i
handler.limit = true
handler.register = false

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
  
  const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
