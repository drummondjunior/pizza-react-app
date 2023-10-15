import { useTranslation } from 'react-i18next'

export function Foods() {

  let { i18n } = useTranslation()
  let selectedLanguage = i18n.language // Idioma selecionado
  let foodItems = i18n.store.data[selectedLanguage]?.menu?.foodItems

  if (!foodItems) {
    // Trate o caso em que não há dados retornados, por exemplo, exibindo uma mensagem de erro.
    return {}
  }

  const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
      res[food.section] = []
    }
    res[food.section].push(food)
    return res
  }, {})
  return foods

}