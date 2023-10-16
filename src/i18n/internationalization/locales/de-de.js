/**
 * Enthält Übersetzungen für eine bestimmte Sprache.
 * @module lang
 */

/**
 * Übersetzungsobjekt in einer bestimmten Sprache.
 * @type {object}
 * @property {object} translations - Enthält Übersetzungen für verschiedene Teile der App.
 * @property {object} home - Spezifische Übersetzungen für die Startseite.
 * @property {string} message - Begrüßungsnachricht auf Deutsch.
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: "Extra Käse", price: 0.5 },
      { id: 1, name: "Salami", price: 0.5 },
      { id: 2, name: "Wurst", price: 0.5 },
      { id: 3, name: "Zwiebeln", price: 0.5 },
      { id: 4, name: "Paprika", price: 0.5 },
      { id: 5, name: "Ananas", price: 0.5 },
      { id: 6, name: "Schinken", price: 0.5 },
      { id: 7, name: "Spinat", price: 0.5 },
      { id: 8, name: "Artischocken", price: 0.5 },
      { id: 9, name: "Pilze", price: 0.5 },
      { id: 10, name: "Sardellen", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "Käsepizza",
        img: "/img/pizza.png",
        type: 0, 
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Salami-Pizza",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Hähnchenpizza",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Gemüsepizza",
        type: 0, 
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Burger",
        type: 1, 
        section: "Sandwich",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Griechisch",
        type: 1, 
        section: "Sandwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Garnelensandwich",
        type: 1, 
        section: "Sandwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Pommes",
        type: 1, 
        section: "Beilagen",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Softdrink",
        type: 1, 
        section: "Getränke",
        choices: ["Coca-Cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'de-DE',
    currency: 'EUR',
    language: 'Deutsch (DE)',
    tax: 0.07,
  },
  translations: {
    quantity: 'Menge: ',
    oqueparacomer: 'Was gibt es zu essen?',
    itensnopedido: 'Artikel in Ihrer Bestellung!',
    order: {
      empty: 'Ihre Bestellung sieht ziemlich leer aus.',
      yourorder: 'Ihre Bestellung:',
      subtotal: 'Zwischensumme',
      imposto: 'Steuer',
      total: 'Gesamt',
    },
    orderDialog: {
      ontheway: 'Ihre Bestellung ist unterwegs!',
      confirmationemail: 'Sie haben eine Bestätigungs-E-Mail für Ihre Bestellung erhalten. Danke, dass Sie Sliceline gewählt haben.',
      stillhungry: 'Ich habe immer noch Hunger',
    },
    navBar: {
      loggedin: 'Angemeldet',
      logout: 'Abmelden',
      loginsignup: 'Anmelden / Registrieren',
    },
    foodDialog: {
      complemento: 'Möchten Sie etwas dazu?',
      update: 'Bestellung aktualisieren: ',
      add: 'Zur Bestellung hinzufügen: ',
    },
    choice: { 'escolha': 'Wählen Sie eines aus' }
  }
}

/**
 * Exportiert das Übersetzungsobjekt zur Verwendung in anderen Modulen.
 * @type {object}
 */
export default lang
