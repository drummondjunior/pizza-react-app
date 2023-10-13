/**
 * Contiene le traduzioni per una lingua specifica.
 * @module lang
 */

/**
 * Oggetto di traduzioni in una lingua specifica.
 * @type {object}
 * @property {object} translations - Contiene le traduzioni per diverse parti dell'applicazione.
 * @property {object} home - Traduzioni specifiche per la pagina iniziale.
 * @property {string} message - Messaggio di saluto in portoghese.
 */
const lang = {
  menu: {
    toppings: {
      queijoextra: 'Extra di Formaggio',
      peperoni: 'Peperoni',
      linguica: 'Lingua',
      cebolas: 'Cipolle',
      pimentoes: 'Peperoni',
      abacaxi: 'Ananas',
      presunto: 'Prosciutto',
      espinafre: 'Spinaci',
      alcachofras: 'Carciofi',
      cogumelos: 'Funghi',
      anchovas: 'Acciughe'
    },
    foodItems: [
      {
        id: 0,
        name: 'Pizza al Formaggio',
        img: '/img/pizza.png',
        section: 'Pizza',
        price: 1
      },
      {
        id: 1,
        name: 'Pizza al Peperoni',
        img: '/img/pizza2.jpeg',
        section: 'Pizza',
        price: 1.5
      },
      {
        id: 2,
        name: 'Pizza al Pollo',
        img: '/img/chicken-pizza.jpeg',
        section: 'Pizza',
        price: 2
      },
      {
        id: 3,
        img: '/img/healthy-pizza.jpeg',
        name: 'Pizza Veggie',
        section: 'Pizza',
        price: 2
      },
      {
        id: 4,
        img: '/img/burger.jpeg',
        name: 'Hamburger',
        section: 'Panino',
        price: 3
      },
      {
        id: 5,
        img: '/img/gyro.jpeg',
        name: 'Greco',
        section: 'Panino',
        price: 4.5
      },
      {
        id: 6,
        img: '/img/sandwich.jpeg',
        name: 'Panino al Gambero',
        section: 'Panino',
        price: 6
      },
      {
        id: 7,
        img: '/img/fries.jpeg',
        name: 'Patatine Fritte',
        section: 'Contorni',
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: 'Bevanda',
        section: 'Bevande',
        choices: ['Coca-cola', 'Sprite', 'Root Beer']
      }
    ],
  },
  config: {
    locale: 'it-IT',
    currency: 'EUR',
  },
  translations: {
    quantity: 'Quantità: ',
    order: {
      empty: 'Il tuo ordine sembra vuoto.',
      yourorder: 'Il tuo ordine:',
      subtotal: 'Subtotale',
      imposto: 'Imposta',
      total: 'Totale',
    },
    orderDialog: {
      ontheway: 'Il tuo ordine è in arrivo!',
      confirmationemail: 'Hai ricevuto una email di conferma del tuo ordine. Grazie per aver scelto Sliceline.',
      stillhungry: 'Sono ancora affamato',
    },
    navBar: {
      loggedin: 'Connesso',
      logout: 'Esci',
      loginsignup: 'Accedi / Iscriviti',
    },
    title: {
      oqueparacomer: 'Cosa c\'è da mangiare?',
      itensnopedido: 'elementi nel tuo ordine!',
    },
    foodDialog: {
      complemento: 'Vuoi qualche aggiunta?',
      update: 'Aggiorna ordine:',
      add: 'Aggiungi all\'ordine: ',
    }
  }
}

/**
 * Esporta l'oggetto di traduzioni per l'uso in altri moduli.
 * @type {object}
 */
export default lang
