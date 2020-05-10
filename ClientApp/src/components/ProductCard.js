import React, {useContext, useState} from "react"
import {ProductsContext} from "./ProductsContext"
import ProductDetail from "./ProductDetail"
import ProductSizeDropdown from "./ProductSizeDropdown"

function ProductCard(props){
    const [seletedSize, setSelectedSize]=useState(String(props.item.size[0]) )
    const [/*products*/, /*setProducts*/, cartList, setCartList] = useContext(ProductsContext)
    const [buttonText, setButtonText] = useState("Add to cart")
    const [showDetails, setShowDetails] = useState(false)

    const addToCart=(item, size)=>{
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

    const changeButtonText=()=>{
        setButtonText("Added")
        setTimeout(()=>{
            setButtonText("Add to cart")
        },1500)
    }

    return (
        <div>
            {showDetails ? <div  onClick={()=>setShowDetails(false)} className="product_details_overlay"> </div> : <div> </div> }
            <div className="product_card_frame">
                <div className="product_card" onClick={()=>setShowDetails(true)}>
                    <img className= "product_card_img" alt="productimage" src={"./img/products/"+props.item.img+"_small.jpg"}/>
                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                </div>
                    <ProductSizeDropdown item={props.item} seletedSize={seletedSize} setSelectedSize={setSelectedSize}/>
                    <p className="product_card_price">{props.item.price}$</p>
                    <button className="product_card_add_btn" onClick={()=>addToCart(props.item, seletedSize)} >{buttonText}</button>
                {showDetails && <ProductDetail setShowDetails={setShowDetails} item={props.item} addToCart={addToCart}
                                                seletedSize={seletedSize} setSelectedSize={setSelectedSize}
                                                buttonText={buttonText}/>}
            </div>
        </div>
    )
}

export default ProductCard