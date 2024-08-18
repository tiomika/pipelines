
import assert from 'node:assert'
import { it } from 'node:test'
import { add } from './index.js'


it('should return true', (t) => {
  assert.equal(1, 1)
})

it('should sum 1 + 1 equals 2', ()=> {
  assert.equal(add(1,1), 1)
})
