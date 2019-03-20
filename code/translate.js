module.exports.function = function translate ($vivContext) { // fromTo,
    console.log('arguments: ', arguments);
  console.log('viv context utt: ', $vivContext.utterance);
  // TODO: add parser
  
  const utt = $vivContext.utterance;
  // TODO: add translator API here
  // get full utterance
  // extract substring to translate
  // pass substring to API
  // get translated text and audio
  // ask geoff how to play audio
  
  return {
    text: "어떻게 지네서요?",
    audio: ""
  }
}
