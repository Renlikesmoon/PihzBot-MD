import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`┏─• *SERIAL NOMOR :*
│◉ sɴ :${sn}
┗───•`)
}

handler.help = ['ceksn']
handler.tags = ['verifikasi']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler
