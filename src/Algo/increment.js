const increment = (input, int = 0) => {
  let length = input.length - 1

  if (input[length - int]) {
    input[length - int]++

    if (input[length - int] == 10) {
      input[length - int] = 0
      return increment(input, int + 1)
    }

  } else {
    input.unshift(1)

  }
  return input
}
console.log(increment([9, 9]))