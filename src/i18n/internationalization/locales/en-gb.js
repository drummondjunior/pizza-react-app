/**
 * Contains translations for a specific language.
 * @module lang
 */

/**
 * Translations object in a specific language.
 * @type {object}
 * @property {object} translations - Contains translations for various parts of the app.
 * @property {object} home - Specific translations for the home page.
 * @property {string} message - Greeting message in English.
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: "Extra Cheese", price: 0.5 },
      { id: 1, name: "Pepperoni", price: 0.5 },
      { id: 2, name: "Sausage", price: 0.5 },
      { id: 3, name: "Onions", price: 0.5 },
      { id: 4, name: "Bell Peppers", price: 0.5 },
      { id: 5, name: "Pineapple", price: 0.5 },
      { id: 6, name: "Ham", price: 0.5 },
      { id: 7, name: "Spinach", price: 0.5 },
      { id: 8, name: "Artichokes", price: 0.5 },
      { id: 9, name: "Mushrooms", price: 0.5 },
      { id: 10, name: "Anchovies", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "Cheese Pizza",
        img: "/img/pizza.png",
        type: 0, 
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Pepperoni Pizza",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Chicken Pizza",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Veggie Pizza",
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
        name: "Greek",
        type: 1, 
        section: "Sandwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Prawn Sandwich",
        type: 1, 
        section: "Sandwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Chips",
        type: 1, 
        section: "Sides",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Soft Drink",
        type: 1, 
        section: "Drinks",
        choices: ["Coca-Cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'en-GB',
    currency: 'GBP',
    language: 'English (UK)',
    tax: 0.07,
  },
  translations: {
    quantity: 'Quantity: ',
    oqueparacomer: "What's to eat?",
    itensnopedido: 'item(s) in your order!',
    order: {
      empty: 'Your order is looking quite empty.',
      yourorder: 'Your Order:',
      subtotal: 'Subtotal',
      imposto: 'Tax',
      total: 'Total',
    },
    orderDialog: {
      ontheway: 'Your order is on the way!',
      confirmationemail: "You've received a confirmation email for your order. Thanks for choosing Sliceline.",
      stillhungry: "I'm still peckish",
    },
    navBar: {
      loggedin: 'Logged In',
      logout: 'Log Out',
      loginsignup: 'Log In / Sign Up',
    },
    foodDialog: {
      complemento: 'Any extras?',
      update: 'Update order: ',
      add: 'Add to order: ',
    },
    choice: { 'escolha': 'Choose one' }
  }
}

/**
 * Exports the translations object for use in other modules.
 * @type {object}
 */
export default lang
