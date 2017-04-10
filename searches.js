const searches = {
  amazon: { name: 'Amazon', url: 'https://www.amazon.com/s?url=search-alias=aps&field-keywords='},
  duck: { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q='},
  giphy: { name: 'Giphy', url: 'https://giphy.com/search/'},
  gh: { name: 'GitHub', url: 'https://github.com/search?utf8=%E2%9C%93&q='},
  google: { name: 'Google', url: 'https://www.google.com/search?q='},
  images: { name: 'Google Images', url: 'https://www.google.com/search?tbm=isch&q='},
  maps: { name: 'Google Maps', url: 'https://www.google.com/maps?q='},
  mdn: { name: 'Mozilla Developer Network', url: 'https://mdn.io/'},
  npm: { name: 'NPM', url: 'https://www.npmjs.com/search?q='},
  packagist: { name: "Packagist", url: 'https://packagist.org/search/?q='},
  translate: { name: 'Google Translate', url: 'https://translate.google.com/?text='},
  twitter: { name: 'Twitter', url: 'https://twitter.com/search?q='},
  stack: { name: 'Stack Overflow', url: 'https://stackoverflow.com/search?q='},
  ud: { name: 'Urban Dictionary', url: 'https://www.urbandictionary.com/define.php?term='},
  wiki: { name: 'Wikipedia', url: 'https://wikipedia.org/wiki/Special:Search/'},
  wolf: { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/input/?i='},
  youtube: { name: 'YouTube', url: 'https://www.youtube.com/results?search_query='},
  thing: { name: 'Thingiverse', url: 'http://www.thingiverse.com/search?q='},
}

module.exports = searches
