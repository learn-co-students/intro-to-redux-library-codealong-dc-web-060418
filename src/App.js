import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends Component {
  /* event handler that references an action that is wrapped in a dispatch */
  handleOnClick = (event) => {
    this.props.increaseCount()
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleOnClick} >
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'})
  }
}

/* sends the state and action down the component tree as props */

export default connect(mapStateToProps, mapDispatchToProps)(App);
