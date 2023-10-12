import { useEffect } from "react";

export function useTitle({ openFood, orders }) {
  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
          ? `O que tem para comer?`
          : `[${orders.length}] itens no seu pedido! `
    }
  });
}
