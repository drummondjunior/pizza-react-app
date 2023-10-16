import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { } from './I18n/internationalization'

// Crie uma raiz
const root = createRoot(document.getElementById("root"))

// Renderize o App na raiz
root.render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
