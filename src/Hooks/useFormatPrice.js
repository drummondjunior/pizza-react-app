import { useTranslation } from 'react-i18next'

export function useFormatPrice() {
  let { i18n } = useTranslation()
  let selectedLanguage = i18n.language

  const formatPrice = (price) => {
    let { locale, currency } = i18n.store.data[selectedLanguage].config
    return price.toLocaleString(locale, {
      style: "currency",
      currency: currency
    })
  }

  return formatPrice
}
