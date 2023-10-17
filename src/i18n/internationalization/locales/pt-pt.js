/**
 * Contém as traduções para uma língua específica.
 * @module lang
 */

/**
 * Objeto de traduções numa língua específica.
 * @type {object}
 * @property {object} translations - Contém as traduções para várias partes da aplicação.
 * @property {object} home - Traduções específicas para a página inicial.
 * @property {string} message - Mensagem de saudação em português.
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: 'Queijo Extra', price: 0.5 },
      { id: 1, name: 'Pepperoni', price: 0.7 },
      { id: 2, name: 'Chouriço', price: 0.6 },
      { id: 3, name: 'Cebolas', price: 0.3 },
      { id: 4, name: 'Pimentos', price: 0.4 },
      { id: 5, name: 'Ananás', price: 0.5 },
      { id: 6, name: 'Fiambre', price: 0.7 },
      { id: 7, name: 'Espinagres', price: 0.4 },
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
        name: "Pizza Vegetariana",
        type: 0,
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Hambúrguer",
        type: 1,
        section: "Sandes",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Grego",
        type: 1,
        section: "Sandes",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sandes de Camarão",
        type: 1,
        section: "Sandes",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Batatas Fritas",
        type: 1,
        section: "Acompanhamentos",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Refrigerante",
        type: 1,
        section: "Bebidas",
        choices: ["Coca-cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'pt-PT',
    currency: 'EUR',
    language: 'Português (PT)',
    tax: 0.20,
  },
  translations: {
    quantity: 'Quantidade: ',
    oqueparacomer: 'O que há para comer?',
    itensnopedido: 'item(ns) no seu pedido!',
    order: {
      empty: 'O seu pedido parece bastante vazio.',
      yourorder: 'O Seu Pedido:',
      subtotal: 'Subtotal',
      imposto: 'Imposto',
      total: 'Total',
    },
    orderDialog: {
      ontheway: 'O seu pedido está a caminho!',
      confirmationemail: 'Recebeu um e-mail de confirmação do seu pedido. Obrigado por escolher a Pizzaria.',
      stillhungry: 'Ainda tenho fome',
    },
    navBar: {
      loggedin: 'Ligado',
      logout: 'Sair',
      loginsignup: 'Entrar / Registar',
      loading: 'A carregar...'
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
 * Exporta o objeto de traduções para uso noutros módulos.
 * @type {object}
 */
export default lang
