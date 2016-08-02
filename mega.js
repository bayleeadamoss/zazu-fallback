const searches = {
  amazon: 'https://www.amazon.com/s?url=search-alias=aps&field-keywords=',
  duck: 'https://duckduckgo.com/?q=',
  giphy: 'https://giphy.com/search/',
  gh: 'https://github.com/search?utf8=%E2%9C%93&q=',
  google: 'https://www.google.com/search?q=',
  images: 'https://www.google.com/search?tbm=isch&q=',
  lucky: 'https://www.google.com/search?btnI=I%27m+Feeling+Lucky&q=',
  maps: 'https://www.google.com/maps?q=',
  npm: 'https://www.npmjs.com/search?q=',
  translate: 'https://translate.google.com/?text=',
  twitter: 'https://twitter.com/search?q=',
  stack: 'https://stackoverflow.com/search?q=',
  wiki: 'https://wikipedia.org/wiki/Special:Search/',
  wolf: 'http://www.wolframalpha.com/input/?i='
  youtube: 'https://www.youtube.com/results?search_query=',
}

module.exports = (pluginContext) => {
  var self = {
    respondsTo: (query) => {
      return true
    },
    matchesUrl: (query) => {
      return query.match(/^https?:\/\//)
    },
    matchesPrefix: (query) => {
      return query.match(/\w+ ./) && searches[self.prefixSplit(query).sevice]
    },
    prefixSplit: (query) => {
      const split = query.split(/^(\w+) (.*)$/)
      return {
        service: split[1],
        query: encodeURIComponent(split[2])
      }
    },
    prefixUrl: (query) => {
      const info = self.prefixSplit(query)
      return searches[info.service] + info.query
    }
    search: (query, env = {}) => {
      // prefix query
      // https://google.com -> open in browser
      // query -> open in predetermines items
      const hasPrefix = false
      const isUrl = false
      return new Promise((resolve, reject) => {
        if (self.matchesPrefix(query)) {
        } else if(self.matchesUrl(query)) {
          resolve([
            icon: 'fa-internet-explorer',
            title: 'http://google.com',
            subtitle: 'Open the typed url',
            value: 'http://google.com',
          ])
        } else {
        }
      })
    },
  }
  return self
}
