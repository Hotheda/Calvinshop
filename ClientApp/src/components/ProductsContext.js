import React, { createContext } from "react";
import products from "./products.json"

export const ProductsContext = createContext();

class ProductsContextProvider extends React.Component {
    state = {
        productsList: products.products.map(product => {
            product.inCart= false    
            return(product)
        })
    }
    
    render() {
        return(
            <ProductsContext.Provider value={{...this.state}}>
                {this.props.children}
            </ProductsContext.Provider>
        )
    }
}

export default ProductsContextProvider