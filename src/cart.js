// Implement cartTotal here. See README.md for the specification.
export function cartTotal(items, options) {
  if (items.length === 0) return 0

  let subtotal = 0
  for (const { price, qty } of items) {
    if (price < 0) throw new RangeError(`price must not be negative: ${price}`)
    if (!Number.isInteger(qty) || qty < 1) {
      throw new RangeError(`qty must be a positive integer: ${qty}`)
    }
    subtotal += price * qty
  }

  const vat = subtotal * options.vatRate
  const shipping = subtotal >= options.freeShipFrom ? 0 : options.shipFee
  return Math.round(subtotal + vat + shipping)
}
