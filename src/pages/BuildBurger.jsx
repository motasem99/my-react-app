import React, { Component } from 'react'

import classes from './BuildBurger.module.css'
import Burger from '../components/Burger/Burger'
import ControlBurger from '../components/ControlBurger/ControlBurger'
import Dropdown from '../components/Dropdown/Dropdown.js'


const priceIngredients = {
    salad: 1.3,
    bacon: 1.7,
    meat: 2.5,
    cheese: 3.4
}
class BuildBurger extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        prise: 4.00,
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
        this.setState({ show: true})
    }

    removeShow = () => {
        this.setState({ show: false })
    }

    continueOrderNow = () => {
        const queryParams = []

        for(let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        const queryString = queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        })
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
                {
                this.state.show ?
                    <Dropdown
                    remove={this.removeShow}
                    continueOrderNow={this.continueOrderNow}
                    ingredients={this.state.ingredients} />
                        : null
                }
            </div>
        )
    }
}


export default BuildBurger