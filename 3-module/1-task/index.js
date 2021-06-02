function namify(users) {
  let usersNames = []
  for (let item of users) {
    usersNames.push(item.name)
  }
  return usersNames
}


// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// function namify(users) {
//   let usersNames = []
//   for (let item of users) {
//     usersNames.push(item.name)
//   }
//   return usersNames
// }
//
// let names = namify(users); // ['Вася', 'Петя', 'Маша']
//
// console.log(names);
