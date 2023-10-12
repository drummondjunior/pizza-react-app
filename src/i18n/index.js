/**
 * Configuração e inicialização do i18n para suporte à internacionalização.
 * @module i18nConfig
 */

// Importando as dependências
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

/**
 * Importa as traduções de um diretório específico.
 * @type {object}
 */
import translations from './locales'

/**
 * Configurações do i18n.
 * @type {object}
 * @property {object} resources - Recursos contendo as traduções.
 * @property {string} fallbackLng - Idioma padrão em caso de falha na detecção automática.
 * @property {string} defaultNS - Namespace padrão para as traduções.
 */
const i18nConfig = {
  resources: translations,
  fallbackLng: 'pt-BR',
  defaultNS: 'translations'
}

/**
 * Inicializa o i18n com as configurações fornecidas.
 * @function
 */
i18n
  .use(LanguageDetector) // Utiliza o detector de idioma do navegador.
  .use(initReactI18next) // Utiliza o pacote específico do i18n para o React.
  .init(i18nConfig) // Aplica as configurações definidas.

/**
 * Exporta a instância configurada do i18n.
 * @type {i18n}
 */
export default i18n
