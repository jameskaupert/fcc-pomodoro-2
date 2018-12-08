import React, { Component } from 'react'
import LengthPicker from './LengthPicker'
import Session from './Session'
import Player from './Player'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeRemaining: '25:00',
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="pickers">
          <LengthPicker pickerName={'Break'} />
          <LengthPicker pickerName={'Session'} />
        </div>
        <Session timeRemaining={this.state.timeRemaining} />
        <Player />
      </div>
    )
  }
}

export default App
