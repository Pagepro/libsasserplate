module.exports = function (val, num) {
  var base = 26
  var characters = 'abcdefghijklmnopqrstuvwxyz'
  var character = num % base
  var result = characters[character]
  var remainder = Math.floor(num / base)
  if (remainder) {
    base = 38
    characters = characters + '0123456789-_'
    while (remainder) {
      character = remainder % base
      remainder = Math.floor(remainder / base)
      result = result + characters[character]
    }
  }
  return result
}
