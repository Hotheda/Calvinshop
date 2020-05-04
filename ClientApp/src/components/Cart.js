import React,{ useContext } from "react"
import { ProductsContext } from "./ProductsContext"
import {Link} from "react-router-dom"


function Cart(){
    const [/*productList*/, /*setproductList*/, cartList, setCartList] = useContext(ProductsContext);

    let cartItems = null
    let total=0

    // Checking number of items so we dont go negative or to big
    const handleNumberOfItems = (e,index)=>{
        var tempCart = [...cartList];
        if( parseInt(e.target.value)>0 && parseInt(e.target.value)<11 ){
            tempCart[index].inCart = parseInt(e.target.value);
        }
        setCartList([...tempCart]);
    }

    if(cartList.length!==0){        
        cartItems = cartList.map((item, index)=>{
            total+= (item.price * item.inCart)
            return (<div key={item.id}>
                        <li className="cartitem">
                            <input type="number" value={item.inCart} onChange={(e)=>handleNumberOfItems(e,index, )}/>
                            <img className= "product_img" alt="cart_image" src={"./img/products/"+item.img}/>
                            <p>{item.name} Size:{item.size}</p>
                            <p>Price:{item.price}$</p>
                            <button onClick={(e)=>{
                                let tempCart = [...cartList]
                                tempCart.splice(index,1)
                                setCartList(tempCart)
                            }
                            }>Remove</button>
                            <hr/>
                        </li>
                    </div>)
        })
    }

     /*************************
      * TODO ADD CHANGE LIST  *
      *************************/

    return(
        <div>
            <h1>Checkout</h1>
            <ul>
                <li className="cartitem"><input value="Qty"/><p alt="image_temp"></p><p>Product:</p><p>Price:</p></li>
                {!cartItems ? <h3>No products</h3> : cartItems}
                {/*cartItems*/}
            </ul>
            <h2>{total} $</h2>
            <div>
            {cartList.length!==0 ? <Link to="./checkout">Checkout</Link> : <Link to="./shop">Back to shop</Link>}
            </div>
        </div>
    )
}

export default Cart