import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"
import ProductCard from "./ProductCard"


function Shop(){
    const [products, /*setProducts*/, /*cartList*/, /*setCartList*/] = useContext(ProductsContext)

    /* const product=products.map((item)=>{
        return (
            <div key={item.id} className="product_frame">
                <h3>{item.name}</h3>
                <img className= "product_img" alt="productimage" src={"./img/products/"+item.img}/>
                <p>{item.description}</p>
                <p><strong>{item.price}$</strong></p>
                <select onChange={this.onSizeChange}>
                    {item.size.map((myItem=>{
                        return( <option key={myItem} value={myItem}>{myItem}</option> )
                    }))}
                </select>
                
                <button onClick={()=>addToCart(item)} >"Buy now"</button>
            </div>
        )
    }) */

    /**************************************
     * TODO ADD SELECTED SIZE TO CARTITEM *
     **************************************/
    
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