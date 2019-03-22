var console = require ('console');
var http = require('http');
const regex = /translate from (english|spanish) to (english|spanish|korean) (.*)/i
const HI = "Hi ";

module.exports.function = function translate ($vivContext) {
  console.log('arguments: ', arguments);
  console.log('viv context utt: ', $vivContext.utterance);
  const utt = $vivContext.utterance;
  const toXlate = (utt.indexOf(HI) > -1 && HI.length < utt.length) ? utt.substring(utt.indexOf(HI) + HI.length) : utt;
  console.log('xlate: ', toXlate);
  var result = http.getUrl('https://xlate.herokuapp.com/xlate', {format: 'text', query:{toxlate: toXlate, format:'json', api:'naver'}});
  text = JSON.parse(result).translation;
  console.log('url:' + 'https://xlate.herokuapp.com/xlate?toxlate='+ toXlate + '&format=json&api=naver' );
  console.log('text: ', text);
  return {
    text: text || "o_o ?",
    audioUrl: "http://www.google.com"
  }
}
