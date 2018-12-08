import React from 'react'

const Session = props => {
  return (
    <div className="session-wrapper">
      <p>Session</p>
      <p>{props.timeRemaining}</p>
    </div>
  )
}

export default Session
