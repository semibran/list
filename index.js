exports.append = function (list, item) {
  list[list.length] = item
  return list
}

exports.insert = function (list, index, item) {
  var length = list.length
  if (index >= 0 && index < length) {
    for (var i = length; i > index; i--) {
      list[i] = list[i - 1]
    }
    list[index] = item
  }
  return list
}

exports.remove = function (list, index) {
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

exports.locate = function (list, item) {
  var length = list.length
  for (var i = 0; i < length; i++) {
    if (list[i] === item) {
      return i
    }
  }
}
