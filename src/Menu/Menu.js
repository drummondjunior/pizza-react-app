import React from "react"
import styled from "styled-components"
import { Foods } from "../Data/FoodData"
import { useFormatPrice } from '../Hooks/useFormatPrice';
import { Food, FoodGrid, FoodLabel } from "./FoodGrid"

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`

export function Menu({ setOpenFood }) {
  
  const formatPrice = useFormatPrice();

  return (
    <MenuStyled>
      { Object.entries(Foods()).map(([sectionName, foods]) => (
        <>
          <h1> { sectionName } </h1>
          <FoodGrid>
            { foods.map(food => (
              <Food
                key={ food.id }
                img={ food.img }
                onClick={ () => {
                  setOpenFood(food)
                } }
              >
                <FoodLabel>
                  <div>{ food.name }</div>
                  <div>{ formatPrice(food.price) }</div>
                </FoodLabel>
              </Food>
            )) }
          </FoodGrid>
        </>
      )) }
    </MenuStyled>
  )
}
