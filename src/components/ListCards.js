import React from 'react'
import FoodCard from './FoodCard'


function ListCards({menu,selection}) {
    return (
        <div className="section-center row">
            {selection !=="All" ? (
                menu.filter(x => x.category === selection)
                .map(item => (
                    <FoodCard cardInfo={item}></FoodCard>
                ))
            )
        :(
            menu.map(item => (
                <FoodCard cardInfo={item}></FoodCard>)
        ))}
        </div>
    )
}

export default ListCards
