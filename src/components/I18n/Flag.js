import React from 'react'
import styled from "styled-components";

/**
 * Componente que exibe uma bandeira com a capacidade de ser selecionada.
 * @component
 *
 * @param {string} image - O caminho da imagem da bandeira.
 * @param {boolean} isselected - Indica se a bandeira está selecionada para efeitos visuais.
 * @param {object} props - Outras propriedades a serem aplicadas à imagem.
 *
 * @returns {JSX.Element} - Retorna um elemento JSX que exibe a bandeira.
 */

const Img = styled.div`
 height: 25px; 
 width: 25px; 
 background-image: ${({ image }) => `url(${image});`} 
 background-position: center;
 background-size: cover;
 filter: contrast(${({ isselected }) => isselected === 'true' ? `100%` : `60%`}); 
 border-radius: 12px; 
 transition-property: box-shadow margin-top filter; 
 transition-duration: .1s; 
 margin-left: -1px;
 margin-right: -1px;
 z-index: ${({ isselected }) => isselected === 'true' ? `8` : `7`}; 
 box-shadow: 0px 0px 10px 0px ${({ isselected }) => isselected === 'true' ? `blue` : `grey`};
 &:hover {
  cursor: pointer; 
  filter: contrast(100%); 
  box-shadow: 0px 0px 20px 0px ${({ isselected }) => isselected === 'true' ? `blue` : `grey`};
 }
`;

export function Flag(props) {
    // if (!props.order) return null
    return <Img { ...props } />
}

export default Flag
