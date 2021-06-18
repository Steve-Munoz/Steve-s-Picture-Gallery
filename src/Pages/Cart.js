import React,{useContext} from "react"
import {Context} from "../Context"


function Cart(){

    const {cartItems} = useContext(Context)
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})


 

    return(
        <div className="cart-page">
            <div className ="total-cost">
                Total: {totalCostDisplay}

            </div>
            
        </div>
    )
}

export default Cart