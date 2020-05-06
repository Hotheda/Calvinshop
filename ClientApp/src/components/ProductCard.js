import React, {useContext, useState} from "react"
import {ProductsContext} from "./ProductsContext"
import ProductDetail from "./ProductDetail"
import ProductSizeDropdown from "./ProductSizeDropdown"

function ProductCard(props){
    const [seletedSize, setSelectedSize]=useState(String(props.item.size[0]) )
    const [/*products*/, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)
    const [buttonText, setButtonText] = useState("Buy now")
    const [showDetails, setShowDetails] = useState(false)

    function addToCart(item, size){
        /***** Check if item is in cart  *****/
        var tempCart = cartList
        var isInCart=false
        var newitem = JSON.parse(JSON.stringify(item))
        newitem.size = size
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


    return (
        <div className="product_frame">
            <div className="product_details_small" onClick={()=>setShowDetails(true)}>
                <img className= "product_img" alt="productimage" src={"./img/products/"+props.item.img}/>
                <h3>{props.item.name}</h3>
                <p>{props.item.description}</p>
                {/*}
                <select value={seletedSize} onChange={(e)=>onSizeChange(e)}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>*/}
            </div>
                <ProductSizeDropdown item={props.item} seletedSize={seletedSize} setSelectedSize={setSelectedSize}/>
                <p className="product_price_small">{props.item.price}$</p>
                <button onClick={()=>addToCart(props.item, seletedSize)} >{buttonText}</button>
            {showDetails && <ProductDetail setShowDetails={setShowDetails} item={props.item} addToCart={addToCart}
                                            seletedSize={seletedSize} setSelectedSize={setSelectedSize}
                                            buttonText={buttonText}/>}
        </div>
    )
}

export default ProductCard