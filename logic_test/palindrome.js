function palindrome(word) {
  try {
    if (typeof word === 'string') {
      const reversedWord = word.toLowerCase().split('').reverse().join('')
      if (reversedWord === word.toLowerCase()) {
        return true
      } else {
        return false
      }
    } else {
      return new Error('data type should be a string')
    }
  } catch (error) {
    console.log(error)
  }
}


/** Results */
console.log(palindrome('Kasur ini rusak'))
console.log(palindrome('Ibu Ratna antar ubi'))
