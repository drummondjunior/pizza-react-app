import { useState, useEffect, useCallback } from "react"
import { isEqual } from 'lodash'

/**
 * Custom hook to manage the state of the orders.
 * 
 * @param {Object} locale - The current locale object containing translations and other locale-specific data.
 * @returns {Object} - An object containing the orders and a function to set them.
 */
export function useOrders(locale) {
  const [orders, setOrders] = useState([])

  /**
   * Get the food item by its ID.
   * 
   * @param {number} id - The ID of the food item to retrieve.
   * @returns {Object} - The food item with the given ID.
   */
  const getFoodById = useCallback((id) => {
    return locale?.menu?.foodItems.find(food => food.id === id)
  }, [locale])

  /**
   * Get the topping by its ID.
   * 
   * @param {number} id - The ID of the topping to retrieve.
   * @returns {Object} - The topping with the given ID.
   */
  const getToppingById = useCallback((id) => {
    return locale?.menu?.toppings.find(topping => topping.id === id)
  }, [locale])

  useEffect(() => {
    const updatedOrders = orders.map(order => {
      const updatedFood = getFoodById(order.foodId)
      const updatedToppings = order.toppings.map(topping => {
        const newTopping = getToppingById(topping.id)
        return {
          ...newTopping,
          checked: topping.checked !== undefined ? topping.checked : newTopping.defaultChecked
        }
      });
      return {
        ...order,
        food: updatedFood,
        toppings: updatedToppings
      }
    })

    // Só atualizamos o estado se os orders realmente mudaram
    if (!isEqual(orders, updatedOrders)) {
      setOrders(updatedOrders)
    }
  }, [locale, getFoodById, getToppingById, orders])

  return {
    orders,
    setOrders
  }
}
