import React from "react"
import products from "./products.json"
import {ProductsContext} from "./ProductsContext"


class Shop extends React.Component{
    static contextType = ProductsContext
    
    render(){
        console.log(this.context.productsList)
        const product=this.context.productsList.map((item)=>{
            return (
                <div key={item.id} className="product_frame">
                    <h3>{item.name}</h3>
                    <img className= "product_img" alt="productimage" src={"./img/products/"+item.img}/>
                    <p>{item.description}</p>
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
}

export default Shop