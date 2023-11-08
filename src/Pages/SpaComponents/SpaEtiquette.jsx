import React from 'react'
import "./Spa.Etiquette.scss";
import Etiquette from './Etiquette';

const SpaEtiquette = () => {
    return (
        <>
            <div className='SpaEtiquette_main'>
                <div>
                    <p>F . A . Q S</p>
                    <h1>Spa Etiquette</h1>
                    <div>
                        <Etiquette Name={"Arriving at The Spa"} About={"Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa "} />
                        <Etiquette Name={"Arriving at The Spa"} About={"Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa "} />
                        <Etiquette Name={"Arriving at The Spa"} About={"Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa "} />
                        <Etiquette Name={"Arriving at The Spa"} About={"Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa "} />
                        <Etiquette Name={"Arriving at The Spa"} About={"Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa Slama qaqa "} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpaEtiquette