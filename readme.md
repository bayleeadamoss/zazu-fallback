## Zazu Fallback

[![Build Status](https://travis-ci.org/tinytacoteam/zazu-fallback.svg?branch=master)](https://travis-ci.org/tinytacoteam/zazu-fallback)

Creates some great fallback / web search functionality for Zazu.

## Usage

### Prefixed Searches

If you want to search a specific place like [npm](https://www.npmjs.com/),
[DuckDuckGo](https://duckduckgo.com/) or [Wikipedia](https://www.wikipedia.org/)
you can type that prefix directly into zazu and off you go!

Available searches can be found below.

### Root Searches

For commonly searched sites you would rather avoid typing in a prefix, because
that's more typing! I'm glad we're on the same page. If you use one or more of
these search enginges frequently you can turn on root level searches. If you
tell us which sites you use often, we'll display the results even without the
prefix!

For example if you tell us `npm` and `gh` are searched frequently and you type
`pryjs` into zazu, we'll give you a link to search both of those websites!

### URL Pasting

If you have a URL in your clipboard, or want to type one out, feel free to paste
it into Zazu and we'll give you an inline link. This is great if your browser
isn't open yet.

## Installing

Add the package to your plugins array in `./zazurc.json`.

~~~ json
"tinytacoteam/zazu-fallback"
~~~

To setup your prefered searches add a variable called `rootSearches`:

~~~ json
{
  "name": "tinytacoteam/zazu-fallback",
  "variables": {
    "rootSearches": ["npm", "google", "amazon", "giphy", "gh"]
  }
}
~~~

## Searches

* `amazon`: [Amazon](https://www.amazon.com/)
* `duck`: [DuckDuckGo](https://duckduckgo.com/)
* `giphy`: [Giphy](https://giphy.com/)
* `gh`: [GitHub](https://github.com/)
* `google`: [Google](https://www.google.com/)
* `images`: [Google Images](https://www.google.com/)
* `maps`: [Google Maps](https://www.google.com/)
* `npm`: [NPM](https://www.npmjs.com/)
* `packagist`: [Packagist](https://packagist.org)
* `translate`: [Google Translate](https://translate.google.com/)
* `twitter`: [Twitter](https://twitter.com/)
* `stack`: [Stack Overflow](https://stackoverflow.com/)
* `ud`: [Urban Dictionary](https://www.urbandictionary.com/)
* `wiki`: [Wikipedia](https://wikipedia.org/)
* `wolf`: [Wolfram Alpha](https://www.wolframalpha.com/)
* `youtube`: [YouTube](https://www.youtube.com/)

## Screenshot

![screenshot](./assets/screenshot.png)

## Add Your Own Searches

You can add your own custom searches by editing the searches.js file located in `.zazu/plugins/tinytacoteam/zazu-fallback`.

For example, if you setup a custom search in Chrome for Google Cache, it would look like this:

`https://webcache.googleusercontent.com/search?q=cache:%s
` 
Remove the %s, and create your own entry:

` gcache: { name: 'Webpage Cache', url: 'https://webcache.googleusercontent.com/search?q=cache:'}
`
Make sure not to put a comma after the last search. It should look like this following the above examples:

```
  youtube: { name: 'YouTube', url: 'https://www.youtube.com/results?search_query='},
  gcache: { name: 'Webpage Cache', url: 'https://webcache.googleusercontent.com/search?q=cache:'}
}

module.exports = searches
```

To add an icon, place a 256x256 png in the `.zazu/plugins/tinytacoteam/zazu-fallback/assets` with the same name as your custom search. In this case it would be: `gcache.png`.

Next, add a line for your search in `.zazurc.json`:

```
    {
      "name": "tinytacoteam/zazu-fallback",
      "variables": {
        "rootSearches": [
          "npm",
          "google",
          "amazon",
          "giphy",
          "gh",
          "gcache"
        ]
      }
    }
```

Update the plugins AND reload config (so Zazu knows to use the search you just created).

Your custom search is ready. In this case you could launch Zazu, type "gcache arstechnica.com", and get the Google web cache for Ars Technica.

![screenshot from 2017-01-14 20-26-37](https://cloud.githubusercontent.com/assets/10121835/21959787/f9c25700-da97-11e6-871b-ee25d948282b.png)

If there is a stray }, ], or comma anywhere, you'll get errors and have to double-check your edits.


