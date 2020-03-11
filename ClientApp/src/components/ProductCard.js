import React, {useContext, useState} from "react"
import {ProductsContext} from "./ProductsContext"

function ProductCard(props){
    const [seletedSize, setSize]=useState(String(props.item.size[0]) )
    const [/*products*/, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)

    function addToCart(item){
        /***** Check if item is in cart  *****/
        var isInCart=false
        var newitem = JSON.parse(JSON.stringify(item))
        newitem.size = seletedSize
        newitem.id = item.id+"-"+seletedSize

        if(cartList.length!==0){
            cartList.forEach(product => {
                if(newitem.id===product.id){
                    product.inCart++;
                    isInCart=true
                    alert(item.name+" added to cart")
                }
            });
        }
        if(!isInCart){
            setCartList([...cartList, newitem])
            alert(item.name+" added to cart")
        }
        console.log(newitem)
    }

    function onSizeChange(e){
        setSize(e.target.value)
    }

    return (        
        <div className="product_frame">
            <h3>{props.item.name}</h3>
            <img className= "product_img" alt="productimage" src={"./img/products/"+props.item.img}/>
            <p>{props.item.description}</p>
            <p><strong>{props.item.price}$</strong></p>
            <select value={seletedSize} onChange={(e)=>onSizeChange(e)}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>
            
            <button onClick={()=>addToCart(props.item)} >Buy now</button>
        </div>
    )
}

export default ProductCard