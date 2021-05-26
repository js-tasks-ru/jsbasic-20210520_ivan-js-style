function ucFirst(str) {
  if (str.length > 0) {
    return str.charAt(0).toUpperCase() + str.split('').slice(1).join('')
  } else if (str === '') {
    return str
  }
}
