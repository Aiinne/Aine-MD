//console.log('Starting to run ainebot...')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const { color } = require('./lib/color')
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)

console.log(color(time,"white"),color("[STATUS]","green"),color("Connecting...","aqua"))
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var jamNow = date.getHours();
var menitNow = date.getMinutes();
var detikNow = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
 switch(jams){
                case 0: jams = "Malam"; break;
                case 1: jams = "Malam"; break;
                case 2: jams = "Malam"; break;
                case 3: jams = "Pagi"; break;
                case 4: jams = "Pagi"; break;
                case 5: jams = "Pagi"; break;
                case 6: jams = "Pagi"; break;
                case 7: jams = "Pagi"; break;
                case 8: jams = "Pagi"; break;
                case 9: jams = "Pagi"; break;
                case 10: jams = "Pagi"; break;
                case 11: jams = "Siang"; break;
                case 12: jams = "Siang"; break;
                case 13: jams = "Siang"; break;
                case 14: jams = "Siang"; break;
                case 15: jams = "Sore"; break;
                case 16: jams = "Sore"; break;
                case 17: jams = "Sore"; break;
                case 18: jams = "Malam"; break;
                case 19: jams = "Malam"; break;
                case 20: jams = "Malam"; break;
                case 21: jams = "Malam"; break;
                case 22: jams = "Malam"; break;
                case 23: jams = "Malam"; break;
            }
switch(jamNow){
                case 0: jamNow = "00"; break;
                case 1: jamNow = "01"; break;
                case 2: jamNow = "02"; break;
                case 3: jamNow = "03"; break;
                case 4: jamNow = "04"; break;
                case 5: jamNow = "05"; break;
                case 6: jamNow = "06"; break;
                case 7: jamNow = "07"; break;
                case 8: jamNow = "08"; break;
                case 9: jamNow = "09"; break;
                case 10: jamNow = "10"; break;
                case 11: jamNow = "11"; break;
                case 12: jamNow = "12"; break;
                case 13: jamNow = "13"; break;
                case 14: jamNow = "14"; break;
                case 15: jamNow = "15"; break;
                case 16: jamNow = "16"; break;
                case 17: jamNow = "17"; break;
                case 18: jamNow = "18"; break;
                case 19: jamNow = "19"; break;
                case 20: jamNow = "20"; break;
                case 21: jamNow = "21"; break;
                case 22: jamNow = "22"; break;
                case 23: jamNow = "23"; break;
            }
switch(menitNow){
                case 0: menitNow = "00"; break;
                case 1: menitNow = "01"; break;
                case 2: menitNow = "02"; break;
                case 3: menitNow = "03"; break;
                case 4: menitNow = "04"; break;
                case 5: menitNow = "05"; break;
                case 6: menitNow = "06"; break;
                case 7: menitNow = "07"; break;
                case 8: menitNow = "08"; break;
                case 9: menitNow = "09"; break;
                case 10: menitNow = "10"; break;
                case 11: menitNow = "11"; break;
                case 12: menitNow = "12"; break;
                case 13: menitNow = "13"; break;
                case 14: menitNow = "14"; break;
                case 15: menitNow = "15"; break;
                case 16: menitNow = "16"; break;
                case 17: menitNow = "17"; break;
                case 18: menitNow = "18"; break;
                case 19: menitNow = "19"; break;
                case 20: menitNow = "20"; break;
                case 21: menitNow = "21"; break;
                case 22: menitNow = "22"; break;
                case 23: menitNow = "23"; break;
                case 24: menitNow = "24"; break;
                case 25: menitNow = "25"; break;
                case 26: menitNow = "26"; break;
                case 27: menitNow = "27"; break;
                case 28: menitNow = "28"; break;
                case 29: menitNow = "29"; break;
                case 30: menitNow = "30"; break;
                case 31: menitNow = "31"; break;
                case 32: menitNow = "32"; break;
                case 33: menitNow = "33"; break;
                case 34: menitNow = "34"; break;
                case 35: menitNow = "35"; break;
                case 36: menitNow = "36"; break;
                case 37: menitNow = "37"; break;
                case 38: menitNow = "38"; break;
                case 39: menitNow = "39"; break;
                case 40: menitNow = "40"; break;
                case 41: menitNow = "41"; break;
                case 42: menitNow = "42"; break;
                case 43: menitNow = "43"; break;
                case 44: menitNow = "44"; break;
                case 45: menitNow = "45"; break;
                case 46: menitNow = "46"; break;
                case 47: menitNow = "47"; break;
                case 48: menitNow = "48"; break;
                case 49: menitNow = "49"; break;
                case 50: menitNow = "50"; break;
                case 51: menitNow = "51"; break;
                case 52: menitNow = "52"; break;
                case 53: menitNow = "53"; break;
                case 54: menitNow = "54"; break;
                case 55: menitNow = "55"; break;
                case 56: menitNow = "56"; break;
                case 57: menitNow = "57"; break;
                case 58: menitNow = "58"; break;
                case 59: menitNow = "59"; break;
            }

switch(detikNow){
                case 0: detikNow = "00"; break;
                case 1: detikNow = "01"; break;
                case 2: detikNow = "02"; break;
                case 3: detikNow = "03"; break;
                case 4: detikNow = "04"; break;
                case 5: detikNow = "05"; break;
                case 6: detikNow = "06"; break;
                case 7: detikNow = "07"; break;
                case 8: detikNow = "08"; break;
                case 9: detikNow = "09"; break;
                case 10: detikNow = "10"; break;
                case 11: detikNow = "11"; break;
                case 12: detikNow = "12"; break;
                case 13: detikNow = "13"; break;
                case 14: detikNow = "14"; break;
                case 15: detikNow = "15"; break;
                case 16: detikNow = "16"; break;
                case 17: detikNow = "17"; break;
                case 18: detikNow = "18"; break;
                case 19: detikNow = "19"; break;
                case 20: detikNow = "20"; break;
                case 21: detikNow = "21"; break;
                case 22: detikNow = "22"; break;
                case 23: detikNow = "23"; break;
                case 24: detikNow = "24"; break;
                case 25: detikNow = "25"; break;
                case 26: detikNow = "26"; break;
                case 27: detikNow = "27"; break;
                case 28: detikNow = "28"; break;
                case 29: detikNow = "29"; break;
                case 30: detikNow = "30"; break;
                case 31: detikNow = "31"; break;
                case 32: detikNow = "32"; break;
                case 33: detikNow = "33"; break;
                case 34: detikNow = "34"; break;
                case 35: detikNow = "35"; break;
                case 36: detikNow = "36"; break;
                case 37: detikNow = "37"; break;
                case 38: detikNow = "38"; break;
                case 39: detikNow = "39"; break;
                case 40: detikNow = "40"; break;
                case 41: detikNow = "41"; break;
                case 42: detikNow = "42"; break;
                case 43: detikNow = "43"; break;
                case 44: detikNow = "44"; break;
                case 45: detikNow = "45"; break;
                case 46: detikNow = "46"; break;
                case 47: detikNow = "47"; break;
                case 48: detikNow = "48"; break;
                case 49: detikNow = "49"; break;
                case 50: detikNow = "50"; break;
                case 51: detikNow = "51"; break;
                case 52: detikNow = "52"; break;
                case 53: detikNow = "53"; break;
                case 54: detikNow = "54"; break;
                case 55: detikNow = "55"; break;
                case 56: detikNow = "56"; break;
                case 57: detikNow = "57"; break;
                case 58: detikNow = "58"; break;
                case 59: detikNow = "59"; break;
            } 

var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu =  "Jam : " + jamNow + " " + menitNow + " " + detikNow;
var tampilHari = "" + jams + " Hari";

console.log(color(tampilTanggal, "pink"));
console.log(color(tampilWaktu, "pink"));
console.log(color(tampilHari, "pink"));

CFonts.say('Lightweight\nWhatsApp Aine Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`${package.name} By ${package.author.name || package.author}`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`${package.name}`, {
  font: 'simple3d',
  align: 'center',
  gradient: ['red', 'magenta']
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
/*  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })*/
  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.process.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', (_, code) => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')
