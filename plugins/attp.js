const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {
  if (text) conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text }), 'attp.webp', '', m, true, { asSticker: true })
  else throw 'Uhm...Teksnya?'
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']
handler.command = /^attp$/i
handler.owner = true
handler.mods = true
handler.premium = true
handler.group = true
handler.private = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

