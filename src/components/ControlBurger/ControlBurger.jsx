import React from 'react'
import classes from './ControlBurger.module.css'

const ControlBurger = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: 4.00</p>
        <div className={classes.BuildControl}>
            <label className={classes.Label}>Salad</label>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>

        <div className={classes.BuildControl}>
            <label className={classes.Label}>Meat</label>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>

        <div className={classes.BuildControl}>
            <label className={classes.Label}>Bacon</label>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>

        <div className={classes.BuildControl}>
            <label className={classes.Label}>Cheese</label>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>

    <button className={classes.OrderButton}>ORDER NOW</button>

        </div>
)

export default ControlBurger