import React from 'react'
import classes from './ControlBurger.module.css'

const ControlBurger = (props) =>  {

        return (
            <div className={classes.BuildControls}>
                <p>Current Price: <strong>4.00</strong></p>
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Salad</label>
                    <button onClick={props.clickLessHandler} className={classes.Less}>Less</button>
                    <button onClick={props.clickMoreHandler} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Meat</label>
                    <button onClick={props.clickLessHandler} className={classes.Less}>Less</button>
                    <button onClick={props.clickMoreHandler} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Bacon</label>
                    <button onClick={props.clickLessHandler} className={classes.Less}>Less</button>
                    <button onClick={props.clickMoreHandler} className={classes.More}>More</button>
                </div>
        
                <div className={classes.BuildControl}>
                    <label className={classes.Label}>Cheese</label>
                    <button onClick={props.clickLessHandler} className={classes.Less}>Less</button>
                    <button onClick={props.clickMoreHandler} className={classes.More}>More</button>
                </div>
                    <button className={classes.OrderButton}
                    onClick={props.clickHandler}>ORDER NOW</button>
                </div>
            )
    }


export default ControlBurger