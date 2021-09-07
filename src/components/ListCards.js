import React from 'react'
import FoodCard from './FoodCard'


function ListCards({menu}) {

    return (
        <div className="container">
            {menu ? (
                menu.filter(x => x.category === "x")
                .map(item => (
                    <FoodCard cardInfo={item}></FoodCard>
                ))
            ):null}
        </div>
    )
}

export default ListCards
