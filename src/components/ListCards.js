import React from 'react'
import FoodCard from './FoodCard'


function ListCards({menu}) {
    console.log(menu)
    return (
        <div className="section-center row">
            {menu ? (
                menu.filter(x => x.category !== "x")
                .map(item => (
                    <FoodCard cardInfo={item}></FoodCard>
                ))
            ):null}
        </div>
    )
}

export default ListCards
