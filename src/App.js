import React from "react"
import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { Menu } from "./Menu/Menu"
import { FoodDialog } from "./FoodDialog/FoodDialog"
import { GlobalStyle } from "./Styles/GlobalStyle"
import { Order } from "./Order/Order"
import { OrderDialog } from "./Order/OrderDialog"
import { useOpenFood } from "./Hooks/useOpenFood"
import { useOrders } from "./Hooks/useOrders"
import { useTitle } from "./Hooks/useTitle"
import { useAuthentication } from "./Hooks/useAuthentication"
import { useOrderDialog } from "./Hooks/useOrderDialog"
import { useTranslations } from "./Hooks/useTranslations"

function App() {
  const locale = useTranslations()
  const openFood = useOpenFood(locale)
  const orders = useOrders(locale)
  const auth = useAuthentication()
  const orderDialog = useOrderDialog()

  useTitle({ ...openFood, ...orders })

  return (
    <>
      <GlobalStyle />
      <OrderDialog { ...orderDialog } { ...orders } />
      <FoodDialog { ...openFood } { ...orders } locale={ locale } />
      <Navbar { ...auth } />
      <Order { ...orders } { ...openFood } { ...auth } { ...orderDialog } />
      <Banner />
      <Menu { ...openFood } />
    </>
  )
}

export default App;


