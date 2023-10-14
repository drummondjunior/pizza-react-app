/**
 * Configuração e inicialização do translation para suporte à internacionalização.
 * @module i18nConfig
 */

// Importando as dependências
import translation from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

/**
 * Importa as traduções de um diretório específico.
 * @type {object}
 */
import translations from './locales'

/**
 * Configurações do translation.
 * @type {object}
 * @property {object} resources - Recursos contendo as traduções.
 * @property {string} fallbackLng - Idioma padrão em caso de falha na detecção automática.
 * @property {string} defaultNS - Namespace padrão para as traduções.
 */
const i18nConfig = {
  resources: translations,
  fallbackNS: true,
  // lng: 'pt-BR',
  fallbackLng: 'pt-BR',
  defaultNS: 'translations'
}

/**
 * Inicializa o translation com as configurações fornecidas.
 * @function
 */
translation
  .use(LanguageDetector) // Utiliza o detector de idioma do navegador.
  .use(initReactI18next) // Utiliza o pacote específico do translation para o React.
  .init(i18nConfig) // Aplica as configurações definidas.

/**
 * Exporta a instância configurada do translation.
 * @type {translation}
 */
export default translation
