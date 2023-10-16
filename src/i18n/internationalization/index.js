import translation from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import languages from "./languages"

/**
 * Tenta importar um módulo e retorna null se falhar.
 * @param {string} path - O caminho para o módulo.
 * @returns {any|null} - O módulo importado ou null.
 */
const tryRequire = (path) => {
  try {
    return require(`${path}`)
  } catch (e) {
    console.error(`Erro ao carregar o módulo ${path}:`, e)
    return null
  }
}

/**
 * Importa bandeiras e traduções de forma dinâmica e cria os objetos de idiomas e traduções.
 * @type {object}
 */
const flags = languages.reduce((acc, lang) => {
  const { locale, imageFile } = lang

  // Importando a imagem da bandeira correspondente
  const image = tryRequire(`./assets/${imageFile}`)

  // Convertendo o código do idioma para o formato do nome do arquivo (ex: 'en-US' -> 'en-us')
  const fileName = locale.toLowerCase().replace('_', '-')

  // Importando o arquivo de tradução correspondente
  const translationFile = tryRequire(`./locales/${fileName}`).default

  // Adicionando a configuração de idioma ao objeto acumulador
  acc.flags[locale] = { ...lang, ...{ image: image } }
  acc.translations[locale] = translationFile

  return acc
}, { translations: {}, flags: {} })

// console.log(flags)

/**
 * @module i18nConfig
 * @description Configuração e inicialização do translation para suporte à internacionalização.
 */

/**
 * Configurações do translation.
 * @type {object}
 * @property {object} resources - Recursos contendo as traduções.
 * @property {boolean} fallbackNS - Se deve ou não usar um namespace como fallback.
 * @property {string} fallbackLng - Idioma padrão em caso de falha na detecção automática.
 * @property {string} defaultNS - Namespace padrão para as traduções.
 */
const i18nConfig = {
  resources: flags.translations,
  fallbackNS: true,
  fallbackLng: 'pt-BR',
  defaultNS: 'translations',
}

/**
 * Inicializa o translation com as configurações fornecidas.
 */
translation
  .use(LanguageDetector) // Utiliza o detector de idioma do navegador.
  .use(initReactI18next) // Utiliza o pacote específico do translation para o React.
  .init(i18nConfig) // Aplica as configurações definidas.

/**
 * Exporta a instância configurada do translation e as configurações de idioma.
 * @type {object}
 */
export { translation, flags }
