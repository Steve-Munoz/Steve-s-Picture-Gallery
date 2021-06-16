import React,{useState,useContext} from "react"
import {Context} from "../Context"

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite, cartItems, removeFromCart, addToCart} = useContext(Context)

    function heartIcon(){
        if(props.img.isFavorite){
            return <i className ="ri-heart-fill favorite" onClick={()=>toggleFavorite(props.img.id)}></i>
            
        }
        else if(hovered){
            return <i className ="ri-heart-line favorite" onClick={()=>toggleFavorite(props.img.id)}></i>
        }
    }
   
    function cartIcon(id){
        const alreadyInCart = cartItems.some(item=> item.id !== id)
        if(alreadyInCart){
            return <i className = "ri-shopping-cart-fill cart" onClick={()=>removeFromCart(props.img.id)}></i>
        }
        else if (hovered){
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(props.img)}></i>
        }
    }
    return (
        <div className={`${props.className} image-container`}
        onMouseEnter = {()=>setHovered(true)}
        onMouseLeave = {()=>setHovered(false)}
        >
            
            <img src={props.img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image
