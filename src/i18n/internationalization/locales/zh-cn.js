/**
 * 包含特定语言的翻译。
 * @module lang
 */

/**
 * 特定语言的翻译对象。
 * @type {object}
 * @property {object} translations - 包含应用程序各个部分的翻译。
 * @property {object} home - 首页的特定翻译。
 * @property {string} message - 葡萄牙语的问候消息。
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: "额外的奶酪", price: 0.5 },
      { id: 1, name: "辣香肠", price: 0.5 },
      { id: 2, name: "香肠", price: 0.5 },
      { id: 3, name: "洋葱", price: 0.5 },
      { id: 4, name: "彩椒", price: 0.5 },
      { id: 5, name: "菠萝", price: 0.5 },
      { id: 6, name: "火腿", price: 0.5 },
      { id: 7, name: "菠菜", price: 0.5 },
      { id: 8, name: "朝鲜蓟", price: 0.5 },
      { id: 9, name: "蘑菇", price: 0.5 },
      { id: 10, name: "凤尾鱼", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "奶酪披萨",
        img: "/img/pizza.png",
        type: 0, 
        section: "披萨",
        price: 1
      },
      {
        id: 1,
        name: "辣香肠披萨",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "披萨",
        price: 1.5
      },
      {
        id: 2,
        name: "鸡肉披萨",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "披萨",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "素食披萨",
        type: 0, 
        section: "披萨",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "汉堡",
        type: 1, 
        section: "三明治",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "希腊三明治",
        type: 1, 
        section: "三明治",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "虾三明治",
        type: 1, 
        section: "三明治",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "炸薯条",
        type: 1, 
        section: "配菜",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "汽水",
        type: 1, 
        section: "饮料",
        choices: ["可口可乐", "雪碧", "根啤"]
      }
    ],
  },
  config: {
    locale: 'zh-CN',
    currency: 'CNY',
    language: '中文（中国）',
    tax: 0.07,
  },
  translations: {
    quantity: '数量：',
    oqueparacomer: '有什么可以吃的？',
    itensnopedido: '您的订单中有item(s)！',
    order: {
      empty: '您的订单看起来很空。',
      yourorder: '您的订单：',
      subtotal: '小计',
      imposto: '税',
      total: '总计',
    },
    orderDialog: {
      ontheway: '您的订单正在路上！',
      confirmationemail: '您已收到订单确认邮件。感谢您选择Sliceline。',
      stillhungry: '我还饿',
    },
    navBar: {
      loggedin: '已登录',
      logout: '登出',
      loginsignup: '登录/注册',
    },
    foodDialog: {
      complemento: '您想要一些配料吗？',
      update: '更新订单：',
      add: '添加到订单：',
    },
    choice: { 'escolha': '选择一个' }
  }
}

/**
 * 导出翻译对象以在其他模块中使用。
 * @type {object}
 */
export default lang
