function filterRange(arr, a, b) {
  let filtered = arr.filter(item => item >=a && item <= b)
  return filtered

  // let filtered = []

  // for (let item of arr) {
  //     if (item >= a && item <=b) {
  //         filtered.push(item)
  //     }
  // }
  // return filtered
}
