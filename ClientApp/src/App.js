import React from "react"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from "./components/Shop"
import About from "./components/About"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import NotFound from "./components/Notfound"
import Confirm from "./components/Confirm"

import "./Styles.css"
import ProductsContextProvider from "./components/ProductsContext"

class App extends React.Component{    
    render(){
        console.log("url($)")
        return(
            <div className="mainContainer">
                <Router basename="/calvin">
                    <React.Fragment>
                        <ProductsContextProvider>
                            <Navbar/>
                            <Switch>
                                {/* <Route exact path="/calvin" component={Home} />
                                <Route path ="/calvin/shop" component={Shop} />
                                <Route path ="/calvin/about" component={About} />
                                <Route path = "/calvin/cart" component={Checkout} />
                                <Route component={NotFound} /> */}
                                <Route exact path="/" component={Home} />
                                <Route path ="/shop" component={Shop} />
                                <Route path ="/about" component={About} />
                                <Route path = "/cart" component={Cart} />
                                <Route path = "/checkout" component={Checkout} />
                                <Route path = "/confirm" component={Confirm} />
                                <Route component={NotFound} />
                            </Switch>
                        </ProductsContextProvider>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default App