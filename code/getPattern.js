module.exports.function = function getPattern (fromLang, toLang, $vivContext) {
  console.log('inside getPattern. args:', arguments);
  
  return {
    from: fromLang || "EN",
    to: toLang
  }
}