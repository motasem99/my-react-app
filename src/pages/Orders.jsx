import React from 'react'

import classes from './Orders.module.css'

const Orders = (props) => (
    <div className={classes.Main}>
        <p>Ingredients:
            <span className={classes.Span}>Bacon(1)</span>
            <span className={classes.Span}>Cheese(1)</span>
            <span className={classes.Span}>Meat(1)</span>
            <span className={classes.Span}>Salad(1)</span>
        </p>
        <p>Price: <strong>USD 5.00</strong></p>
    </div>
)

export default Orders