const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.length > 1
    },
    search: (query, env = {}) => {
      const rootSearches = env.rootSearches || []

      const possiblePrefix = query.split(' ')[0]
      if (searches[possiblePrefix]) return Promise.resolve([])

      return Promise.resolve(rootSearches.filter((prefix) => {
        return searches[prefix]
      }).map((prefix) => {
        return {
          icon: path.join('assets', prefix + '.png'),
          title: 'Search ' + searches[prefix].name + ' for ' + query,
          value: searches[prefix].url + encodeURIComponent(query)
        }
      }))
    },
  }
}
