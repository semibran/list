module.exports = function insert(list, index, item) {
  var length = list.length
  if (index >= 0 && index < length) {
    for (var i = length; i > index; i--) {
      list[i] = list[i - 1]
    }
    list[index] = item
  }
  return list
}
