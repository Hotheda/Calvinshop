import React from "react"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"

class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Home/>
                <Shop/>
                <About/>
            </div>
        )
    }
}

export default App