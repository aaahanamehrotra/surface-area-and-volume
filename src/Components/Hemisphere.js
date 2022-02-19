import React from 'react'
import { useState } from 'react'

const Hemisphere = () => {
    const [radius, setRadius] = useState(0)
    return (<div>
      <div>Hemisphere</div>
      <label htmlFor='radius'>Radius</label>
      <input type='number' name="radius" value={radius} onChange= {(e) => setRadius(e.target.value)}/>
      <div>Volume: {(2/3) * Math.PI * radius * radius * radius}</div>
      <div>Total Surface Area: {3*Math.PI *radius*radius}</div>
      <div>Curved Surface Area: {2*Math.PI *radius*radius}</div>
      </div>
  )
}

export default Hemisphere