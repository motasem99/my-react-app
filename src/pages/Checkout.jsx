import React, {Component} from 'react'

import qs from 'query-string'

import classes from './Checkout.module.css'
import Burger from '../components/Burger/Burger'

import FormInfo from '../components/FormInfo/FormInfo.js'
class Checkout extends Component {
    state = {
        error: false,
        nameOfInput: "",
        show: false
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

    showInfoForm = () => {
        this.setState({ show: true })
    }

    removeInfoForm = () => {
        this.setState({ show: false })
    }

    render() {
        const obj = qs.parse(this.props.location.search)

        return (
            <div className={classes.Main}>
                <div className={classes.Burger}>
                    <h2>We Hope It Taste Is Well</h2>
                        <Burger ingredients={obj} />
                </div>

                <button className={classes.Success} onClick={this.removeInfoForm}>CANCEL</button>
                <button className={classes.Danger} onClick={this.showInfoForm}>CONTINUE</button>

                    <FormInfo
                        infoForm={this.infoForm}
                        nameOfInput={this.state.nameOfInput}
                        error={this.state.error}
                        show={this.state.show}
                        />
            </div>
        )
    }
}
export default Checkout