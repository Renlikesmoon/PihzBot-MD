
import ws from 'ws';
async function handler(m, { usedPrefix }) {
  let users = [...new Set([...global.conns.filter(conn => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map(conn => conn.user)])]
  let b = users.map((v, i) => `_*${i + 1}.*_ *${v.name}*\nwa.me/${v.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}help`).join('\n')
 m.reply(`*LIST BOT*

*TOTAL:* ${users.length} 

${b}`) 
  
}
handler.help = ['botlist']
handler.tags = ['jadibot']
handler.command = ['listbot', 'listbots', 'botlist'] 

export default handler
