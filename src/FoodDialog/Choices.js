import React from "react"
import styled from "styled-components"
import { Translator } from '../I18n'
const CursorPointer = `cursor: pointer`

const RadioInput = styled.input`
  ${CursorPointer}
`

const Label = styled.label`
  ${CursorPointer}
`

export function Choices({ openFood, choiceRadio }) {
  return (
    <>
      <h3> <Translator path="choice.escolha" /> </h3>
      { openFood.choices.map((choice, index) => (
        <React.Fragment key={ index }>
          <RadioInput
            type="radio"
            id={ choice }
            name="choice"
            value={ choice }
            checked={ choiceRadio.value === choice }
            onChange={ choiceRadio.onChange }
          />
          <Label htmlFor={ choice }> { choice } </Label>
        </React.Fragment>
      )) }
    </>
  )
}
