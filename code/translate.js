var console = require ('console');
var http = require('http');
const regex = /translate from (english|spanish) to (english|spanish|korean) (.*)/i
// Wake word
const HI = "Hi ";

function xlateProxyAPI($vivContext) {
  const utt = $vivContext.utterance;
  const toXlate = (utt.indexOf(HI) > -1 && HI.length < utt.length) ? utt.substring(utt.indexOf(HI) + HI.length) : utt;
  var result = http.getUrl('https://xlate.herokuapp.com/xlate', {format: 'text', query:{toxlate: toXlate, format:'json', api:'naver'}});
  text = JSON.parse(result).translation;
  return text;
}

function naverDirectAPI($vivContext) {
  const utt = $vivContext.utterance;
  const toXlate = (utt.indexOf(HI) > -1 && HI.length < utt.length) ? utt.substring(utt.indexOf(HI) + HI.length) : utt;
  var options = {
    headers: {'X-Naver-Client-Id': 'pdrAJgv_e215VWgXVRyN', 'X-Naver-Client-Secret': 'WnyHdHQ307'}, 
    passAsJson: true,
    format: 'json'
  };
  console.log('utterance', utt)
  var result = http.postUrl('https://openapi.naver.com/v1/language/translate', {source: 'en', target: 'ko', text:toXlate}, options);
  console.log('result', result);
  return result.message.result.translatedText;
}

module.exports.function = function translate ($vivContext) {
  var text = naverDirectAPI($vivContext);
  return {
    text: text || "o_o ?"
    /* Future feature: add audio translation */
    /* audioUrl: "" */
  }
}
