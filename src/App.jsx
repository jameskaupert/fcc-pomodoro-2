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
      breakLength: 5,
      sessionLength: 25,
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="pickers">
          <LengthPicker
            pickerName={'Break'}
            breakLength={this.state.breakLength}
          />
          <LengthPicker
            pickerName={'Session'}
            sessionLength={this.state.sessionLength}
          />
        </div>
        <Session timeRemaining={this.state.timeRemaining} />
        <Player />
      </div>
    )
  }
}

export default App
