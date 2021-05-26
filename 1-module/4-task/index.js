function checkSpam(str) {
  let reg = /1XBET|XXX/i
  return reg.test(str.toUpperCase())
}

//либо более тривиальное, но тоже работает:
// function checkSpam(str) {
//   str = str.toUpperCase()
//
//   if (str.indexOf('XXX') !== -1 || str.indexOf('1XBET') !== -1) {
//     return true
//   } else {
//     return false
//   }
// }
