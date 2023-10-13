/**
 * Contains translations for a specific language.
 * @module lang
 */

/**
 * Object of translations in a specific language.
 * @type {object}
 * @property {object} translations - Contains translations for various parts of the application.
 * @property {object} home - Specific translations for the home page.
 * @property {string} message - Greeting message in Portuguese.
 */
const lang = {
  menu: {
    toppings: {
      queijoextra: 'Extra Cheese',
      peperoni: 'Pepperoni',
      linguica: 'Sausage',
      cebolas: 'Onions',
      pimentoes: 'Bell Peppers',
      abacaxi: 'Pineapple',
      presunto: 'Ham',
      espinafre: 'Spinach',
      alcachofras: 'Artichokes',
      cogumelos: 'Mushrooms',
      anchovas: 'Anchovies'
    },
    foodItems: [
      {
        id: 0,
        name: "Cheese Pizza",
        img: "/img/pizza.png",
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Pepperoni Pizza",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Chicken Pizza",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Veggie Pizza",
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Hamburger",
        section: "Sandwich",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Greek",
        section: "Sandwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Shrimp Sandwich",
        section: "Sandwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Fries",
        section: "Sides",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Soda",
        section: "Drinks",
        choices: ["Coke", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'en-US',
    currency: 'USD',
  },
  translations: {
    quantity: 'Quantity: ',
    order: {
      empty: 'Your order is looking quite empty.',
      yourorder: 'Your Order:',
      subtotal: 'Subtotal',
      imposto: 'Tax',
      total: 'Total',
    },
    orderDialog: {
      ontheway: 'Your order is on the way!',
      confirmationemail: 'You have been emailed confirmation of your order. Thanks for choosing Sliceline.',
      stillhungry: 'I\'m still hungry',
    },
    navBar: {
      loggedin: 'Logged in',
      logout: 'Log out',
      loginsignup: 'Log in / Sign up',
    },
    title: {
      oqueparacomer: 'What\'s for Dinner ? ',
      itensnopedido: 'items in your order!',
    },
    foodDialog: {
      complemento: 'Would you like any additional items?',
      update: 'Update order: ',
      add: 'Add to order: ',
    }
  }
}

/**
 * Export the translation object for use in other modules.
 * @type {object}
 */
export default lang
