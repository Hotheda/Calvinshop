import React from "react"
import products from "./products.json"

function Shop(){
    const product=products.products.map((item)=>{
        return (
            <div key={item.id} className="product_frame">
                <h3>{item.name}</h3>
                <img className= "product_img" src={"./img/products/"+item.img}/>
                <p>{item.description}</p>
            </div>
        )
    })

    return(
        <div>            
            <h1 className="shop_header">Here's the shop and all the projects</h1>
            <div className="products">            
                {product}
            </div>
        </div>
    )
}

export default Shop