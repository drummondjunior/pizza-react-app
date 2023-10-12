/**
 * Contains translations for a specific language.
 * @module lang
 */

/**
 * Object containing translations in a specific language.
 * @type {object}
 * @property {object} translations - Contains translations for various parts of the application.
 * @property {object} home - Specific translations for the home page.
 * @property {string} message - Greeting message in English.
 */
const lang = {
  translations: {
    home: {
      message: 'Hello World'
    }
  }
}

/**
 * Exports the translation object for use in other modules.
 * @type {object}
 */
export default lang
