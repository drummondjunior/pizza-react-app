const lang = {
  menu: {
    toppings: [
      { id: 0, name: "추가 치즈", price: 0.5 },
      { id: 1, name: "페퍼로니", price: 0.5 },
      { id: 2, name: "소시지", price: 0.5 },
      { id: 3, name: "양파", price: 0.5 },
      { id: 4, name: "피망", price: 0.5 },
      { id: 5, name: "파인애플", price: 0.5 },
      { id: 6, name: "햄", price: 0.5 },
      { id: 7, name: "시금치", price: 0.5 },
      { id: 8, name: "아티초크", price: 0.5 },
      { id: 9, name: "버섯", price: 0.5 },
      { id: 10, name: "멸치", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "치즈 피자",
        img: "/img/pizza.png",
        type: 0, 
        section: "피자",
        price: 1
      },
      {
        id: 1,
        name: "페페로니 피자",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "피자",
        price: 1.5
      },
      {
        id: 2,
        name: "치킨 피자",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "피자",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "채소 피자",
        type: 0, 
        section: "피자",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "햄버거",
        type: 1, 
        section: "샌드위치",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "그리스 샌드위치",
        type: 1, 
        section: "샌드위치",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "새우 샌드위치",
        type: 1, 
        section: "샌드위치",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "감자 튀김",
        type: 1, 
        section: "반찬",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "소다",
        type: 1, 
        section: "음료",
        choices: ["코카콜라", "스프라이트", "루트 비어"]
      }
    ],
  },
  config: {
    locale: 'ko-KR',
    currency: 'KRW',
    language: '한국어 (KR)',
    tax: 0.07,
  },
  translations: {
    quantity: '수량: ',
    oqueparacomer: '무엇을 드시겠습니까?',
    itensnopedido: '주문 항목!',
    order: {
      empty: '주문이 비어 있습니다.',
      yourorder: '당신의 주문:',
      subtotal: '소계',
      imposto: '세금',
      total: '총계',
    },
    orderDialog: {
      ontheway: '주문이 출발했습니다!',
      confirmationemail: '주문 확인 이메일을 받았습니다. Sliceline을 선택해 주셔서 감사합니다.',
      stillhungry: '아직 배가 고파요',
    },
    navBar: {
      loggedin: '로그인됨', // Logged in
      logout: '로그아웃',   // Logout
      loginsignup: '로그인 / 가입하기', // Login / Sign up
      loading: '로딩 중...'  // Loading...
    },
    foodDialog: {
      complemento: '추가 토핑을 원하십니까?',
      update: '주문 업데이트: ',
      add: '주문에 추가: ',
    },
    choice: { 'escolha': '하나를 선택하십시오' }
  }
}

export default lang
