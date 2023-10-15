const lang = {
  menu: {
    toppings: {
      queijoextra: 'Queso Extra',
      peperoni: 'Pepperoni',
      linguica: 'Salchicha',
      cebolas: 'Cebollas',
      pimentoes: 'Pimientos',
      abacaxi: 'Piña',
      presunto: 'Jamón',
      espinafre: 'Espinaca',
      alcachofras: 'Alcachofas',
      cogumelos: 'Champiñones',
      anchovas: 'Anchoas'
    },
    foodItems: [
      {
        id: 0,
        name: "Pizza de Queso",
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
        name: "Pizza de Pollo",
        img: "/img/chicken-pizza.jpeg",
        section: "Pizza",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Pizza Vegetariana",
        section: "Pizza",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Hamburguesa",
        section: "Sándwich",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Griego",
        section: "Sándwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sándwich de Camarones",
        section: "Sándwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Papas Fritas",
        section: "Acompañamientos",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Refresco",
        section: "Bebidas",
        choices: ["Coca-Cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'es-MX',
    currency: 'MXN',
  },
  translations: {
    quantity: 'Cantidad: ',
    oqueparacomer: '¿Qué hay para comer?',
    itensnopedido: '¡artículo(s) en tu pedido!',
    order: {
      empty: 'Tu pedido parece estar bastante vacío.',
      yourorder: 'Tu Pedido:',
      subtotal: 'Subtotal',
      imposto: 'Impuesto',
      total: 'Total',
    },
    orderDialog: {
      ontheway: '¡Tu pedido está en camino!',
      confirmationemail: 'Has recibido un correo electrónico de confirmación de tu pedido. Gracias por elegir Sliceline.',
      stillhungry: 'Todavía tengo hambre',
    },
    navBar: {
      loggedin: 'Conectado',
      logout: 'Cerrar sesión',
      loginsignup: 'Iniciar sesión / Registrarse',
    },
    foodDialog: {
      complemento: '¿Te gustaría agregar algo?',
      update: 'Actualizar pedido: ',
      add: 'Agregar al pedido: ',
    }
  }
}

export default lang
