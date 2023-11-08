import React, { useState } from 'react'
import "./Etiquette.scss";

const Etiquette = (props) => {

    const [etiquetteOpen, setEtiquetteOpen] = useState(false);

    return (
        <>
            <div className='Etiquette_main'>
                <div>
                    <div style={etiquetteOpen ? {color:"#aa8453"} : {color:"black"}} className='Etiquette_Name'>{props.Name}</div>
                    <div style={etiquetteOpen ? {display:"none"} : {display:"block"}} className='Etiquette_Open'><button onClick={() => setEtiquetteOpen(!etiquetteOpen)}>+</button></div>
                    <div style={etiquetteOpen ? {display:"block"} : {display:"none"}} className='Etiquette_Open'><button onClick={() => setEtiquetteOpen(!etiquetteOpen)} style={{fontSize:"26px"}}>-</button></div>
                </div>
                <div style={etiquetteOpen ? { display: "block" } : { display: "none" }} className='Etiquette_text'>
                    <p>{props.About}</p>
                </div>
            </div>
        </>
    )
}

export default Etiquette