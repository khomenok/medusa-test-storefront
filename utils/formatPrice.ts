import {Product} from "@medusajs/medusa";

export const getPriceDomain = (product: Product): [number, number] => {
  const prices = product.variants.map(variant => variant.prices.map(price => price.amount / 100)).flat()
  const min = Math.min(...prices)
  const max = Math.max(...prices)
  return [min, max]
}

export const CURRENCY_SIGNS: Record<string, string | undefined> = {
  'eur': 'Є',
  'usd': '$',
  'rub': '₽'
}

// todo: for now, frontend supports only one currency
export const getCurrency = (product: Product) => {
  return product.variants[0].prices[0].currency_code
}

export const formatPrice = (priceDomain: [number, number], currency: string) => {
  const currencyString = CURRENCY_SIGNS[currency] || currency.toUpperCase()
  const priceString = priceDomain[0] === priceDomain[1]
    ? priceDomain[0]
    : `${priceDomain[0]} - ${priceDomain[1]}`

  return `${currencyString} ${priceString}`
}
