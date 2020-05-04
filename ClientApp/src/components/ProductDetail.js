import React from "react"
import ProductSizeDropdown from "./ProductSizeDropdown"

export default function ProductDetail(props){
    
    return(
        <div className="product_details">
            <img className= "product_img" alt="productimage" src={"./img/products/"+props.item.img}/>
            <div>
                <h1>{props.item.name}</h1>
                <p>{props.item.description}</p>
                <p>{props.item.price}$</p>
            </div>
            <ProductSizeDropdown item={props.item} seletedSize={props.seletedSize} setSelectedSize={props.setSelectedSize}/>

            <button onClick={()=>props.addToCart(props.item, props.seletedSize)}>{props.buttonText}</button>
            <button onClick={()=>props.setShowDetails(false)}>Back to shop</button>
        </div>
    )
}