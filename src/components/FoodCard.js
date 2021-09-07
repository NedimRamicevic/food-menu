import React from 'react'

function FoodCard({cardInfo}) {
    return (
        <div className="menu-item" id={cardInfo.id}>
                <img className="photo" src={cardInfo.img} alt=""></img>
                <h4  className="menu-title" >{cardInfo.title}</h4>
                <p className="menu-text" >{cardInfo.desc}</p>
        </div>
    )
}

export default FoodCard
