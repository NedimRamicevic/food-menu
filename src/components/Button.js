import React from 'react'
import {buttons} from '../buttons'
function Button({selected}) {
    return (
        <div className="btn-container" >
            {buttons ? (
                buttons.map(button =>(
                    <button className="btn btn-outline-dark btn-item" id={button} onClick={()=>selected(button)} >{button}</button>
                ))
            ):null}
        </div>
    )
}

export default Button
