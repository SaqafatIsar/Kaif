import React from "react"
import "./App.css"
export default function Box(props){
    const styles={
        backgroundColor:props.on?"red":"black"
    }
    return(
        <div
        style={styles} 
        className="box" 
        onClick={props.toggle}> 
        
        
        </div>
    )
}