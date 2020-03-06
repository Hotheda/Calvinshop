import React, { createContext, useState } from "react";
import products from "./products.json"

export const ProductsContext = createContext();

function ProductsContextProvider(props){
    const ProductListState=products.products.map(product => {
        if(product.inCart===null)
            product.inCart = false
        return(product)
    })
    const [productList, setProductList] = useState(ProductListState)

    const CartListState=[]
    const [cartList, setCartList] = useState(CartListState)
    
    
    return(
        <ProductsContext.Provider value={[productList, setProductList,cartList, setCartList]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider