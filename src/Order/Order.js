import React from "react"
import styled from "styled-components"
import { useTranslations } from '../Hooks/useTranslations'
import { Translator } from '../I18n'
import {
  DialogContent,
  DialogFooter,
  ConfirmButton
} from "../FoodDialog/FoodDialog"
import { useFormatPrice } from '../Hooks/useFormatPrice'
import { getPrice } from "../FoodDialog/FoodDialog"

import { database } from "../config/firebaseConfig"
import { ref, push, set } from 'firebase/database'

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 30%;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
    editable
      ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
      : `
    pointer-events: none; 
  `}
`

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 140px 20px 85px;
  justify-content: space-between;
`

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`

function getNameById(id, locale) {
  const foodItem = locale?.menu?.foodItems.find(item => item.id === id)
  return foodItem ? foodItem.name : null
}

function sendOrder(orders, { email, displayName }) {
  try {

    const ordersRef = ref(database, "orders")
    const newOrderRef = push(ordersRef)

    const newOrders = orders.map(order => {
      return Object.keys(order).reduce((acc, orderKey) => {
        if (!order[orderKey]) {
          // undefined value
          return acc
        }
        if (orderKey === "toppings") {
          return {
            ...acc,
            [orderKey]: order[orderKey]
              .filter(({ checked }) => checked)
              .map(({ name }) => name)
          }
        }
        return {
          ...acc,
          [orderKey]: order[orderKey]
        }
      }, {})
    })
    set(newOrderRef, {
      order: newOrders,
      email,
      displayName,
      createAt: Date.now(),
    })
  } catch (error) {
    console.error("Failed to send order:", error)
    // Handle error accordingly, maybe set some state to show in UI.
  }
}

export function Order({ orders, setOrders, setOpenFood, login, loggedIn, setOpenOrderDialog }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order)
  }, 0)

  let locale = useTranslations()

  const tax = subtotal * locale?.config?.tax
  const total = subtotal + tax

  const deleteItem = index => {
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  const formatPrice = useFormatPrice()

  return (
    <OrderStyled>
      { orders.length === 0 ? (
        <OrderContent> <Translator path="order.empty" /> </OrderContent>
      ) : (
        <OrderContent>
          { " " }
          <OrderContainer> <Translator path="order.yourorder" /> </OrderContainer>{ " " }
          { orders.map((order, index) => (
            <OrderContainer editable>
              <OrderItem
                onClick={ () => {
                  setOpenFood({ ...order, index })
                } }
              >
                <div>{ order.quantity }</div>
                <div>{ getNameById(order.foodId, locale) }</div>
                <div
                  style={ { cursor: "pointer" } }
                  onClick={ e => {
                    e.stopPropagation()
                    deleteItem(index)
                  } }
                >
                  🗑
                </div>
                <div>{ formatPrice(getPrice(order)) }</div>
              </OrderItem>
              <DetailItem>
                { order.toppings
                  .filter(t => t.checked)
                  .map(topping => topping.name)
                  .join(", ") }
              </DetailItem>
              { order.choice && <DetailItem>{ order.choice }</DetailItem> }
            </OrderContainer>
          )) }
          <OrderContainer>
            <OrderItem>
              <div />
              <div><Translator path="order.subtotal" /></div>
              <div>{ formatPrice(subtotal) }</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div><Translator path="order.imposto" /></div>
              <div>{ formatPrice(tax) }</div>
            </OrderItem>
            <OrderItem>
              <div />
              <div><Translator path="order.total" /></div>
              <div>{ formatPrice(total) }</div>
            </OrderItem>
          </OrderContainer>
        </OrderContent>
      ) }
      { orders.length > 0 && (
        <DialogFooter>
          <ConfirmButton
            onClick={ () => {
              if (loggedIn) {
                setOpenOrderDialog(true)
                sendOrder(orders, loggedIn)
              } else {
                login()
              }
            } }
          >
            Checkout
          </ConfirmButton>
        </DialogFooter>
      ) }
    </OrderStyled>
  )
}
