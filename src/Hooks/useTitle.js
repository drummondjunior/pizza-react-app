import { useEffect } from "react";
import { Translator } from '../I18n'

export function useTitle({ openFood, orders, locale }) {

  let oqueparacomer = Translator({ path: "oqueparacomer" })
  let itensnopedido = Translator({ path: "itensnopedido" })

  function getNameById(id, locale) {
    const foodItem = locale?.menu?.foodItems.find(item => item.id === id)
    return foodItem ? foodItem.name : null
  }

  useEffect(() => {
    if (openFood) {
      document.title = getNameById(openFood.foodId, locale);
    } else {
      document.title =
        orders.length === 0
        ? `${oqueparacomer}`
        : `${orders.length} ${itensnopedido}`
    }
  });
}
