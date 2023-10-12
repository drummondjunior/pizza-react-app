import React from 'react'
import styled from "styled-components";

/**
 * Componente que exibe uma bandeira com a capacidade de ser selecionada.
 * @component
 *
 * @param {string} image - O caminho da imagem da bandeira.
 * @param {boolean} isSelected - Indica se a bandeira está selecionada para efeitos visuais.
 * @param {object} props - Outras propriedades a serem aplicadas à imagem.
 *
 * @returns {JSX.Element} - Retorna um elemento JSX que exibe a bandeira.
 */

const Img = styled.div`
 height: 40px; 
 width: 40px; 
 background-image: ${({ image }) => `url(${image});`} 
 background-position: center;
 background-size: cover;
 filter: contrast(75%); 
 border-radius: 7px; 
 margin-top: 5px; 
 transition-property: box-shadow margin-top filter; 
 transition-duration: .1s; 
 box-shadow: 0px 0px 2px 0px grey;
 &:hover {
  cursor: pointer; 
  filter: contrast(100%); 
  margin-top: 0px; 
  margin-bottom: 5px; 
  box-shadow: 0px 5px 10px 0px grey;
 }
`;

const Flag = ({ image, isSelected, ...props }) => (
    <Img image={image} isSelected={isSelected} {...props} />
)

export default Flag
