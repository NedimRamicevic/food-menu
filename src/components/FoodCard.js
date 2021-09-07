import React from 'react'

function FoodCard({cardInfo}) {
    return (
        <div className="menu-items col-lg-6 col-sm-12" id={cardInfo.id}>
        <img className="photo" src={cardInfo.img} alt={cardInfo.title}></img>
            <div className="menu-info">
                <div className="menu-title">
                    <h4>{cardInfo.title}</h4>
                    <h4 className="price">{cardInfo.price}</h4>
                </div>
                <div className="menu-text">{cardInfo.desc}</div>
            </div>
        </div>
    )
}

export default FoodCard
