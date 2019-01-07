import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { navigateForward } from './actions/navigator'
import Welcome from './components/Welcome';
import Screen01 from './components/Screen01';
import Screen02 from './components/Screen02';
class App extends Component {

  stepComponents = [
    Welcome,
    Screen01,
    Screen02,
  ];

  forward =() => {
    this.props.navigateForward()
  }

  render() {

    const { screen, steps } = this.props.navigationManager;    
    console.log(screen, "Screen");
    console.log(steps, "Steps");
    
    const StepComponent = this.stepComponents[screen];
    // console.log(StepComponent);
    
    return (
      <div className="App">
        <header className="App-header">
        <pre>
          {
            JSON.stringify(screen)
          }
        </pre>
        <div>
          <StepComponent {...steps[screen]} />
        </div>
        <button onClick={this.forward} >Navigate</button>   
        </header> 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  navigateForward: () => dispatch(navigateForward())
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
