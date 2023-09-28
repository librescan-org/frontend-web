// @ts-ignore
import Coins from '~~/coins.json'
import { CoinType } from '~~/types/common'

export default defineEventHandler(async (event) => {
  const paramSymbol = event.context.params?.symbol.toLowerCase() ?? ''
  const selectedCoin = Coins.find((coin: CoinType) => coin.symbol === paramSymbol)
  if (!selectedCoin) {
    return false
  }

  const id = selectedCoin.id
  const price: any = await $fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + id + '&vs_currencies=usd')
  if (!price) {
    return false
  }
  const currentPriceUsd = price[id].usd

  return { usd: currentPriceUsd }
})
