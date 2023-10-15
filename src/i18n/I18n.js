import React, { useState } from 'react'
// import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import Flags from './assets'
import Flag from './Flag'

const FlagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto; 
    position: fixed;
    top: 10px; // Ajuste conforme necessário
    left: 40%; // Ajuste conforme necessário
`

/**
 * Componente que permite a seleção de idioma com bandeiras.
 * @component
 */
const I18n = () => {
  const { i18n } = useTranslation()
  const [showAll, setShowAll] = useState(false) // Estado para gerenciar a exibição de todas as bandeiras
  let selectedLanguage = i18n.language || 'pt-BR'  // Assegura que sempre haja um idioma selecionado

  const orderedFlags = Object.keys(Flags)
    .map((flagKey) => Flags[flagKey])
    .sort((a, b) => selectedLanguage === a.locale ? -1 : selectedLanguage === b.locale ? 1 : 0)

  const handleFlagClick = (locale) => {
    if (!showAll && selectedLanguage === locale) {
      setShowAll(true)
    } else {
      i18n.changeLanguage(locale)
      selectedLanguage = locale
      setShowAll(false)
    }
  }

  // const flagContainerRef = useRef(null)

  // useEffect(() => {
  // const handleClickOutside = (event) => {
  //   if (flagContainerRef.current && !flagContainerRef.current.contains(event.target)) {
  //     setShowAll(false)
  //   }
  // }

  // document.addEventListener('mousedown', handleClickOutside)
  // return () => {
  //   document.removeEventListener('mousedown', handleClickOutside)
  // }
  // }, [flagContainerRef, setShowAll]);

  return (
    <FlagContainer
      onMouseLeave={ () => setShowAll(false) }
    // key={ selectedLanguage }  // Adicionando uma chave que muda quando o idioma é selecionado
    >
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
