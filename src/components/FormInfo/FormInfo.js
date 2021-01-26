import React from 'react'

import classes from './FormInfo.module.css'

const FormInfo = (props) => {

    const {infoForm} = props

    return (
        <div className={classes.DropForm }>
            <div className={classes.Form}>
                <form onSubmit={infoForm}>
                    <h3>Enter Your Contact Data</h3>
                    {
                        props.error &&
                        <div className={classes.Error}>{props.nameOfInput} is missing</div>
                    }
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="zipCode" placeholder="ZIP Code" />
                    <input type="text" name="country" placeholder="Country" />
                    <input type="text" name="mail" placeholder="Your E-Mail" />
                    <select>
                        <option>Fastest</option>
                        <option>Cheapest</option>
                    </select>
                    <button type="submit">ORDER</button>
                </form>
            </div>
        </div>
        )
    }

export default FormInfo