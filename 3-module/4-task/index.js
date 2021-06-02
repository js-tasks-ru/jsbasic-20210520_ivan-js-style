function showSalary(users, age) {
  let usersArray = []
  if (users) {
    for (let user of users) {
      if (user.age <= age) usersArray.push(`${user.name}, ${user.balance}`)
    }
    return usersArray.join('\n')
  }
}
