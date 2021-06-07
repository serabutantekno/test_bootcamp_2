function fizzBuzz(number) {
  try {
    if (typeof number !== 'number') throw new Error ('argument type must be number')

    const results = []
    for (let num = 1; num <= number; num++) {
      if (num % 3 === 0 && num % 5 === 0) results.push('FizzBuzz')
      else if (num % 3 === 0) results.push('Fizz')
      else if (num % 5 === 0) results.push('Buzz')
      else results.push(num)
    }

    return results
  } catch (error) {
    console.error(error)
  }
}


/** Result */
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
