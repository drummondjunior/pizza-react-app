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
    toppings: [
      { id: 0, name: "Formaggio Extra", price: 0.5 },
      { id: 1, name: "Peperoni", price: 0.5 },
      { id: 2, name: "Salsiccia", price: 0.5 },
      { id: 3, name: "Cipolle", price: 0.5 },
      { id: 4, name: "Peperoni", price: 0.5 },
      { id: 5, name: "Ananas", price: 0.5 },
      { id: 6, name: "Prosciutto", price: 0.5 },
      { id: 7, name: "Spinaci", price: 0.5 },
      { id: 8, name: "Carciofi", price: 0.5 },
      { id: 9, name: "Funghi", price: 0.5 },
      { id: 10, name: "Acciughe", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: 'Pizza al Formaggio',
        img: '/img/pizza.png',
        type: 0, 
        section: 'Pizza',
        price: 1
      },
      {
        id: 1,
        name: 'Pizza al Peperoni',
        img: '/img/pizza2.jpeg',
        type: 0, 
        section: 'Pizza',
        price: 1.5
      },
      {
        id: 2,
        name: 'Pizza al Pollo',
        img: '/img/chicken-pizza.jpeg',
        type: 0, 
        section: 'Pizza',
        price: 2
      },
      {
        id: 3,
        img: '/img/healthy-pizza.jpeg',
        name: 'Pizza Veggie',
        type: 0, 
        section: 'Pizza',
        price: 2
      },
      {
        id: 4,
        img: '/img/burger.jpeg',
        name: 'Hamburger',
        type: 1, 
        section: 'Panino',
        price: 3
      },
      {
        id: 5,
        img: '/img/gyro.jpeg',
        name: 'Greco',
        type: 1, 
        section: 'Panino',
        price: 4.5
      },
      {
        id: 6,
        img: '/img/sandwich.jpeg',
        name: 'Panino al Gambero',
        type: 1, 
        section: 'Panino',
        price: 6
      },
      {
        id: 7,
        img: '/img/fries.jpeg',
        name: 'Patatine Fritte',
        type: 1, 
        section: 'Contorni',
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: 'Bevanda',
        type: 1, 
        section: 'Bevande',
        choices: ['Coca-cola', 'Sprite', 'Root Beer']
      }
    ],
  },
  config: {
    locale: 'it-IT',
    currency: 'EUR',
    language: 'Italiano (EU)',
    tax: 0.07,
  },
  translations: {
    quantity: 'Quantità: ',
    oqueparacomer: 'Cosa c\'è da mangiare?',
    itensnopedido: 'elementi nel tuo ordine!',
    order: {
      empty: 'Il tuo ordine sembra vuoto.',
      yourorder: 'Il tuo ordine:',
      subtotal: 'Subtotale',
      imposto: 'Imposta',
      total: 'Totale',
    },
    orderDialog: {
      ontheway: 'Il tuo ordine è in arrivo!',
      confirmationemail: 'Hai ricevuto una email di conferma del tuo ordine. Grazie per aver scelto Pizzaria.',
      stillhungry: 'Sono ancora affamato',
    },
    navBar: {
      loggedin: 'Connesso',
      logout: 'Esci',
      loginsignup: 'Accedi / Iscriviti',
      loading: 'Caricamento...'
    },
    foodDialog: {
      complemento: 'Vuoi qualche aggiunta?',
      update: 'Aggiorna ordine:',
      add: 'Aggiungi all\'ordine: ',
    },
    choice: { 'escolha': 'Scegli uno' }
  }
}

/**
 * Esporta l'oggetto di traduzioni per l'uso in altri moduli.
 * @type {object}
 */
export default lang
