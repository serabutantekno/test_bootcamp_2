const fs = require('fs')
const rawData = fs.readFileSync('data.json')
const data = JSON.parse(rawData)


/** #1 Find items in the Meeting Room */
console.log('#1 Find items in the Meeting Room', data.filter(item => item.placement.name === 'Meeting Room'))


/** #2 Find all electronic devices */
console.log('#2 Find all electronic devices', data.filter(item => item.type === 'electronic'))


/** #3 Find all furniture  */
console.log('#3 Find all furniture', data.filter(item => item.type === 'furniture'))


/** #4 Find all purchased items on 16 Januari 2020 */
console.log('#4 Find all purchased items on 16 Januari 2020', data.reduce((filtered, item) => {
  if (new Date(item.purchased_at * 1000).toISOString().slice(0, 10) === '2020-01-16') {
    filtered.push(item)
  }
  return filtered
}, []))


/** #5 Find all items with brown color */
console.log('#5 Find all items with brown color', data.filter(item => item.tags.includes('brown')))
