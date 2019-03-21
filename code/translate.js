var console = require ('console');
var http = require('http');
const regex = /translate from (english|spanish) to (english|spanish|korean) (.*)/i
const HEY = "hey ";

module.exports.function = function translate ($vivContext) {
  console.log('arguments: ', arguments);
  console.log('viv context utt: ', $vivContext.utterance);
  const utt = $vivContext.utterance;
  // const parsed = regex.exec(utt);
  const toXlate = utt.substring(utt.indexOf(HEY) > -1 ? utt.indexOf(HEY) + HEY.length : 0); // (parsed.length < 4) ? '' : parsed[3];
  console.log('xlate: ', toXlate);
  const text = http.getUrl('https://xlate.herokuapp.com/xlate', {format: 'text', query:{toxlate: toXlate, format:'text'}});
  console.log('text: ', text);
  return {
    text: text,
    audioUrl: "testing testing 1 2 3"
  }
}
