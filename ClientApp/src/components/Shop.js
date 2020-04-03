import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"
import ProductCard from "./ProductCard"


function Shop(){
    const [products, /*setProducts*/, /*cartList*/, /*setCartList*/] = useContext(ProductsContext)

    var productCards = products.map(item=><ProductCard key={item.id} item={item}/>)
    return(
        <div>            
            <h1 className="shop_header">Products</h1>
            <div className="products">            
                {productCards}
            </div>
        </div>
    )
}

export default Shop