import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import * as AllFlags from './assets'
import Flag from './Flag'

const FlagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 120px; 
    // overflow: hidden;
`

/**
 * Componente que permite a seleção de idioma com bandeiras.
 * @component
 */
const I18n = () => {
  const { i18n } = useTranslation()
  const [showAll, setShowAll] = useState(false) // Estado para gerenciar a exibição de todas as bandeiras
  let selectedLanguage = i18n.language || 'pt-BR'  // Assegura que sempre haja um idioma selecionado

  const orderedFlags = Object.keys(AllFlags)
    .map((flagKey) => AllFlags[flagKey])
    .sort((a, b) => selectedLanguage === a.locale ? -1 : selectedLanguage === b.locale ? 1 : 0)
    // .sort((a, b) => a.order - b.order)
  
  const handleFlagClick = (locale) => {
    if (!showAll && selectedLanguage === locale) { 
      setShowAll(true)
    } else {
      setShowAll(false)
      i18n.changeLanguage(locale)
      selectedLanguage = locale
    }
  }

  return (
    <FlagContainer>
      { orderedFlags.map((lang, index) => (
        <Flag
          key={ index }
          selected={ selectedLanguage === lang.locale }
          showAll={ showAll }
          data={ {
            index: index,
            alt: lang.language,
            image: lang.image,
            order: index === 0 && !showAll ? 32 : 31 - lang.order,
            onClick: () => handleFlagClick(lang.locale),
          } }
        />
      )) }
    </FlagContainer>
  )
}

export default I18n
