function factorial(n) {
  let result = 1
  if (n === 0 || n === 1) {
    return result
  } else {
    for (let i = 1; i <= n; i++) {
      result = result * i
    }
    return result
  }
}

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
