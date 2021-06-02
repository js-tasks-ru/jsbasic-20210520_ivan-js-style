function camelize(str) {
  if (str) {
    //1. Разделяем строку
    let splitStr = str.split('-')
    //2. Возвращаем дефис к слову, чтобы потом с ним работать
    for (let i in splitStr) {
      if (splitStr[i] === '') splitStr[i] = '-'
    }
    //3. Делаем первые буквы заглавными
    let upperCaseStr = splitStr.map(item => item[0].toUpperCase() + item.substring(1))
    //4. Собираем всё обратно
    let almostStr = upperCaseStr.join('')
    let completeStr = almostStr[0].toLowerCase() + almostStr.substring(1);
    if (completeStr[0] === '-') return completeStr.substring(1)
    else return completeStr
  } else {
    return str
  }
}


