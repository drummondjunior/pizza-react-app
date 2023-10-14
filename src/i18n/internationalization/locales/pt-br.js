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
    toppings: {
      queijoextra: 'Queijo Extra',
      peperoni: 'Pepperoni',
      linguica: 'Linguiça',
      cebolas: 'Cebolas',
      pimentoes: 'Pimentões',
      abacaxi: 'Abacaxi',
      presunto: 'Presunto',
      espinafre: 'Espinafre',
      alcachofras: 'Alcachofras',
      cogumelos: 'Cogumelos',
      anchovas: 'Anchovas'
    },
    foodItems: [
      {
        id: 0,
        name: "Pizza de Queijo",
        img: "/img/pizza.png",
        section: "Pizza",
        price: 1
      },
      {
        id: 1,
        name: "Pizza de Pepperoni",
        img: "/img/pizza2.jpeg",
        section: "Pizza",
        price: 1.5
      },
      {
        id: 2,
        name: "Pizza de Frango",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Pizza Veggie",
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Hamburger",
        section: "Sanduíche",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Grego",
        section: "Sanduíche",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sanduíche de Camarão",
        section: "Sanduíche",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Fritas",
        section: "Acompanhamentos",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Refrigerante",
        section: "Drinks",
        choices: ["Coca-cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'pt-BR',
    currency: 'BRL',
  },
  translations: {
    quantity: 'Quantidade: ',
    oqueparacomer: 'O que tem para comer?',
    itensnopedido: 'item(s) no seu pedido!',
    order: {
      empty: 'Seu pedido está parecendo bem vazio.',
      yourorder: 'Seu Pedido:',
      subtotal: 'Subtotal',
      imposto: 'Imposto',
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
      add: 'Adicionar ao pedido: ',
    }
  }
}

/**
 * Exporta o objeto de traduções para uso em outros módulos.
 * @type {object}
 */
export default lang
