const { sticker2 } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) {
    let stiker = await sticker2(null, global.API('xteam', '/ttp', { file: '', text }))
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = texto
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

