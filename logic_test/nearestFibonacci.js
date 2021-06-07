function nearestFibonacci() {
  const arrayOfArguments = Array.from(arguments)
  const total = arrayOfArguments.reduce((a, b) => a + b)

  let first = 0, second = 1, third = first + second

  while (third <= total) {
    first = second
    second = third
    third = first + second
  }

  let nearestFibonacci = (Math.abs(third - total) >= Math.abs(second - total)) ? second : third
  return nearestFibonacci - total
}


/** Result */
console.log(nearestFibonacci(15, 1, 3)) // --> 2 (Fibonacci number: 21, argument: 19)
console.log(nearestFibonacci(15)) // --> -2 (Fibonacci number: 13, argument: 15)
