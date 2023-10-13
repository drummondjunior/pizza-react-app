import { useState } from "react"
import { useTranslation } from "react-i18next"

export function useToppings(defaultTopping) {
  const { t, i18n } = useTranslation() // Use o hook useTranslation para obter o objeto t e i18n

  const [toppings, setToppings] = useState(
    getDefaultToppings(t, i18n)
    // defaultTopping || getDefaultToppings(t, i18n)
  )

  function checkTopping(index) {
    const newToppings = [...toppings]
    newToppings[index].checked = !newToppings[index].checked
    setToppings(newToppings)
  }

  return {
    checkTopping,
    toppings
  }
}

function getDefaultToppings(t, i18n) {

  const lang = i18n.resolvedLanguage // Obtenha o idioma atual escolhido
  const toppings = i18n.translator.resourceStore.data[lang]?.menu?.toppings

  if (!toppings) {
    // Trate o caso em que não há dados retornados, por exemplo, exibindo uma mensagem de erro.
    return {}
  }
  const toppingsList = Object.values(toppings);

  // console.log('asdf', t('config'))
  console.log('toppingsList', toppingsList)

  return toppingsList.map(name => ({
    name,
    checked: false
  }))
}
