const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return Object.keys(searches).find((prefix) => {
        return query.indexOf(prefix + ' ') === 0
      })
    },
    search: (query) => {
      const queryBits = query.split(' ')
      const prefix = queryBits[0]
      const term = queryBits.slice(1).join(' ')

      const encodedQuery = encodeURIComponent(query)
      return new Promise((resolve, reject) => {
        resolve([{
          id: prefix + encodedQuery,
          icon: path.join('assets', prefix + '.png'),
          title: 'Search ' + searches[prefix].name + ' for ' + term,
          value: searches[prefix].url + encodedQuery,
        }])
      })
    },
  }
}
