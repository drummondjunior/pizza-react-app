/**
 * 特定の言語の翻訳を含む。
 * @module lang
 */

/**
 * 特定の言語の翻訳オブジェクト。
 * @type {object}
 * @property {object} translations - アプリケーションのさまざまな部分の翻訳を含む。
 * @property {object} home - ホームページの特定の翻訳。
 * @property {string} message - ポルトガル語の挨拶メッセージ。
 */
const lang = {
  menu: {
    toppings: [
      { id: 0, name: "エキストラチーズ", price: 0.5 },
      { id: 1, name: "ペパロニ", price: 0.5 },
      { id: 2, name: "ソーセージ", price: 0.5 },
      { id: 3, name: "玉ねぎ", price: 0.5 },
      { id: 4, name: "ピーマン", price: 0.5 },
      { id: 5, name: "パイナップル", price: 0.5 },
      { id: 6, name: "ハム", price: 0.5 },
      { id: 7, name: "ほうれん草", price: 0.5 },
      { id: 8, name: "アーティチョーク", price: 0.5 },
      { id: 9, name: "マッシュルーム", price: 0.5 },
      { id: 10, name: "アンチョビ", price: 0.5 }
    ],
    foodItems: [
      {
        id: 0,
        name: "チーズピザ",
        img: "/img/pizza.png",
        type: 0, 
        section: "ピザ",
        price: 1
      },
      {
        id: 1,
        name: "ペパロニピザ",
        img: "/img/pizza2.jpeg",
        type: 0, 
        section: "ピザ",
        price: 1.5
      },
      {
        id: 2,
        name: "チキンピザ",
        img: "/img/chicken-pizza.jpeg",
        type: 0, 
        section: "ピザ",
        price: 2
      },
      {
        id: 3,
        img: "/img/healthy-pizza.jpeg",
        name: "ベジタブルピザ",
        type: 0, 
        section: "ピザ",
        price: 2
      },
      {
        id: 4,
        img: "/img/burger.jpeg",
        name: "ハンバーガー",
        type: 1, 
        section: "サンドイッチ",
        price: 3
      },
      {
        id: 5,
        img: "/img/gyro.jpeg",
        name: "ギリシャ",
        type: 1, 
        section: "サンドイッチ",
        price: 4.5
      },
      {
        id: 6,
        img: "/img/sandwich.jpeg",
        name: "シュリンプサンドイッチ",
        type: 1, 
        section: "サンドイッチ",
        price: 6
      },
      {
        id: 7,
        img: "/img/fries.jpeg",
        name: "フライドポテト",
        type: 1, 
        section: "サイド",
        price: 1
      },
      {
        id: 8,
        price: 1,
        name: "ソーダ",
        type: 1, 
        section: "ドリンク",
        choices: ["コカコーラ", "スプライト", "ルートビア"]
      }
    ],
  },
  config: {
    locale: 'ja-JP',
    currency: 'JPY',
    language: '日本語',
    tax: 0.07,
  },
  translations: {
    quantity: '数量：',
    oqueparacomer: '何を食べる？',
    itensnopedido: '注文のアイテム！',
    order: {
      empty: '注文が空です。',
      yourorder: 'あなたの注文：',
      subtotal: '小計',
      imposto: '税',
      total: '合計',
    },
    orderDialog: {
      ontheway: '注文は途中です！',
      confirmationemail: '注文の確認メールを送信しました。Slicelineを選んでいただきありがとうございます。',
      stillhungry: 'まだお腹が空いています',
    },
    navBar: {
      loggedin: 'ログイン済み',
      logout: 'ログアウト',
      loginsignup: 'ログイン/サインアップ',
    },
    foodDialog: {
      complemento: 'トッピングはいかがですか？',
      update: '注文を更新：',
      add: '注文に追加：',
    },
    choice: { 'escolha': '一つ選ぶ' }
  }
}

/**
 * 他のモジュールで使用するための翻訳オブジェクトをエクスポートします。
 * @type {object}
 */
export default lang
