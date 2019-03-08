module.exports.function = function translate (fromTo, $vivContext) {
  console.log('fromto: ', fromTo);
  console.log('viv context utt: ', $vivContext.utterance);
  console.log('arguments: ', arguments);
  const utt = $vivContext.utterance;
  console.log('utt: ', utt);
  // TODO: add translator API here
  
  return "hi"
}
