export function formatPrice(price) {
  return price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

export const foodItems = [
  {
    name: "Pizza de Queijo",
    img: "/img/pizza.png",
    section: "Pizza",
    price: 1
  },
  {
    name: "Pizza de Pepperoni",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Pizza de Frango",
    img: "/img/chicken-pizza.jpeg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/healthy-pizza.jpeg",
    name: "Pizza Veggie",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/burger.jpeg",
    name: "Hamburger",
    section: "Sanduíche",
    price: 3
  },
  { img: "/img/gyro.jpeg", name: "Grego", section: "Sanduíche", price: 4.5 },
  {
    img: "/img/sandwich.jpeg",
    name: "Sanduíche de Camarão",
    section: "Sanduíche",
    price: 6
  },
  {
    img: "/img/fries.jpeg",
    name: "Fritas",
    section: "Acompanhamentos",
    price: 1
  },
  {
    price: 1,
    name: "Refrigerante",
    section: "Drinks",
    choices: ["Coca-cola", "Sprite", "Root Beer"]
  }
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});

