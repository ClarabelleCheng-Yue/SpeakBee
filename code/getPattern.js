module.exports.function = function getPattern (fromLang, toLang) {
  return {
    from: fromLang || "EN",
    to: toLang
  }
}