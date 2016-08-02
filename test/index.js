const describe = require('tape')

describe('Sorts app name higher', function (assert) {
  assert.plan(1)
  assert.deepEqual(['One'], ['Terminal', 'Docker Quickstart Terminal'])
})
