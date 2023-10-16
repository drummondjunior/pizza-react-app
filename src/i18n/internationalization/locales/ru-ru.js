/**
 * Содержит переводы для конкретного языка.
 * @module lang
 */

/**
 * Объект переводов на конкретном языке.
 * @type {object}
 * @property {object} translations - Содержит переводы для различных частей приложения.
 * @property {object} home - Специфические переводы для главной страницы.
 * @property {string} message - Приветственное сообщение на португальском.
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: "Дополнительный сыр", price: 0.5 },
      { id: 1, name: "Пепперони", price: 0.5 },
      { id: 2, name: "Колбаски", price: 0.5 },
      { id: 3, name: "Лук", price: 0.5 },
      { id: 4, name: "Перцы", price: 0.5 },
      { id: 5, name: "Ананас", price: 0.5 },
      { id: 6, name: "Ветчина", price: 0.5 },
      { id: 7, name: "Шпинат", price: 0.5 },
      { id: 8, name: "Артишоки", price: 0.5 },
      { id: 9, name: "Грибы", price: 0.5 },
      { id: 10, name: "Анчоусы", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "Пицца с сыром",
        img: "/img/pizza.png",
        type: 0, 
        section: "Пицца",
        price: 1
      },
      {
        id: 1,
        name: "Пицца Пепперони",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "Пицца",
        price: 1.5
      },
      {
        id: 2,
        name: "Пицца с курицей",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "Пицца",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "Вегетарианская пицца",
        type: 0, 
        section: "Пицца",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "Гамбургер",
        type: 1, 
        section: "Сэндвич",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "Греческий",
        type: 1, 
        section: "Сэндвич",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "Сэндвич с креветками",
        type: 1, 
        section: "Сэндвич",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "Картофель фри",
        type: 1, 
        section: "Гарниры",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "Газировка",
        type: 1, 
        section: "Напитки",
        choices: ["Кока-кола", "Спрайт", "Рут Бир"]
      }
    ],
  },
  config: {
    locale: 'ru-RU',
    currency: 'RUB',
    language: 'Русский (RU)',
    tax: 0.1,
  },
  translations: {
    quantity: 'Количество: ',
    oqueparacomer: 'Что поесть?',
    itensnopedido: 'пункт(ов) в вашем заказе!',
    order: {
      empty: 'Ваш заказ выглядит довольно пустым.',
      yourorder: 'Ваш заказ:',
      subtotal: 'Промежуточный итог',
      imposto: 'Налог',
      total: 'Всего',
    },
    orderDialog: {
      ontheway: 'Ваш заказ в пути!',
      confirmationemail: 'Вы получили подтверждающее письмо о вашем заказе. Спасибо, что выбрали Sliceline.',
      stillhungry: 'Я все еще голоден',
    },
    navBar: {
      loggedin: 'В системе',
      logout: 'Выйти',
      loginsignup: 'Войти / Зарегистрироваться',
    },
    foodDialog: {
      complemento: 'Хотите что-то добавить?',
      update: 'Обновить заказ: ',
      add: 'Добавить к заказу: ',
    },
    choice: { 'escolha': 'Выберите один' }
  }
}

/**
 * Экспортирует объект переводов для использования в других модулях.
 * @type {object}
 */
export default lang
