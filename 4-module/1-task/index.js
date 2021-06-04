function makeFriendsList(friends) {
  // ваш код...
  const ul = document.createElement('ul')

  ul.innerHTML = friends.map(item => `
      <li>${item.firstName} ${item.lastName}</li>
  `).join('')

  return ul
}

// function makeFriendsList(friends) {
//   let list = ''
//   for (let item of friends) {
//     list += `<li>${item.firstName} ${item.lastName}`
//   }
//   console.log(list)
//   document.body.innerHTML = `<ul>${list}</ul>`
//   return list
// }
