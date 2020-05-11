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
        if( parseInt(e.target.value)>0 && parseInt(e.target.value)<21 ){
            tempCart[index].inCart = parseInt(e.target.value);
        }
        setCartList([...tempCart]);
    }

    if(cartList.length!==0){        
        cartItems = cartList.map((item, index)=>{
            total+= (item.price * item.inCart)
                return(
                    <tr  key={item.id} className="cart_item">
                        <td className="cart_image">
                            <img alt="cart_image" src={"./img/products/"+item.img+"_small.jpg"}/>
                        </td>
                        <td>{item.name} Size:{item.size}</td>
                        <td>
                            <input type="number" value={item.inCart} onChange={(e)=>handleNumberOfItems(e,index, )}
                                                    onClick={e=>e.target.select()} />
                        </td>
                        <td>{item.price}$</td>
                        <td>
                            {/* Change to trashcan icon */}
                            <button onClick={(e)=>{
                                let tempCart = [...cartList]
                                tempCart.splice(index,1)
                                setCartList(tempCart)
                            }
                            }>Remove</button>
                        </td>
                    </tr>
                )
        })
    }

     /*************************
      * TODO ADD CHANGE LIST  *
      *************************/
    if(cartList.length===0){
        return(
            <div className = "cart_main">
                <h1>No products in cart</h1>
                <Link className="cart_next_btn" to="./shop">Back to shop</Link>
             </div>
        )
    }
    else
    
    return(
        <div className = "cart_main">
            <h1>Cart</h1>
            <table  className="cart_table">
                <tr className="cart_item">
                    <th className="image_temp"> </th>
                    <th>Product:</th>
                    <th>Qty</th>
                    <th>Price:</th>
                    <th> </th>
                </tr>
                {!cartItems ? <h3>No products</h3> : cartItems}
                {/*cartItems*/}
            </table>
            <h2>{total} $</h2>
            <div>
                <Link className="cart_next_btn" to="./checkout">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart