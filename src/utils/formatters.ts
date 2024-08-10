export function formatUrl(url: string) {
  return url.replace('/', '')
}

export function imageValidation(game: any) {
  if (game.attributes.cover.data) {
    return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game.attributes.cover.data?.attributes.url)}`
  } else {
    return `${process.env.NEXT_PUBLIC_API_URL}/${formatUrl(game.attributes.gallery?.data[0]?.attributes.url)}`
  }
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(price)
}

export const uniqBy = (arr, predicate) => {
  const cb = typeof predicate === 'function' ? predicate : (o) => o[predicate]

  return [
    ...arr
      .reduce((map, item) => {
        const key = item === null || item === undefined ? item : cb(item)

        map.has(key) || map.set(key, item)

        return map
      }, new Map())
      .values()
  ]
}
