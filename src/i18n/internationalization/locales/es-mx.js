const lang = {
  menu: {
    toppings: [
      { id: 0, name: "Queso Extra", price: 0.5 },
      { id: 1, name: "Pepperoni", price: 0.5 },
      { id: 2, name: "Salchicha", price: 0.5 },
      { id: 3, name: "Cebollas", price: 0.5 },
      { id: 4, name: "Pimientos", price: 0.5 },
      { id: 5, name: "Piña", price: 0.5 },
      { id: 6, name: "Jamón", price: 0.5 },
      { id: 7, name: "Espinacas", price: 0.5 },
      { id: 8, name: "Alcachofas", price: 0.5 },
      { id: 9, name: "Champiñones", price: 0.5 },
      { id: 10, name: "Anchoas", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "Pizza de Queso",
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
        name: "Pizza de Pollo",
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
        name: "Hamburguesa",
        type: 1, 
        section: "Sándwich",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Griego",
        type: 1, 
        section: "Sándwich",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Sándwich de Camarones",
        type: 1, 
        section: "Sándwich",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Papas Fritas",
        type: 1, 
        section: "Acompañamientos",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Refresco",
        type: 1, 
        section: "Bebidas",
        choices: ["Coca-Cola", "Sprite", "Root Beer"]
      }
    ],
  },
  config: {
    locale: 'es-MX',
    currency: 'MXN',
    language: 'Español (MX)',
    tax: 0.07,
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
    },
    choice: { 'escolha': 'Elige uno' }
  }
}

export default lang
