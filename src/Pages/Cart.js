import React,{useState,useContext} from "react"
import {Context} from "../Context"
import CartItem from "../Components/CartItem"



function Cart(){

    const [buttonText, setButtontext] = useState("Place Order")

    const {cartItems, emptyCart} = useContext(Context)
    const totalCost = cartItems.length * 5.99
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    const cartElements = cartItems.map(item=><CartItem key ={item.id} item = {item}/>)
    console.log(cartElements)

    function placeOrder(){
        setButtontext("..Processing")
        setTimeout(()=>{
            emptyCart()
            setButtontext("Place Order")
        },2000)
    }


 

    return(
        <main className="cart-page">
            <h1>Check out</h1>
            {cartElements}
            <p className="total-cost">Total:{totalCostDisplay} </p>
            <div className="order-button">
                {cartItems.length > 0 ? <button onClick ={()=>placeOrder()}>
                    {buttonText}
                </button> : <h3>Make sure to add items to your cart!</h3>}
                
            </div>
            
        </main>
    )
}

export default Cart