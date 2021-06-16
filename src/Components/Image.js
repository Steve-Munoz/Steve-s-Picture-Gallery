import React,{useState,useContext} from "react"
import {Context} from "../Context"

function Image(props) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    function heartIcon(){
        if(props.img.isFavorite){
            return <i className ="ri-heart-fill favorite" onClick={()=>toggleFavorite(props.img.id)}></i>
            
        }
        else if(hovered){
            return <i className ="ri-heart-line favorite" onClick={()=>toggleFavorite(props.img.id)}></i>
        }
    }
   
    return (
        <div className={`${props.className} image-container`}
        onMouseEnter = {()=>setHovered(true)}
        onMouseLeave = {()=>setHovered(false)}
        >
            
            <img src={props.img.url} className="image-grid"/>
            {heartIcon()}
        </div>
    )
}

export default Image
