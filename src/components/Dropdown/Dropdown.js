import React from 'react'

import classes from './Dropdown.module.css'

const Dropdown = (props) => {

    const { remove, continueOrderNow } = props

    return (
        <div className={classes.Dropdown} onClick={remove}>
            <div className={classes.Modal}>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    <li>Salad: {props.ingredients.salad}</li>
                    <li>Meat: {props.ingredients.meat}</li>
                    <li>Bacon: {props.ingredients.bacon}</li>
                    <li>Cheese: {props.ingredients.cheese}</li>
                </ul>
                <h3>Total Price: {props.price}</h3>
                <p>Continue to Checkout ?</p>
                <button className={classes.Success} onClick={remove}>CANCEL</button>
                <button className={classes.Danger} onClick={continueOrderNow}>CONTINUE</button>
            </div>
        </div>
    )
}

export default Dropdown