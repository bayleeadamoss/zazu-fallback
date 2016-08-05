const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  const { cwd } = pluginContext

  return {
    respondsTo: (query) => {
      return true
    },
    search: (query, env = {}) => {
      const rootSearches = env.rootSearches || []

      const promises = rootSearches.map((prefix) => {
        if (!searches[prefix]) return false
        return new Promise((resolve, reject) => {
          resolve({
            icon: path.join(cwd, 'assets', prefix + '.png'),
            title: 'Search ' + searches[prefix].name + ' for ' + query,
            value: searches[prefix].url + encodeURIComponent(query)
          })
        })
      })

      const compactedPromises = promises.reduce((memo, item) => {
        if (item) memo.push(item)
          return memo
      }, [])

      return Promise.all(compactedPromises)
    },
  }
}
