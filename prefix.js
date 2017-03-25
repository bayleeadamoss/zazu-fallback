const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return {
    respondsTo: (query, env = {}) => {
      const prefixSearches = env.prefixSearches || {}
      const searchKeys = [...Object.keys(searches), ...Object.keys(prefixSearches)]

      return searchKeys.find((prefix) => {
        return query.indexOf(prefix + ' ') === 0
      })
    },
    search: (query, env = {}) => {
      const prefixSearches = env.prefixSearches || {}

      const queryBits = query.split(' ')
      const prefix = queryBits[0]
      const term = queryBits.slice(1).join(' ')

      const search = searches[prefix] || prefixSearches[prefix]

      return Promise.resolve(
        [
          {
            icon: search.icon || path.join('assets', prefix + '.png'),
            title: 'Search ' + search.name + ' for ' + term,
            value: search.url + encodeURIComponent(term)
          }
        ]
      )
    },
  }
}
