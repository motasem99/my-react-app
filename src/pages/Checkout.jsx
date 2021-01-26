import React, {Component} from 'react'

import qs from 'query-string'

import classes from './Checkout.module.css'
import Burger from '../components/Burger/Burger'

class Checkout extends Component {
    state = {
        error: false,
        nameOfInput: ""
    }

    infoForm = (event) => {
        event.preventDefault()

        if(event.target.name.value === ""){
            this.setState({ error: true, nameOfInput: "name" })
        }
        if(event.target.street.value === "") {
            this.setState({ error: true, nameOfInput: 'street' })
        }
        if(event.target.zipCode.value === ""){
            this.setState({ error: true, nameOfInput: "zipCode" })
        }
        if(event.target.country.value === ""){
            this.setState({ error: true, nameOfInput: "country" })
        }
        if(event.target.mail.value === ""){
            this.setState({ error: true, nameOfInput: "mail" })
        }
    }

    render() {
        const obj = qs.parse(this.props.location.search)

        return (
            <div className={classes.Main}>
                <div className={classes.Burger}>
                    <h2>We Hope It Taste Is Well</h2>
                        <Burger ingredients={obj} />
                </div>

                <button className={classes.Success}>CANCEL</button>
                <button className={classes.Danger}>CONTINUE</button>

                <div>
                    <form onSubmit={this.infoForm} className={classes.Form}>
                    <h3>Enter Your Contact Data</h3>
                        {
                            this.state.error &&
                            <div className={classes.Error}>{this.state.nameOfInput} is missing</div>
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
}
export default Checkout