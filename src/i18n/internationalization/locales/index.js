/**
 * Contém as traduções em diferentes idiomas.
 * @module translations
 */

// Lista de códigos de idioma disponíveis
const languageCodes = ['en-US', 'pt-BR', 'it-IT', 'es-MX', 'fr-FR']

// Importando traduções de forma dinâmica e criando o objeto de traduções
const translations = languageCodes.reduce((acc, code) => {
  // Convertendo o código do idioma para o formato do nome do arquivo (ex: 'en-US' -> 'en-us')
  const fileName = code.toLowerCase().replace('-', '-')

  // Importando o arquivo de tradução correspondente
  acc[code] = require(`./${fileName}`).default

  return acc
}, {})

/**
 * Exporta o objeto de traduções para uso em outros módulos.
 * @type {object}
 */
export default translations
