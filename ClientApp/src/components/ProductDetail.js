import React from "react"
import ProductSizeDropdown from "./ProductSizeDropdown"

export default function ProductDetail(props){
    
    return(
        <div className="product_details">
            <div className="product_details_header">
                <h1>{props.item.name}</h1>
                <button className="product_details_back_btn" onClick={()=>props.setShowDetails(false)}>X</button>
            </div>
            <img className= "product_details_img" alt="productimage" src={"./img/products/"+props.item.img}/>
            <div>
                <p>{props.item.description}</p>
                <p>{props.item.price}$</p>
            </div>
            <ProductSizeDropdown item={props.item} seletedSize={props.seletedSize} setSelectedSize={props.setSelectedSize}/>

            <button className="product_details_add_btn" onClick={()=>props.addToCart(props.item, props.seletedSize)}>{props.buttonText}</button>
        </div>
    )
}