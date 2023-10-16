import React, { useRef, useEffect, useCallback } from "react"
import styled from "styled-components"
import { FoodLabel } from "../Menu/FoodGrid"
import { pizzaRed } from "../Styles/colors"
import { Title } from "../Styles/title"
import { useFormatPrice } from '../Hooks/useFormatPrice'
import { QuantityInput } from "./QuantityInput"
import { useQuantity } from "../Hooks/useQuantity"
import { Toppings } from "./Toppings"
import { useToppings } from "../Hooks/useToppings"
import { useChoice } from "../Hooks/useChoice"
import { Choices } from "./Choices"
import { Translator } from '../I18n';

export const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 11;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 240px;
  cursor: pointer;
  background-color: ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export function getPrice(order) {
  return (
    order.quantity *
    (order.price +
      order.toppings.filter(t => t.checked).reduce((acc, topping) => acc + topping.price, 0))
  )
}

function hasToppings(food) {
  return food.type === 0;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders, locale }) {
  const quantity = useQuantity(openFood && openFood.quantity)
  const toppings = useToppings(openFood.toppings)
  const choiceRadio = useChoice(openFood.choice)
  const isEditing = openFood.index > -1

  const prevLocaleRef = useRef(locale);

  const getFoodById = useCallback((id) => {
    console.log('id:', id)
    return locale?.menu?.foodItems.find(food => food.id === id)
  }, [locale])

  useEffect(() => {
    const prevLocale = prevLocaleRef.current
    if (openFood && locale !== prevLocale) {
      const updatedOpenFood = getFoodById(openFood.id)
      if (updatedOpenFood) {
        setOpenFood({
          ...updatedOpenFood,
          toppings: openFood.toppings
        })
      }
    }
    // Atualize o ref após a verificação
    prevLocaleRef.current = locale
  }, [openFood, getFoodById, setOpenFood, locale]);

  useEffect(() => {
    prevLocaleRef.current = locale
  }, [locale]);

  // console.log('isEditing:', isEditing, 'locale:', locale, 'openFood:', openFood, 'toppings:', toppings)

  function close() {
    setOpenFood();
  }

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings.map(topping => ({
      id: topping.id,
      name: topping.name,
      price: topping.price,
      checked: topping.checked
    })),
    choice: choiceRadio.value
  };

  // console.log('order:', order)

  function editOrder() {
    const newOrders = [...orders];
    newOrders[openFood.index] = order;
    setOrders(newOrders);
    close();
  }

  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }

  const formatPrice = useFormatPrice();

  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName> {openFood.name} </DialogBannerName>
        </DialogBanner>
        <DialogContent>
          <QuantityInput quantity={quantity} />
          {hasToppings(openFood) && (
            <>
              <h3> <Translator path="foodDialog.complemento" /> </h3>
              <Toppings {...toppings} />
            </>
          )}
          {openFood.choices && (
            <Choices openFood={openFood} choiceRadio={choiceRadio} />
          )}
        </DialogContent>
        <DialogFooter>
          <ConfirmButton
            onClick={isEditing ? editOrder : addToOrder}
            disabled={openFood.choices && !choiceRadio.value}
          >
            { isEditing ? <Translator path="foodDialog.update" /> : <Translator path="foodDialog.add" /> }
            {formatPrice(getPrice(order))}
          </ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export function FoodDialog(props) {
  if (!props.openFood) return null
  return <FoodDialogContainer { ...props } />
}