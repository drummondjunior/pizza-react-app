import { useEffect } from "react";
import { Translator } from '../I18n'

export function useTitle({ openFood, orders }) {

  let oqueparacomer = Translator({ path: "oqueparacomer" })
  let itensnopedido = Translator({ path: "itensnopedido" })

  useEffect(() => {
    if (openFood) {
      document.title = openFood.name;
    } else {
      document.title =
        orders.length === 0
        ? `${oqueparacomer}`
        : `${orders.length} ${itensnopedido}`
    }
  });
}
