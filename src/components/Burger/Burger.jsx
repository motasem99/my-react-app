import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

const Burger =(props) => {
    const {  ingredients } = props;

    console.log(ingredients)

    return (
        <div>
    <div className={classes.Burger}>
        <BurgerIngredients type='bread-top' />
        {
            Object.keys(ingredients).map(item => {
                if(ingredients[item] > 0){
                    let items = []
                    for (let i = 0; i< ingredients[item]; i++){
                        items.push(<BurgerIngredients key={i} type={item} />)
                    }
                    return items
                }
            })
        }
        <BurgerIngredients type='bread-bottom' />
    </div>
    </div>
    )
    
}
export default Burger