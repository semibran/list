module.exports = function remove(list, index) {
  var length = list.length
  if (index >= 0 && index < length) {
    var item = list[index]
    for (var i = index; i < length - 1; i++) {
      list[i] = list[i + 1]
    }
    list.length--
    return item
  }
}
