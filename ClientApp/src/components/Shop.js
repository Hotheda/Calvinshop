import React, {useContext} from "react"
import {ProductsContext} from "./ProductsContext"


function Shop(){
    const [products, setProducts] = useContext(ProductsContext)
    //console.log(useContext(ProductsContext).productsList)
    function myClick(item){
        setProducts(products.map((product=>{
            if(item.id===product.id){
                product.inCart=!product.inCart
                return(
                    product
                )
            }
            else{
                return(
                    product
                )
            }
        })))
    }
    
    const product=products.map((item)=>{
        return (
            <div key={item.id} className="product_frame">
                <h3>{item.name}</h3>
                <img className= "product_img" alt="productimage" src={"./img/products/"+item.img}/>
                <p>{item.description}</p>
                <p><strong>{item.price}$</strong></p>
                <button onClick={()=>myClick(item)} >{(item.inCart) ? "In cart" : "Buy now"}</button>
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