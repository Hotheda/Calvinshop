import React, {useContext, useState} from "react"
import {ProductsContext} from "./ProductsContext"

function ProductCard(props){
    const [seletedSize, setSize]=useState(String(props.item.size[0]) )
    const [/*products*/, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)
    const [buttonText, setButtonText] = useState("Buy now")

    function addToCart(item){
        /***** Check if item is in cart  *****/
        var tempCart = cartList
        var isInCart=false
        var newitem = JSON.parse(JSON.stringify(item))
        newitem.size = seletedSize
        newitem.id = item.id+"-"+seletedSize

        if(tempCart.length!==0){
            tempCart.forEach(product => {
                if(newitem.id===product.id){
                    product.inCart++;
                    isInCart=true
                    changeButtonText()
                }
            });
        }
        if(!isInCart){
            setCartList([...tempCart, newitem])
            changeButtonText()
        }else
            setCartList([...tempCart])

    }

    function changeButtonText(){
        setButtonText("Added to cart")
        setTimeout(()=>{
            setButtonText("Buy now")
        },1500)
    }


    function onSizeChange(e){
        setSize(e.target.value)
    }

    return (        
        <div className="product_frame">
            <img className= "product_img" alt="productimage" src={"./img/products/"+props.item.img}/>
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>
            <select value={seletedSize} onChange={(e)=>onSizeChange(e)}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>
            <p><strong>{props.item.price}$</strong></p>
            <button onClick={()=>addToCart(props.item)} >{buttonText}</button>
        </div>
    )
}

export default ProductCard