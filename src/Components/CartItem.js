import React,{useState, useContext} from "react"
import {Context} from "../Context"


function CartItem(){
    const {removeFromCart} = useState(Context)
    const [hovered, setHovered] = useState(false)

    const iconClassName = hovered ? ri-delete-bin-line : ri-delete-bin-fill;

  

    
    return (
        <div
        
        >
            <i
            onClick = {()=> removeFromCart(props.item.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={iconClassName} 
            >

            </i>
            
                <img src = {props.img.url} width = "150px"/>
                <p>$5.99</p>

            

        </div>
    )
}

export default CartItem