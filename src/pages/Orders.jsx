import React, { Component } from 'react';

import classes from './Orders.module.css';
import firebase from '../firebase.js';

class Orders extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    firebase
      .database()
      .ref('ingredients')
      .on('value', (snapshot) => {
        this.setState({
          ingredients: snapshot.val().ingredients,
          price: snapshot.val().price,
        });
      });
  }

  render() {
    return (
      <div className={classes.Main}>
        <p>
          Ingredients:
          <span className={classes.Span}>
            Bacon({this.state.ingredients.bacon})
          </span>
          <span className={classes.Span}>
            Cheese({this.state.ingredients.cheese})
          </span>
          <span className={classes.Span}>
            Meat({this.state.ingredients.meat})
          </span>
          <span className={classes.Span}>
            Salad({this.state.ingredients.salad})
          </span>
        </p>
        <p>
          Price: <strong>USD {this.state.price}</strong>
        </p>
      </div>
    );
  }
}

export default Orders;
