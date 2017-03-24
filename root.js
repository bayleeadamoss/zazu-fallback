const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.length > 1
    },
    search: (query, env = {}) => {
      const rootSearches = env.rootSearches || []
      const prefixSearches = env.prefixSearches || {}
      const searchKeys = [...Object.keys(searches), ...Object.keys(prefixSearches)]

      const possiblePrefix = query.split(' ')[0]
      if (searchKeys.indexOf(possiblePrefix) !== -1) return Promise.resolve([])

      return Promise.resolve(
        rootSearches.filter((prefix) => {
          return searches[prefix] || prefixSearches[prefix]
        }).map((prefix) => {
          const search = searches[prefix] || prefixSearches[prefix]
          return {
            icon: search.icon || path.join('assets', prefix + '.png'),
            title: 'Search ' + search.name + ' for ' + query,
            value: search.url + encodeURIComponent(query)
          }
        })
      )
    },
  }
}
