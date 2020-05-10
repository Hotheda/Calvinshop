import React, { useState, useEffect } from "react"
import ProductSizeDropdown from "./ProductSizeDropdown"

export default function ProductDetail(props){
    const [numberOfimage, setNumberOfImage] = useState(0)
    const [currentImage, setCurrentImage] = useState(1)

    const prevImage=()=>{
        if(currentImage<=1)
            setCurrentImage(numberOfimage)
        else
            setCurrentImage(currentImage-1)
    }
    const nextImage=()=>{
        if((currentImage+1) > numberOfimage)
            setCurrentImage(1)
        else
            setCurrentImage(currentImage+1)        
    }

    const checkFile=(fileName)=>{
        var http = new XMLHttpRequest()
        http.open("HEAD", "./img/products/"+props.item.img+"_"+fileName+".jpg", false)
        http.send()
        if(http.status===404)
            return false
        else
            return true
    }

    useEffect(()=>{
        var numberToCheck=1
        while(true){
            numberToCheck+=1;
            if(checkFile(numberToCheck))
                setNumberOfImage(numberToCheck)
            else
                return
        }
    },[])



    return(
        <div className="product_details">
            <div className="product_details_header">
                <h1>{props.item.name}</h1>
                <button className="product_details_back_btn" onClick={()=>props.setShowDetails(false)}>&times;</button>
            </div>
            <div className="product_details_slide">
                <p>&lt;</p>
                <img className= "product_details_img" alt="productimage" src={"./img/products/"+props.item.img+"_"+currentImage+".jpg"}/>
                <p>&gt;</p>
                <div className="product_details_slide_btn">
                    <div onClick={nextImage}></div>
                    <div onClick={prevImage}></div>
                </div>
            </div>
            <p className="product_details_description">{props.item.description}</p>
            <ProductSizeDropdown item={props.item} seletedSize={props.seletedSize} setSelectedSize={props.setSelectedSize}/>
            <p className="product_details_price">{props.item.price} $</p>

            <button className="product_details_add_btn" onClick={()=>props.addToCart(props.item, props.seletedSize)}>{props.buttonText}</button>
        </div>
    )
}