import React from 'react'

function FoodCard({cardInfo}) {
    return (
        <div>
            <div className="photo" >
                <img src={cardInfo.img} alt=""></img>
            </div>
            <div className="menu-title">
                <h2>{cardInfo.title}</h2>
            </div>
            <div className="menu-info">
                <p>{cardInfo.desc}</p>
            </div>
        </div>
    )
}

export default FoodCard
