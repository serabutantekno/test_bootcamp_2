function leapYear(year) {
  try {
    if (typeof year !== 'number') {
      throw new Error('data type should be number')
    }
    if (year % 100 === 0) {
      return year % 400 === 0
    } else {
      return year % 4 === 0
    }
  } catch (error) {
    console.log(error)
  }
}


function leapYearsBetween(yearA, yearB) {
  try {
    if (typeof yearA !== 'number' || typeof yearB !== 'number') {
      throw new Error('data type of arguments given should be number')
    }
    const leapYears = []
    for (let currentYear = yearA; currentYear <= yearB; currentYear++) {
      if (leapYear(currentYear)) {
        leapYears.push(currentYear)
      }
    }
    return leapYears
  } catch (error) {
    console.log(error)
  }
}


console.log(leapYearsBetween(1900, 2020))
