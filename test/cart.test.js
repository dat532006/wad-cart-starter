import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('empty cart returns 0', () => {
  assert.equal(cartTotal([], { vatRate: 0.08 }), 0)
})

test('free shipping at the threshold', () => {
  const items = [{ name: 'Giày', price: 500000, qty: 1 }]
  assert.equal(cartTotal(items, options), 540000)
})

test('shipping charged below threshold', () => {
  const items = [{ name: 'Túi', price: 450000, qty: 1 }]
  assert.equal(cartTotal(items, options), 516000)
})

test('rounds to the whole đồng', () => {
  const items = [{ name: 'Bút', price: 12345, qty: 1 }]
  assert.equal(cartTotal(items, options), 43333)
})

test('negative price throws', () => {
  const items = [{ name: 'Lỗi', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('fractional qty throws', () => {
  const items = [{ name: 'Mũ', price: 100000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero qty throws', () => {
  const items = [{ name: 'Mũ', price: 100000, qty: 0 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('negative qty throws', () => {
  const items = [{ name: 'Mũ', price: 100000, qty: -1 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})
