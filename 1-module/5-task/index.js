function truncate(str, maxlength) {
  let newString
  if (str.length > maxlength) {
    newString = `${str.slice(0, 19)}…`
    return newString
  } else {
    return str
  }
}
