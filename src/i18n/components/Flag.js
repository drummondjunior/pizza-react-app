import React from 'react'
import styled from "styled-components"

/**
 * @component
 * @description Componente que exibe uma bandeira com a capacidade de ser selecionada.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {string} props.key - O caminho da imagem da bandeira.
 * @param {boolean} props.selected - Indica se a bandeira está selecionada para efeitos visuais.
 * @param {boolean} props.showall - Indica se todas as bandeiras devem ser exibidas.
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
  pointer-events: ${({ selected, showall }) => selected || showall ? 'auto' : 'none'};
  transition: transform 0.4s, opacity 0.4s, box-shadow 0.4s, margin-right 0.4s, scale 0.8s;
  margin-right: ${({ showall }) => (showall ? `8px` : `0px`)}; 
  z-index: ${({ selected, index }) => (selected ? `100` : `${100 - index}`)}; 
  box-shadow: ${({ selected }) => selected ? `0px 0px 20px 0px blue` : `none`};
  transform: ${({ index, selected, showall }) =>
        selected
            ? `translateX(0px) scale(1)`
            : showall
                ? `translateX(0px) scale(1)`
                : `translateX(${-29.5 * Number(index)}px) scale(0.3)`};
  opacity: ${({ selected, showall }) => selected ? `1` : `0.7`};
  &:hover {
    cursor: pointer; 
    // filter: contrast(100%); 
    box-shadow: 0px 0px 20px 0px ${({ selected }) => selected ? `blue` : `grey`};
    transform: ${({ index, selected, showall }) =>
      selected
        ? `translateX(0px) scale(1.2)`
        : showall
          ? `translateX(0px) scale(1.4)`
          : `translateX(${-29.5 * Number(index)}px) scale(0.3)`};
    opacity: ${({ selected, showall }) => selected || showall ? `1` : `0.7`};
  }
`

const AltText = styled.p`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 10px;
  text-shadow: 1px 1px 2px black;
  white-space: nowrap; /* Evita que o texto quebre em várias linhas */
  text-align: center; /* Centraliza o texto */
  visibility: hidden;
`;

const FlagDiv = styled.div`
  position: relative;
  z-index: ${({ selected, key }) => (selected ? `100` : `${100 - key}`)}; 
  &:hover ${AltText} {
    visibility: visible; /* Exibe o texto quando em hover */
  }
`;

export function Flag({ selected, text, showall, data }) {
  return (
    <FlagDiv
      key   = { data.index }
      selected={ selected }
      text={ text }
    >
      <Img
        selected={ selected }
        showall={ showall }
        { ...data }
      />
      { (!data.image || showall) && <AltText>{ text }</AltText> }
    </FlagDiv>
  )
}

export default Flag
