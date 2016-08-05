const describe = require('tape')
const prefix = require('../prefix')

const plugin = prefix({cwd: process.cwd()})

describe('Prefix.respondsTo', (assert) => {
  assert.plan(3)

  assert.ok(plugin.respondsTo('amazon dog food'))
  assert.ok(plugin.respondsTo('npm pryjs'))
  assert.notOk(plugin.respondsTo('mootools tween'))
})

describe('Prefix.search', (assert) => {
  assert.plan(3)

  return plugin.search('gh reflog-review').then((result) => {
    assert.equal(result.length, 1, 'Should have a single result')
    assert.equal(result[0].title, 'Search GitHub for reflog-review')
    assert.ok(result[0].value.indexOf('reflog-review') !== -1, 'Should contain `reflog-review` in url')
  })
})
