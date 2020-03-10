import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"


function Shop(){
    const [products, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)

    function addToCart(item){
        /***** Check if item is in cart  *****/
        var isInCart=false
        if(cartList.length!==0){
            cartList.forEach(product => {
                if(item.id===product.id){
                    product.inCart++;
                    isInCart=true
                }
            });
        }
        if(!isInCart){
            setCartList([...cartList, item])
            alert(item.name+" added to cart")
        }
    }
   
    const product=products.map((item)=>{
        return (
            <div key={item.id} className="product_frame">
                <h3>{item.name}</h3>
                <img className= "product_img" alt="productimage" src={"./img/products/"+item.img}/>
                <p>{item.description}</p>
                <p><strong>{item.price}$</strong></p>
                <select id="size">
                    {item.size.map((myItem=>{
                        return( <option key={myItem} value={myItem}>{myItem}</option> )
                    }))}
                </select>
                
                <button onClick={()=>addToCart(item)} >{/*(item.inCart) ? "In cart" : */"Buy now"}</button>
            </div>
        )
    })

    /**************************************
     * TODO ADD SELECTED SIZE TO CARTITEM *
     **************************************/
    
    return(
        <div>            
            <h1 className="shop_header">Products</h1>
            <div className="products">            
                {product}
            </div>
        </div>
    )
}

export default Shop