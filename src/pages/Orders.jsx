import React, { Component } from 'react';

import classes from './Orders.module.css';
import firebase from '../firebase.js';
import Spinner from '../components/Spinner/Spinner.js';

class Orders extends Component {
  state = {
    loading: true,
    ingredients: [],
  };

  componentDidMount() {
    firebase
      .database()
      .ref(`ingredients/1`)
      .on('value', (snapshot) => {
        const data = Object.keys(snapshot.val()).map((item) => ({
          id: item,
          ...snapshot.val()[item],
        }));
        this.setState({ ingredients: [...data], loading: false });
      });
  }

  render() {
    return this.state.loading ? (
      <Spinner />
    ) : (
      [
        this.state.ingredients.map((item) => (
          <div className={classes.Main} key={item.id}>
            <p>
              Ingredients:
              <span className={classes.Span}>
                Bacon({item.ingredients.bacon})
              </span>
              <span className={classes.Span}>
                Cheese({item.ingredients.cheese})
              </span>
              <span className={classes.Span}>
                Meat({item.ingredients.meat})
              </span>
              <span className={classes.Span}>
                Salad({item.ingredients.salad})
              </span>
            </p>
            <p>
              Price: <strong>USD {item.price.toFixed(2)}</strong>
            </p>
          </div>
        )),
      ]
    );
  }
}

export default Orders;
/**
 * 1. when u got data u need to wait use gui by use loading state
 * 2. when u got data from firebase u need to change it from object to arr
 * 3. use map with GUI
 */
