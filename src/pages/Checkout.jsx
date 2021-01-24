import React from 'react'

import classes from './Checkout.module.css'
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients'
import Burger from '../components/Burger/Burger'

const Checkout = (props) => (
    <div className={classes.Main}>
        <div className={classes.Burger}>
        <h2>We Hope It Taste Is Well</h2>
            <Burger />
    </div>

        <button className={classes.Success}>CANCEL</button>
        <button className={classes.Danger}>CONTINUE</button>
        <div>
            <form className={classes.Form}>
            <h3>Enter Your Contact Data</h3>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Street" />
                <input type="text" placeholder="ZIP Code" />
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Your E-Mail" />
                <select>
                    <option>Fastest</option>
                    <option>Cheapest</option>
                </select>
                <button>ORDER</button>
            </form>
        </div>
    </div>
)

export default Checkout