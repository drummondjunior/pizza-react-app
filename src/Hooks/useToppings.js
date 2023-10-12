import { useState } from "react";

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  };
}

const toppingsList = [
  "Queijo Extra",
  "Pepperoni",
  "Linguiça",
  "Cebolas",
  "Pimentões",
  "Abacaxi",
  "Presunto",
  "Espinafre",
  "Alcachofras",
  "Cogumelos",
  "Anchovas"
];

function getDefaultToppings() {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }));
}
