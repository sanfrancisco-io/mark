import { CURRENCIES } from '../constants/currencies'

export const getCurrency = (currencySign: string) => {
  return CURRENCIES[currencySign as keyof typeof CURRENCIES]
}
