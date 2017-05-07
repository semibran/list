module.exports = { append, prepend, insert, remove, splice, locate, contains, slice, clone, map, filter, find }

function append(array, value) {
	array[array.length] = value
}

function prepend(array, value) {
	insert(array, value, 0)
}

function insert(array, value, index) {
	if (index <= array.length) {
		for (var i = array.length; i > index; i--) {
			array[i] = array[i - 1]
		}
		array[index] = value
	}
}

function remove(array, value) {
	var index = locate(array, value)
	if (index !== -1) {
		splice(array, index)
		return true
	} else {
		return false
	}
}

function splice(array, index) {
	if (index >= 0 && index < array.length) {
		for (var max = array.length - 1; index < max; index++) {
			array[index] = array[index + 1]
		}
		array.length--
		return true
	} else {
		return false
	}
}

function locate(array, value) {
	for (var i = 0, length = array.length; i < length; i++) {
		if (array[i] === value) {
			return i
		}
	}
	return -1
}

function contains(array, value) {
	return locate(array, value) !== -1
}

function slice(array, begin, end) {
	var result = new Array(begin - end)
	for (var i = begin; i < end; i++) {
		result[i] = array[i]
	}
	return result
}

function clone(array) {
	return slice(array, 0, array.length)
}

function map(array, callback) {
	var length = array.length
	var result = new Array(length)
	for (var i = 0; i < length; i++) {
		result[i] = callback(array[i], i)
	}
	return result
}

function filter(array, callback) {
	var result = []
	for (var i = 0, length = array.length; i < length; i++) {
		var value = array[i]
		if (callback(value, index)) {
			append(result, value)
		}
	}
	return result
}

function find(array, callback) {
	for (var i = 0, length = array.length; i < length; i++) {
		var value = array[i]
		if (callback(value, i)) {
			return value
		}
	}
}
