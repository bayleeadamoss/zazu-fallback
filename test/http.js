const describe = require('tape')

const http = require('../http')({})

describe('Http.respondsTo', (assert) => {
  assert.plan(3)

  assert.ok(http.respondsTo('http://blainesch.com/pry.js/'))
  assert.ok(http.respondsTo('https://github.com/blainesch'))
  assert.notOk(http.respondsTo('ftp://somehost/'))
})

describe('Http.search', (assert) => {
  assert.plan(2)

  return http.search('https://github.com').then((result) => {
    assert.equal(result.length, 1, 'Should have a single result')
    assert.equal(result[0].title, 'https://github.com')
  })
})
