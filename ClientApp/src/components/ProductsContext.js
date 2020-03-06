import React, { createContext, useState } from "react";
import products from "./products.json"

export const ProductsContext = createContext();

function ProductsContextProvider(props){
    const productsList=products.products.map(product => {
        if(product.inCart===null)
            product.inCart = false
        return(product)
    })
    const [productList, setProductList] = useState(productsList)    
    
    
    return(
        <ProductsContext.Provider value={[productList, setProductList]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider