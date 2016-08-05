const describe = require('tape')
const root = require('../root')

const plugin = root({ cwd: process.cwd() })

describe('Root.respondsTo', (assert) => {
  assert.plan(2)
  assert.notOk(plugin.respondsTo(''))
  assert.ok(plugin.respondsTo('he'))
})

describe('Root.search with two known root searches', (assert) => {
  assert.plan(5)

  return plugin.search('pryjs', { rootSearches: ['npm', 'gh'] }).then((results) => {
    assert.equal(results.length, 2, 'Should have two results')

    assert.ok(results[0].value.indexOf('npmjs.com') !== -1, 'Should be a npm link')
    assert.ok(results[0].value.indexOf('pryjs') !== -1, 'Should contain search term')
    assert.ok(results[1].value.indexOf('github.com') !== -1, 'Should be a github link')
    assert.ok(results[1].value.indexOf('pryjs') !== -1, 'Should contain search term')
  })
})

describe('Root.search does not respond when using a prefix', (assert) => {
  assert.plan(1)

  return plugin.search('npm pryjs', { rootSearches: ['npm', 'gh'] }).then((results) => {
    assert.equal(results.length, 0)
  })
})

describe('Root.search with no known searches', (assert) => {
  assert.plan(1)

  return plugin.search('pryjs', { rootSearches: [] }).then((results) => {
    assert.equal(results.length, 0)
  })
})

describe('Root.search with made up searches', (assert) => {
  assert.plan(1)

  return plugin.search('pryjs', { rootSearches: ['go'] }).then((results) => {
    assert.equal(results.length, 0)
  }).catch((err) => {
    console.log(err)
  })
})
