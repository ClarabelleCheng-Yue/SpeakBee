console = require ('console');
const regex = /translate from (english|spanish) to (english|spanish|korean) (.*)/i

module.exports.function = function translate (fromTo, $vivContext) {
    console.log('arguments: ', arguments);
  console.log('viv context utt: ', $vivContext.utterance);
  const utt = $vivContext.utterance;

  const parsed = regex.exec(utt);
  
  const toXlate = (parsed.length < 4) ? '' : parsed[3];
  return http.getUrl('https://xlate.herokuapp.com/xlate', {format: 'text', query:{toxlate: toXlate, format:'text'}});
}
