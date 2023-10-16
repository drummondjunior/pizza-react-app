import { useState, useEffect, useCallback, useRef } from "react"

/**
 * Custom hook to manage the state of the currently opened food item.
 * 
 * @param {Object} locale - The current locale object containing translations and other locale-specific data.
 * @returns {Object} - An object containing the currently opened food item and a function to set it.
 */
export function useOpenFood(locale) {
  const [openFood, setOpenFood] = useState()
  const prevOpenFoodRef = useRef()

  /**
   * Get the food item by its ID.
   * 
   * @param {number} id - The ID of the food item to retrieve.
   * @returns {Object} - The food item with the given ID.
   */
  const getFoodById = useCallback((id) => {
    return locale?.menu?.foodItems.find(food => food.id === id)
  }, [locale])

  useEffect(() => {
    prevOpenFoodRef.current = openFood
  }, [openFood])

  useEffect(() => {
    const prevOpenFood = prevOpenFoodRef.current
    if (openFood && (!prevOpenFood || openFood.id !== prevOpenFood.id)) {
      const updatedFood = getFoodById(openFood.id)
      if (updatedFood) {
        // Mantenha os toppings originais, mas atualize outras propriedades
        setOpenFood({
          ...updatedFood,
          toppings: openFood.toppings
        })
      }
    }
  }, [locale, getFoodById, openFood]);

  return {
    openFood,
    setOpenFood
  }
}
