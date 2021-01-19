import React,{ Component } from 'react'

import classes from './BurgerIngredients.module.css'

class BurgerIngredients extends Component {
    render() {
        let ingredient = null

        switch(this.props.type) {
            case ('bread-top'):
                ingredient = (
                            <div style={{width: '75%', height: '6rem'}} className={classes.BreadTop}>
                                <div className={classes.Seeds1}></div>
                                <div className={classes.Seeds2}></div>
                            </div>
                    )
                break;
            case ('bread-bottom'):
                ingredient = <div style={{width: '75%', height: '3rem'}} className={classes.BreadBottom}></div>
                break;
            case ('meat'):
                ingredient = <div style={{width: '75%', height: '1.5rem'}} className={classes.Meat}></div>
                break;
            case ('salad'):
                ingredient = <div style={{width: '75%', height: '1.5rem'}} className={classes.Salad}></div>
                break
            case ('cheese'):
                ingredient = <div style={{width: '75%', height: '1.5rem'}} className={classes.Cheese}></div>
                break
            case ('bacon'):
                ingredient = <div style={{width: '75%', height: '1.5rem'}} className={classes.Bacon}></div>
                break
            default: ingredient = null
        }

        return (
            <div >
            {ingredient}
            </div>
        )
    }
}
export default BurgerIngredients