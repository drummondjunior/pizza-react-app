/**
 * Contém as traduções para um idioma específico.
 * @module lang
 */

/**
 * Objeto de traduções em um idioma específico.
 * @type {object}
 * @property {object} translations - Contém as traduções para várias partes do aplicativo.
 * @property {object} home - Traduções específicas para a página inicial.
 * @property {string} message - Mensagem de saudação em português.
 */
const lang = {
  translations: {
    home: {
      message: 'Olá Mundo!'
    }
  }
}

/**
 * Exporta o objeto de traduções para uso em outros módulos.
 * @type {object}
 */
export default lang
