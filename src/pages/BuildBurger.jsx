import React, { Component } from 'react'

import classes from './BuildBurger.module.css'
import Burger from '../components/Burger/Burger'
import ControlBurger from '../components/ControlBurger/ControlBurger'

class BuildBurger extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }

    increaseIngredients = (name)=>{
        this.setState({
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [name]: this.state.ingredients[name] + 1
            }
        })
    }

    clickLessHandler = (name) => {
        this.setState({
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [name]: this.state.ingredients[name] !== 0 ? this.state.ingredients[name] -1 : 0
            }
        })
    }

    orderNow = () => {
        this.setState({ ingredients: 'change state' })
    }

    render () {
        return (
            <div className={classes.Main}>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <ControlBurger
                    clickHandler={this.orderNow}
                    clickLessHandler={this.clickLessHandler}
                    statess={this.state.ingredients}
                    increaseIngredients={this.increaseIngredients}
                />
            </div>
        )
    }
}


export default BuildBurger