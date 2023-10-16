import styled from "styled-components"
import React from "react"

const ToppingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`

const CheckboxLabel = styled.label`
  cursor: pointer;
`

export function Toppings({ toppings, checkTopping, language }) {
  return (
    <ToppingGrid
      language={ language }
    >
      { toppings.map((topping, i) => (
        <CheckboxLabel key={ topping.id }>
          <ToppingCheckbox
            key={ topping.id }
            type="checkbox"
            checked={ topping.checked }
            onChange={ () => {
              checkTopping(i)
            } }
          />
          { topping.name }
        </CheckboxLabel>
      )) }
    </ToppingGrid>
  )
}