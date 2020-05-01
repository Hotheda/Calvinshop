import React from "react"

export default function ProductSizeDropdown(props){
    function onSizeChange(e){
        props.setSelectedSize(e.target.value)
    }

    return(
        <div>
            <select value={props.seletedSize} onChange={(e)=>onSizeChange(e)}>
                {props.item.size.map((myItem=>{
                    return( <option key={myItem} value={myItem}>{myItem}</option> )
                }))}
            </select>
        </div>
    )
}