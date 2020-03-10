import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"

function ProductCard(props){
    const [/*products*/, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)

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

    function onSizeChange(e){
        console.log(e)
    }

    return (
        <div className="product_frame">
            <h3>{props.item.name}</h3>
            <img className= "product_img" alt="productimage" src={"./img/products/"+props.item.img}/>
            <p>{props.item.description}</p>
            <p><strong>{props.item.price}$</strong></p>
            <select onChange={()=>onSizeChange}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>
            
            <button onClick={()=>addToCart(props.item)} >Buy now</button>
        </div>
    )
}

export default ProductCard