import React from "react"

export default function ProductSizeDropdown(props){
    function onSizeChange(e){
        props.setSelectedSize(e.target.value)
    }

    if(props.item.size.length<=1)
    return(
        <p className="product_size_dropdown">{props.item.size[0]}</p>
    )
    return(
        <div>
            <select className="product_size_dropdown" value={props.seletedSize} onChange={(e)=>onSizeChange(e)}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>
        </div>
    )
}