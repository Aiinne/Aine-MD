/* 
Module({
  pattern: 'textmaker ?(.*)',
  fromMe: auto,
*/
const {Module} = require('../main')
const {skbuffer} = require('raganork-bot');
const axios = require('axios');
const {MODE} = require('../config');
let auto = MODE == 'public' ? false : true
const _0xfa669e=_0x46fb;(function(_0x137b52,_0x58d7bf){const _0x4df657=_0x46fb,_0x33364a=_0x137b52();while(!![]){try{const _0x6d1a39=parseInt(_0x4df657(0x1ae))/0x1+parseInt(_0x4df657(0x1bf))/0x2*(parseInt(_0x4df657(0x1b2))/0x3)+-parseInt(_0x4df657(0x1a1))/0x4+parseInt(_0x4df657(0x1bb))/0x5*(parseInt(_0x4df657(0x1b7))/0x6)+parseInt(_0x4df657(0x19e))/0x7*(-parseInt(_0x4df657(0x1c3))/0x8)+parseInt(_0x4df657(0x1b3))/0x9*(-parseInt(_0x4df657(0x1a8))/0xa)+parseInt(_0x4df657(0x1be))/0xb*(parseInt(_0x4df657(0x1a5))/0xc);if(_0x6d1a39===_0x58d7bf)break;else _0x33364a['push'](_0x33364a['shift']());}catch(_0x16a051){_0x33364a['push'](_0x33364a['shift']());}}}(_0x1c17,0xcde34));const _0x5bf5e0=_0x7910;function _0x168b(){const _0x542e02=_0x46fb,_0x32fb54=['225'+_0x542e02(0x1c7)+_0x542e02(0x1b6)+_0x542e02(0x1c1)+'i',_0x542e02(0x1ce),_0x542e02(0x1a9),_0x542e02(0x1d6),_0x542e02(0x1c2)+_0x542e02(0x1b8)+_0x542e02(0x1ad)+_0x542e02(0x1a4),'404'+_0x542e02(0x1d1)+_0x542e02(0x1a2)+'VvN',_0x542e02(0x1c5),_0x542e02(0x19f),_0x542e02(0x1a7),_0x542e02(0x1b1),_0x542e02(0x1c0)+_0x542e02(0x1c8)+'W',_0x542e02(0x1d5),_0x542e02(0x1a3),_0x542e02(0x1b4),_0x542e02(0x1cf),'//r',_0x542e02(0x1ba),_0x542e02(0x1a6),'971'+_0x542e02(0x19d)+_0x542e02(0x1bd)+_0x542e02(0x1cc),'263'+_0x542e02(0x1ac)+_0x542e02(0x1c4)+_0x542e02(0x1b5)+'N','etw',_0x542e02(0x1b9),_0x542e02(0x1af)+_0x542e02(0x1b0)+'M',_0x542e02(0x1cd)+_0x542e02(0x1d3)+_0x542e02(0x1d2)+'pYN'+'D',_0x542e02(0x1ab)+'LiJ'+'Ns',_0x542e02(0x1bc)+'388'+_0x542e02(0x1ca)+_0x542e02(0x1a0)];return _0x168b=function(){return _0x32fb54;},_0x168b();}function _0x7910(_0x2d5b4a,_0x229f2b){const _0x4b0ff6=_0x168b();return _0x7910=function(_0x10a236,_0x400bfb){_0x10a236=_0x10a236-0x1bc;let _0x16d5fe=_0x4b0ff6[_0x10a236];return _0x16d5fe;},_0x7910(_0x2d5b4a,_0x229f2b);}(function(_0x57d730,_0x55571b){const _0x51d0cb=_0x46fb,_0x409350=_0x7910,_0x580087=_0x57d730();while(!![]){try{const _0x3610cb=parseInt(_0x409350(0x1c8))/0x1+-parseInt(_0x409350(0x1c9))/0x2+-parseInt(_0x409350(0x1bc))/0x3*(-parseInt(_0x409350(0x1c0))/0x4)+-parseInt(_0x409350(0x1c2))/0x5*(parseInt(_0x409350(0x1c3))/0x6)+parseInt(_0x409350(0x1c4))/0x7+-parseInt(_0x409350(0x1c1))/0x8*(parseInt(_0x409350(0x1ce))/0x9)+-parseInt(_0x409350(0x1bd))/0xa;if(_0x3610cb===_0x55571b)break;else _0x580087[_0x51d0cb(0x1c9)+'h'](_0x580087[_0x51d0cb(0x1d4)+'ft']());}catch(_0x4c66ed){_0x580087[_0x51d0cb(0x1c9)+'h'](_0x580087[_0x51d0cb(0x1d4)+'ft']());}}}(_0x168b,0x2824f));function _0x46fb(_0x167828,_0x87c0b5){const _0x1c17d5=_0x1c17();return _0x46fb=function(_0x46fb63,_0x21eb61){_0x46fb63=_0x46fb63-0x19d;let _0x22536e=_0x1c17d5[_0x46fb63];return _0x22536e;},_0x46fb(_0x167828,_0x87c0b5);}let base=_0x5bf5e0(0x1cc)+_0x5bf5e0(0x1cf)+_0x5bf5e0(0x1d3)+_0x5bf5e0(0x1d4)+_0xfa669e(0x1d0)+_0x5bf5e0(0x1cb)+_0x5bf5e0(0x1be)+_0x5bf5e0(0x1bf)+_0xfa669e(0x1aa)+_0x5bf5e0(0x1ca)+_0x5bf5e0(0x1c7)+_0xfa669e(0x1cb)+_0x5bf5e0(0x1c6)+_0xfa669e(0x1c6)+_0x5bf5e0(0x1cd)+_0x5bf5e0(0x1d5)+_0x5bf5e0(0x1d1)+_0x5bf5e0(0x1c5)+_0x5bf5e0(0x1d2)+_0x5bf5e0(0x1d0)+'{}';function _0x1c17(){const _0x1532e4=['203','XYS','22THSRdr','2648ZBZDFa','9AX','SJz','223','22928SgpAnS','0WC','rce','/te','915','MVZ','pus','Jan','pp/','BuZ','137','={}','&te','nor','874','6iD','509','shi','ps:','l.a','070','1253sgjypb','k-n','yOm','2478180oFSkVS','pgb','xt=','zBk','4902684uFHbbo','ro?','htt','10990FbsMLV','api','.ve','10E','441','mjD','637767YWsBNx','4LW','GXt','xtp','1422BLMiuP','4149GWJSdq','url','Jat','2YM','2814HvqBDp','566','ork','aga','4265kcccJP'];_0x1c17=function(){return _0x1532e4;};return _0x1c17();}
//================================================
//              IMAGE SENDER SAMPLE 👇
// ===============================================
Module({
  pattern: 'title ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/3d-business-sign-text-effect-1078.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image')  
});

Module({
  pattern: 'glowsliced ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'whitegold ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image')  
});

Module({
  pattern: 'batman ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/make-a-batman-logo-online-free-1066.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image')  
});
Module({
  pattern: 'greenhorror ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'glitch ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'minion ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/minion-text-effect-3d-online-978.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'matrix ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/matrix-style-text-effect-online-884.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'road ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/road-warning-text-effect-878.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'erodedmetal ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/eroded-metal-text-effect-834.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'carbon ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/carbon-text-effect-833.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'joker ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-logo-joker-online-934.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});

Module({
  pattern: 'orange ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'stone ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'retro ?(.*)',
  fromMe: auto,
  desc: 'Textmaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'sliced ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '2glitch ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'sparkle ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/firework-sparkle-text-effect-930.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'neon ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-neon-light-on-brick-wall-online-1062.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'thunder ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/online-thunder-text-effect-generator-1031.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'bokeh ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/bokeh-text-effect-876.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'devil ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'blackpink ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '2retro ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/80-s-retro-neon-text-effect-online-979.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'summer ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-summer-text-effect-with-a-palm-tree-1083.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'demon ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'lava ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'paper ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-layered-text-effects-online-free-1032.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'space ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-space-text-effects-online-free-1042.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '8bit ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'camerica ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'pencil ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-sketch-text-effect-online-1044.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'foggy ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/write-text-on-foggy-window-online-free-1015.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'graffiti ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '2graffiti ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '3graffiti ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'phub ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: 'marvel ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
Module({
  pattern: '2marvel ?(.*)',
  fromMe: auto,
  desc: 'TextMaker',
  use: 'textmaker',
}, async (m,t) => {
if (!encodeURIComponent(t[1])) return await m.sendReply("*Need text*")
let api_url = base.format("https://textpro.me/create-logo-style-marvel-studios-online-971.html",encodeURIComponent(t[1]))
await m.sendMessage("_Please wait..._")
let result_url = (await axios(api_url)).data
if (typeof result_url === "number") return await m.sendReply("*Need "+result_url+" text!*\n*Ex: Text1,Text2*")
await m.sendReply({url: result_url},'image') 
});
