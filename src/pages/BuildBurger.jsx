import React, { Component } from 'react'

import classes from './BuildBurger.module.css'
import Burger from '../components/Burger/Burger'
import ControlBurger from '../components/ControlBurger/ControlBurger'
import Dropdown from '../components/Dropdown/Dropdown.js'

class BuildBurger extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        show: false
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
        // this.props.history.push('./checkout')
        this.setState({ show: true})
    }

    removeShow = () => {
        this.setState({ show: false })
    }

    render () {
        return (
            <div className={classes.Main}>
                <Burger
                    ingredients={this.state.ingredients}
                />
                <ControlBurger
                    orderNow={this.orderNow}
                    clickLessHandler={this.clickLessHandler}
                    ingredients={this.state.ingredients}
                    increaseIngredients={this.increaseIngredients}
                />
                {this.state.show ? <Dropdown remove={this.removeShow} /> : null}
            </div>
        )
    }
}


export default BuildBurger