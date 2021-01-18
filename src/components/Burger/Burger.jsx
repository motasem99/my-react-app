import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import ControlBurger from '../ControlBurger/ControlBurger'

const Burger = (props) => (
    <div>
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            <BurgerIngredients type='salad' />
            <BurgerIngredients type='bacon' />
            <BurgerIngredients type='cheese' />
            <BurgerIngredients type='meat' />
            <BurgerIngredients type='bread-bottom' />
        </div>
            <ControlBurger />
    </div>
)

export default Burger