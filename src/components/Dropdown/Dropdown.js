import React from 'react'

import classes from './Dropdown.module.css'

const Dropdown = (props) => {

    const { remove } = props

    return (
        <div className={classes.Dropdown} onClick={remove}>
            <div className={classes.Modal}>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    <li>Salad: 0</li>
                    <li>Meat: 0</li>
                    <li>Bacon: 0</li>
                    <li>Cheese: 0</li>
                </ul>
                <h3>Total Price: 4.00</h3>
                <p>Continue to Checkout ?</p>
                <button className={classes.Success}>CANCEL</button>
                <button className={classes.Danger}>CONTINUE</button>
            </div>
        </div>
    )
}

export default Dropdown