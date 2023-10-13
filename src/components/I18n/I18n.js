import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"

// O useTranslation é um hook que retorna a função de tradução (t) e a instância do i18n.

// Importa as imagens das bandeiras e o componente Flag.
import * as AllFlags from './assets'
import Flag from './Flag'

const FlagContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  height: 20px;
`

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
      { Object.keys(AllFlags).map((flagKey) => {
        let lang = AllFlags[flagKey]
        return <Flag
          key={ lang.order } // Chave única
          image={ lang.image }
          isselected={ selectedLanguage === lang.locale ? 'true' : 'false' }
          onClick={ () => {
            handleChangeLanguage(lang.locale)
          } }
          alt={ lang.locale }
        />
      }) }
    </FlagContainer>
  )
  
}

export default I18n
