import React from 'react'
import { useState } from 'react'

const Cube = () => {
    const [side, setSide] = useState(0)
    return (<div>
      <div>Cube</div>
      <label htmlFor='side'>Radius</label>
      <input type='number' name="side" value={side} onChange= {(e) => setSide(e.target.value)}/>
      <div>Volume: {side * side * side}</div>
      <div>Total Surface Area: {6*side*side}</div>
      <div>Lateral Surface Area: {6*side*side}</div>
      </div>
  )
}

export default Cube