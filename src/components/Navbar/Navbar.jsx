import React from 'react'

import classes from './Navbar.module.css'

import { Link } from 'react-router-dom'

const Navbar = (props) => (
    <header className={classes.Toolbar}>
        <ul>
            <li><Link className={classes.Link} to="/">Build Burger</Link></li>
            <li><Link className={classes.Link} to="/orders">Orders</Link></li>
        </ul>
    </header>
)

export default Navbar