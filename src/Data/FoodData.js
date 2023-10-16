import { useTranslations } from "../Hooks/useTranslations"

export function Foods() {

  const locale = useTranslations()
  let foodItems = locale?.menu?.foodItems

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