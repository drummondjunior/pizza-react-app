import { useState, useEffect } from "react"
import { useTranslations } from "./useTranslations"

export function useToppings(defaultTopping) {
  let locale = useTranslations()

  let [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings(locale?.menu?.toppings)
  )

  useEffect(() => {
    // Atualiza os toppings sempre que o locale muda
    const updatedToppings = getDefaultToppings(locale?.menu?.toppings)

    // Atualiza os nomes mantendo o estado checked
    setToppings((prevToppings) => {
      return updatedToppings.map((updatedTopping, index) => {
        if (prevToppings[index]) {
          return {
            ...updatedTopping,
            checked: prevToppings[index].checked,
          }
        }
        return updatedTopping
      })
    })
  }, [locale])

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

function getDefaultToppings(toppings) {
  if (!toppings) {
    // Trate o caso em que não há dados retornados, por exemplo, exibindo uma mensagem de erro.
    return {}
  }
  // console.log('toppings', toppings)

  return toppings.map(topping => ({
    ...topping,
    checked: topping.defaultChecked || false
  }))
}