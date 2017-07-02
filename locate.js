module.exports = function locate(list, item) {
  var length = list.length
  for (var i = 0; i < length; i++) {
    if (list[i] === item) {
      return i
    }
  }
}
