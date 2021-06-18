import React,{useState} from "react"
import {Context} from "../Context"


function CartItem(props){
    const {removeFromCart} = useState(Context)
    const [hovered, setHovered] = useState(false)

    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"


    return (
        <div className ="cart-item"
        
        >
            <i
            className={iconClassName} 
            onClick = {()=> removeFromCart(props.item.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            
            >

            </i>
            
                <img src = {props.item.url} width = "150px"/>
                <p>$5.99</p>

            

        </div>
    )
}

export default CartItem