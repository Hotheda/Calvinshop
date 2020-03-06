import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"


function Shop(){
    //console.log(useContext(ProductsContext).productsList)
    const product=useContext(ProductsContext).productsList.map((item)=>{
        return (
            <div key={item.id} className="product_frame">
                <h3>{item.name}</h3>
                <img className= "product_img" alt="productimage" src={"./img/products/"+item.img}/>
                <p>{item.description}</p>
                <button onClick={()=>(console.log(item.name))} >Buy now</button>
            </div>
        )
    })
    return(
        <div>            
            <h1 className="shop_header">Products</h1>
            <div className="products">            
                {product}
            </div>
        </div>
    )
}

export default Shop