import React from 'react'

import { Link } from 'react-router-dom'

import classes from './ControlBurger.module.css'

const ControlBurger = (props) =>  {
    const { increaseIngredients, clickLessHandler, orderNow } = props;

        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>4.00</strong></p>
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Salad</label>
                    <button onClick={()=> clickLessHandler("salad")} className={(props.ingredients.salad > 0 ? classes.Less : classes.Disabled)}>Less</button>
                    <button onClick={()=> increaseIngredients("salad")} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Meat</label>
                    <button onClick={()=> clickLessHandler("bacon")} className={(props.ingredients.salad > 0 ? classes.Less : classes.Disabled)}>Less</button>
                    <button onClick={()=> increaseIngredients("bacon")} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Bacon</label>
                    <button onClick={()=> clickLessHandler("cheese")} className={(props.ingredients.salad > 0 ? classes.Less : classes.Disabled)}>Less</button>
                    <button onClick={()=> increaseIngredients("cheese")} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Cheese</label>
                    <button onClick={()=> clickLessHandler("meat")} className={(props.ingredients.salad > 0 ? classes.Less : classes.Disabled)}>Less</button>
                    <button onClick={()=> increaseIngredients("meat")} className={classes.More}>More</button>
                </div>
                    <button
                        className={classes.OrderButton}
                        onClick={orderNow}
                        >
                        ORDER NOW
                    </button>
                </div>
            )
    }


export default ControlBurger