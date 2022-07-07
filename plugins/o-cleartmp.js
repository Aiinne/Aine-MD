const { tmpdir } = require('os')
const { join } = require('path')
const {readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch} = require('fs')
let handler = async (m, { args, text }) => {

conn.reply(m.chat, 'Succes !', m)

const tmp = [tmpdir(), join(__dirname, '../tmp')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    unlinkSync(file)
})
}
handler.help = ['cleartmp']
handler.tags = ['owner']
handler.command = /^(cleartmp)$/i

handler.owner = true

module.exports = handler
