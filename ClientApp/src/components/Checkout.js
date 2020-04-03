import React,{ useContext, useCallback } from "react"
import { ProductsContext } from "./ProductsContext"


function Checkout(){
    const [/*productList*/, /*setproductList*/, cartList, setCartList] = useContext(ProductsContext);

    let cartItems = null
    let total=0

    const handleNumberOfItems = useCallback( (e,index)=>{
        var tempCart = [...cartList];
        if( parseInt(e.target.value)>0 && parseInt(e.target.value)<11 ){
            tempCart[index].inCart = parseInt(e.target.value);
            console.log("funkar")
        }
        setCartList([...tempCart]);
    })

    if(cartList.length!==0){        
        cartItems = cartList.map((item, index)=>{
            total+= (item.price * item.inCart)
            return (<div key={item.id}>
                        <li>
                            <input type="number" value={item.inCart} onChange={(e)=>handleNumberOfItems(e,index, )}/>
                            <p>{item.name} Size:{item.size} Price:{item.price}$</p>
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
                {!cartItems ? <h3>No products</h3> : cartItems}
                {/*cartItems*/}
            </ul>
            <h2>{total} $</h2>
        </div>
    )
}

export default Checkout