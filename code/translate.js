var console = require ('console');
var http = require('http');
const regex = /translate from (english|spanish) to (english|spanish|korean) (.*)/i
// Wake word
const HI = "Hi ";

module.exports.function = function translate ($vivContext) {
  const utt = $vivContext.utterance;
  const toXlate = (utt.indexOf(HI) > -1 && HI.length < utt.length) ? utt.substring(utt.indexOf(HI) + HI.length) : utt;
  var result = http.getUrl('https://xlate.herokuapp.com/xlate', {format: 'text', query:{toxlate: toXlate, format:'json', api:'naver'}});
  text = JSON.parse(result).translation;
  return {
    text: text || "o_o ?",
    imageUrls: ["/images/CoolBees.jpg"]
    /* Future feature: add audio translation */
    /* audioUrl: "" */
  }
}
