import React from 'react'

import classes from './Checkout.module.css'
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients'

const Checkout = (props) => (
    <div className={classes.Main}>
        <div className={classes.Burger}>
        <h2>We hope it taste is well</h2>
            <BurgerIngredients type='bread-top' />
            <BurgerIngredients type='salad' />
            <BurgerIngredients type='bacon' />
            <BurgerIngredients type='cheese' />
            <BurgerIngredients type='meat' />
            <BurgerIngredients type='bread-bottom' />
        </div>

        <button className={classes.Success}>CANCEL</button>
        <button className={classes.Danger}>CONTINUE</button>
    </div>
)

export default Checkout