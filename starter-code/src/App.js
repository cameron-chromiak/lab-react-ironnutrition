import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox'

class App extends Component {

  state = {
      isHidden: false
  }


  toggleIsHidden = () => {
    this.setState({
      isHidden : !this.state.isHidden
    })
  };

  showForm = () => {
    if(this.state.isHidden){
      return(
        <form>
          <input type='text'/>
          <input type='text'/>
          <input type='text'/>
          <button>Submit</button>
        </form>
      )
    }
  }

  render(){
    return (
      <div className="App">
        <button className="addButton" onClick={this.toggleIsHidden}>Add</button>

        <button className="addButton" onClick={this.addSomething}>Submit?</button>
        {this.showForm()}
        <FoodBox />
      </div>
    );
  }
}

export default App;
