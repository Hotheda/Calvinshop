import React from "react"
import ReactDom from "react-dom"
import App from "./App"

function CalvinShop(){
  return(
    <App/>
  )
}

ReactDom.render(<CalvinShop/>, document.getElementById("root"));