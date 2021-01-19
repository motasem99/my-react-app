import React, { Component } from 'react'

import classes from './BuildBurger.module.css'
import Burger from '../components/Burger/Burger'
import ControlBurger from '../components/ControlBurger/ControlBurger'

class BuildBurger extends Component {
    state = {
        
    }

    orderNow = () => {
        console.log('Order Now')
    }

    clickMoreHandler = () => {
        console.log('Click more handler')
    }

    clickLessHandler = () => {
        console.log('Click Less handler')
    }

    render () {
        return (
            <div className={classes.Main}>
                <Burger />
                <ControlBurger
                clickHandler={this.orderNow}
                clickMoreHandler={this.clickMoreHandler}
                clickLessHandler={this.clickLessHandler} />
            </div>
        )
    }
}


export default BuildBurger