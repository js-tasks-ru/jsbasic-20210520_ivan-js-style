function getMinMax(str) {
  let result = {}
  // 1. Принять строку и выделить все числа
  let arrayAll = str.split(',').join(' ').split(' ')
  // 2. Оставить только числа
  let arrayNums = arrayAll.filter(num => num == +num)
  // 3. Присваиваем min/max
  result.min = Math.min(...arrayNums)
  result.max = Math.max(...arrayNums)
  return result
}
