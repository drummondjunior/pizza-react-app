import React from 'react'
import styled from "styled-components"

/**
 * @component
 * @description Componente que exibe uma bandeira com a capacidade de ser selecionada.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.key - O caminho da imagem da bandeira.
 * @param {boolean} props.selected - Indica se a bandeira está selecionada para efeitos visuais.
 * @param {boolean} props.showAll - Indica se todas as bandeiras devem ser exibidas.
 * @param {number} props.order - Ordem de exibição da bandeira.
 * @param {Function} props.onClick - Função a ser executada ao clicar na bandeira.
 *
 * @returns {JSX.Element} Retorna um elemento JSX que exibe a bandeira.
 */
const Img = styled.div`
  height: 30px;
  width: 30px;
  background-image: ${({ image }) => `url(${image})`}; 
  background-position: center;
  background-size: 190%;
  background-repeat: no-repeat;
  // filter: contrast(${({ selected }) => selected ? `100%` : `50%`}); 
  border-radius: 20px; 
  pointer-events: ${({ selected, showAll }) => selected || showAll ? 'auto' : 'none'};
  transition: transform 0.4s, opacity 0.4s, box-shadow 0.4s, margin-right 0.4s, scale 0.8s;
  margin-right: ${({ showAll }) => (showAll ? `8px` : `0px`)}; 
  z-index: ${({ selected, index }) => (selected ? `100` : `${100 - index}`)}; 
  box-shadow: ${({ selected }) => selected ? `0px 0px 20px 0px blue` : `none`};
  transform: ${({ index, selected, showAll }) =>
        selected
            ? `translateX(0px) scale(1)`
            : showAll
                ? `translateX(0px) scale(1)`
                : `translateX(${-21 * Number(index)}px) scale(0.8)`};
  opacity: ${({ selected, showAll }) => selected ? `1` : `0.7`};
  &:hover {
    cursor: pointer; 
    // filter: contrast(100%); 
    box-shadow: 0px 0px 20px 0px ${({ selected }) => selected ? `blue` : `grey`};
    transform: ${({ index, selected, showAll }) =>
      selected
        ? `translateX(0px) scale(1.2)`
        : showAll
          ? `translateX(0px) scale(1.4)`
          : `translateX(${-21 * Number(index)}px) scale(0.8)`};
    opacity: ${({ selected, showAll }) => selected || showAll ? `1` : `0.6`};
  }
`

export function Flag({ selected, showAll, data }) {
    return <Img
        selected={ selected }
        showAll={ showAll }
        { ...data }
    />
}

export default Flag
