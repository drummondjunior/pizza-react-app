/**
 * Contient les traductions pour une langue spécifique.
 * @module lang
 */

/**
 * Objet de traductions dans une langue spécifique.
 * @type {object}
 * @property {object} translations - Contient les traductions pour différentes parties de l'application.
 * @property {object} home - Traductions spécifiques pour la page d'accueil.
 * @property {string} message - Message de bienvenue en portugais.
 */
const lang = {
  menu: {
    toppings: {
      queijoextra: 'Fromage Supplémentaire',
      peperoni: 'Pepperoni',
      linguica: 'Saucisse',
      cebolas: 'Oignons',
      pimentoes: 'Poivrons',
      abacaxi: 'Ananas',
      presunto: 'Jambon',
      espinafre: 'Épinards',
      alcachofras: 'Artichauts',
      cogumelos: 'Champignons',
      anchovas: 'Anchois'
    },
    foodItems: [
      {
        id: 0,
        name: "Pizza au Fromage",
        img: "/img/pizza.png",
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Pizza Pepperoni",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Pizza au Poulet",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Pizza Végétarienne",
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
        name: "Grec",
        section: "Sandwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sandwich aux Crevettes",
        section: "Sandwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Frites",
        section: "Accompagnements",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Soda",
        section: "Boissons",
        choices: ["Coca-Cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'fr-FR',
    currency: 'EUR',
  },
  translations: {
    quantity: 'Quantité : ',
    oqueparacomer: 'Qu’y a-t-il à manger',
    itensnopedido: 'article(s) dans votre commande !',
  order: {
    empty: 'Votre commande semble assez vide.',
    yourorder: 'Votre Commande :',
    subtotal: 'Sous-total',
    imposto: 'Taxe',
    total: 'Total',
  },
  orderDialog: {
    ontheway: 'Votre commande est en route !',
    confirmationemail: 'Vous avez reçu un e-mail de confirmation de votre commande. Merci d’avoir choisi Sliceline.',
    stillhungry: 'J’ai encore faim',
  },
  navBar: {
    loggedin: 'Connecté',
    logout: 'Déconnexion',
    loginsignup: 'Connexion / Inscription',
  },
  foodDialog: {
    complemento: 'Souhaitez-vous ajouter quelque chose ?',
    update: 'Mettre à jour la commande : ',
    add: 'Ajouter à la commande : ',
  }
}
}

/**
 * Exporte l'objet de traductions pour utilisation dans d'autres modules.
 * @type {object}
 */
export default lang
