import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next'
import styled from "styled-components"
import { flags } from '../internationalization';
import Flag from './Flag'

const Flags = flags.flags
const Translations = flags.translations

const FlagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto; 
    position: fixed;
    top: 10px; // Ajuste conforme necessário
    left: 40%; // Ajuste conforme necessário
`

// console.log('a', Translations)

/**
 * Componente que permite a seleção de idioma com bandeiras.
 * @component
 */
const I18n = () => {
  const { i18n } = useTranslation()
  const [showall, setShowAll] = useState(false) // Estado para gerenciar a exibição de todas as bandeiras
  let selectedLanguage = i18n.language || 'pt-BR'  // Assegura que sempre haja um idioma selecionado

  const timeoutRef = useRef(null)

  const handleMouseLeave = () => {
    // Limpa o timeout anterior, se houver
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Define um novo timeout
    timeoutRef.current = setTimeout(() => {
      setShowAll(false)
    }, 2000) // 2000ms = 2 segundo
  };

  const handleMouseEnter = () => {
    // Limpa o timeout quando o mouse retorna ao componente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  };

  const orderedFlags = Object.keys(Flags)
    .map((flagKey) => Flags[flagKey])
    .sort((a, b) => selectedLanguage === a.locale ? -1 : selectedLanguage === b.locale ? 1 : 0)

  const handleFlagClick = (locale) => {
    if (!showall && selectedLanguage === locale) {
      setShowAll(true)
    } else {
      i18n.changeLanguage(locale)
      selectedLanguage = locale
      setShowAll(false)
    }
  }

  return (
    <FlagContainer
      onMouseLeave={ handleMouseLeave }
      onMouseEnter={ handleMouseEnter }
    >
      { orderedFlags.map((lang, index) => (
        <Flag
          key={ index }
          selected={ selectedLanguage === lang.locale }
          showall={ showall ? showall : undefined }
          text={ Translations[lang.locale].config.language }
          data={ {
            index: index,
            image: lang.image,
            order: index === 0 && !showall ? 0 : lang.order + 1,
            onClick: () => handleFlagClick(lang.locale),
          } }
        />
      )) }
    </FlagContainer>
  )
}

export default I18n
