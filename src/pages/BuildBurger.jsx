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
        price: 4,
        show: false
    }


    increaseIngredients = (name)=>{
        this.setState({
            ...this.state,
            ingredients: {
                ...this.state.ingredients,
                [name]: this.state.ingredients[name] + 1
            },
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

    orderNow = (item) => {

        const objIngredients = Object.keys(this.state.ingredients).map(key => {
            return this.state.ingredients[key]
        })

        const objPrice = Object.keys(priceIngredients).map(key => {
            return priceIngredients[key]
        })

        let sum = 0
        for(let i = 0; i < objIngredients.length; i++ ){
            sum += objIngredients[i] * objPrice[i]
        }

        this.setState({
            price: sum,
            show: true
        })
            console.log(this.props.location)

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
                    location={this.props.location}
                />
                <ControlBurger
                    orderNow={this.orderNow}
                    clickLessHandler={this.clickLessHandler}
                    ingredients={this.state.ingredients}
                    increaseIngredients={this.increaseIngredients}
                    price={this.state.price.toFixed(2)}
                />
                {
                this.state.show ?
                    <Dropdown
                    remove={this.removeShow}
                    continueOrderNow={this.continueOrderNow}
                    ingredients={this.state.ingredients}
                    price={this.state.price.toFixed(2)} />
                        : null
                }
            </div>
        )
    }
}


export default BuildBurger