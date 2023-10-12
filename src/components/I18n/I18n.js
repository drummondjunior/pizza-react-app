import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components";

// O useTranslation é um hook que retorna a função de tradução (t) e a instância do i18n.

// Importa as imagens das bandeiras e o componente Flag.
import { BrasilFlag, EuaFlag } from './assets'
import Flag from './Flag'

const FlagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80px;
  height: 30px;
  margin-left: 80%
`;

/**
 * Componente que permite a seleção de idioma com bandeiras.
 * @component
 */
const I18n = () => {
  const { i18n } = useTranslation()
  // Obtém a instância do i18n.

  /**
   * Função para trocar o idioma.
   * @param {string} language - O idioma para o qual trocar.
   */
  function handleChangeLanguage(language) {
    // Altera o idioma chamando a função do i18n.
    i18n.changeLanguage(language)
  }

  const selectedLanguage = i18n.language // Idioma selecionado
  return (
    <FlagContainer>
      {/* Bandeira do Brasil */ }
      <Flag
        image={ BrasilFlag }
        isSelected={ selectedLanguage === 'pt-BR' } // Verifica o idioma escolhido
        onClick={ () => handleChangeLanguage('pt-BR') } // Troca o idioma para pt-BR
      />
      {/* Bandeira dos EUA */ }
      <Flag
        image={ EuaFlag }
        isSelected={ selectedLanguage === 'en-US' } // Verifica o idioma escolhido
        onClick={ () => handleChangeLanguage('en-US') } // Troca o idioma para en-US
      />
    </FlagContainer>
  )
}

export default I18n
