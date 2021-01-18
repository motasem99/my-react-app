import React from 'react'

import classes from './BuildBurger.module.css'
import Burger from '../components/Burger/Burger'

const BuildBurger = (props) => (
    <div className={classes.Main}>
        <Burger />
    </div>
)

export default BuildBurger