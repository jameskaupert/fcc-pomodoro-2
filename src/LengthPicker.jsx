import React from 'react'

const LengthPicker = props => {
  const pickerName = props.pickerName.toLowerCase()
  const pickerVal = `${pickerName}Length`
  return (
    <div className="length-picker-wrapper" id={pickerName}>
      <p>{props.pickerName} Length</p>
      <button id={`${pickerName}-decrement`}>Decrement</button>
      <span>{props[pickerVal]}</span>
      <button id={`${pickerName}-increment`}>Increment</button>
    </div>
  )
}

export default LengthPicker
