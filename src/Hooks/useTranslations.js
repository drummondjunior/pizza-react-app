import { useTranslation } from 'react-i18next'
import { flags } from '../I18n/internationalization'

export function useTranslations() {
  let { i18n } = useTranslation()
  return flags.translations[i18n.language]
}