console = require ('console');

module.exports.function = function getPattern (fromLang, toLang, $vivContext) {
  console.log('inside getPattern. args:', arguments);
  console.log('inside getPattern. utterance:', $vivContext.utterance);
  
  return {
    from: fromLang || "EN",
    to: toLang,
    utterance: $vivContext.utterance
  }
}