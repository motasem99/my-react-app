import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'

const Burger =(props) => {

    return (
        <div>
    <div className={classes.Burger}>
        <BurgerIngredients type='bread-top' />
        <BurgerIngredients type='salad' />
        <BurgerIngredients type='bacon' />
        <BurgerIngredients type='cheese' />
        <BurgerIngredients type='meat' />
        <BurgerIngredients type='bread-bottom' />
    </div>
    </div>
    )
    
}
export default Burger