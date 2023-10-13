/**
 * Contém as traduções em diferentes idiomas.
 * @module translations
 */

// Importando as traduções para português (Brasil) e inglês (EUA)
import ptBrTranslations from './pt-br'
import enUsTranslations from './en-us'
import itItTranslations from './it-it'

/**
 * Objeto de traduções que mapeia idiomas para suas respectivas traduções.
 * @type {object}
 * @property {object} pt-BR - Traduções para o português do Brasil.
 * @property {object} en-US - Traduções para o inglês dos Estados Unidos.
 * @property {object} it-IT - Traduções para o italiano.
 */
const translations = {
  'pt-BR': ptBrTranslations,
  'en-US': enUsTranslations,
  'it-IT': itItTranslations,
}

/**
 * Exporta o objeto de traduções para uso em outros módulos.
 * @type {object}
 */
export default translations
