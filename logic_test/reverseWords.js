function reverseWords(words) {
  try {
    if (typeof words !== 'string') {
      throw new Error('argument type must be a string')
    }
    const arrayOfWords = words.split(' ')
    const results = []
    arrayOfWords.forEach((value, index) => {
      const lettersOfCurrentWord = value.split('').reverse()
      if (lettersOfCurrentWord.length > 1 && arrayOfWords[index].charAt(0) === arrayOfWords[index].charAt(0).toUpperCase()) {
        lettersOfCurrentWord[0] = lettersOfCurrentWord[0].toUpperCase()
        lettersOfCurrentWord[lettersOfCurrentWord.length - 1] = lettersOfCurrentWord[lettersOfCurrentWord.length - 1].toLowerCase()
      }
      results.push(lettersOfCurrentWord.join(''))
    })
    return results.join(' ')
  } catch (error) {
    console.error(error)
  }
}


/** Result */
console.log(reverseWords('I am A Great human'))
