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
  menu: {
    toppings: [
      { id: 0, name: 'Queijo Extra', price: 0.5 },
      { id: 1, name: 'Pepperoni', price: 0.7 },
      { id: 2, name: 'Linguiça', price: 0.6 },
      { id: 3, name: 'Cebolas', price: 0.3 },
      { id: 4, name: 'Pimentões', price: 0.4 },
      { id: 5, name: 'Abacaxi', price: 0.5 },
      { id: 6, name: 'Presunto', price: 0.7 },
      { id: 7, name: 'Espinafre', price: 0.4 },
      { id: 8, name: 'Alcachofras', price: 0.6 },
      { id: 9, name: 'Cogumelos', price: 0.5 },
      { id: 10, name: 'Anchovas', price: 0.8 }
    ],
    foodItems: [
      {
        id: 0,
        name: "Pizza de Queijo",
        img: "/img/pizza.png",
        type: 0, 
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Pizza de Pepperoni",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Pizza de Frango",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Pizza Veggie",
        type: 0, 
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Hamburger",
        type: 1, 
        section: "Sanduíche",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Grego",
        type: 1, 
        section: "Sanduíche",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sanduíche de Camarão",
        type: 1, 
        section: "Sanduíche",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Fritas",
        type: 1, 
        section: "Acompanhamentos",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Refrigerante",
        type: 1, 
        section: "Drinks",
        choices: ["Coca-cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'pt-BR',
    currency: 'BRL',
    language: 'Português (BR)',
    tax: 0.20,
  },
  translations: {
    quantity: 'Quantidade: ',
    oqueparacomer: 'O que tem para comer?',
    itensnopedido: 'item(s) no seu pedido!',
    order: {
      empty: 'Seu pedido está parecendo bem vazio.',
      yourorder: 'Seu Pedido:',
      subtotal: 'Subtotal',
      imposto: 'Taxas',
      total: 'Total',
    },
    orderDialog: {
      ontheway: 'Seu pedido está a caminho!',
      confirmationemail: 'Você recebeu um e-mail de confirmação do seu pedido. Obrigado por escolher o Sliceline.',
      stillhungry: 'Ainda estou com fome',
    },
    navBar: {
      loggedin: 'Conectado',
      logout: 'Sair',
      loginsignup: 'Entrar / Inscrever',
    },
    foodDialog: {
      complemento: 'Gostaria de algum complemento?',
      update: 'Atualizar pedido: ',
      add: 'Adicionar pedido: ',
    },
    choice: {
      escolha: 'Escolha um'
    }
  }
}

/**
 * Exporta o objeto de traduções para uso em outros módulos.
 * @type {object}
 */
export default lang
