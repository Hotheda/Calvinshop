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

    const CheckPrevImage=()=>{
        if(currentImage<=1)
            return numberOfimage
        else
            return (currentImage-1)
    }
    const CheckNextImage=()=>{
        if((currentImage+1) > numberOfimage)
            return 1
        else
            return(currentImage+1)
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
        if(props.item.numberOfImg!==0){
            setNumberOfImage(props.item.numberOfImg)
            return;
        }
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
                <p>&#10094;</p>
                <img className= "product_details_img_left" alt="productimage" src={"./img/products/"+props.item.img+"_"+CheckPrevImage()+".jpg"}/>
                <img className= "product_details_img" alt="productimage" src={"./img/products/"+props.item.img+"_"+currentImage+".jpg"}/>
                <img className= "product_details_img_right" alt="productimage" src={"./img/products/"+props.item.img+"_"+CheckNextImage()+".jpg"}/>
                <p>&#10095;</p>
                <div className="product_details_slide_btn">
                    <div onClick={prevImage}></div>
                    <div onClick={nextImage}></div>
                </div>
            </div>
            <p className="product_details_description">{props.item.description}</p>
            <p className="product_details_details">{props.item.details}</p>
            <ProductSizeDropdown item={props.item} seletedSize={props.seletedSize} setSelectedSize={props.setSelectedSize}/>
            <p className="product_details_price">{props.item.price} $</p>

            <button className="product_details_add_btn" onClick={()=>props.addToCart(props.item, props.seletedSize)}>{props.buttonText}</button>
        </div>
    )
}