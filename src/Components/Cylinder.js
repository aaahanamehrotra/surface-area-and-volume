import React from 'react'
import { useState } from 'react'

const Cylinder = () => {
    const [radius, setRadius] = useState(0)
    const [height, setHeight] = useState(0)
    return (<div>
      <div>Cylinder</div>
      <label htmlFor='radius'>Radius</label>
      <input type='number' name="radius" value={radius} onChange= {(e) => setRadius(e.target.value)}/>
      <label htmlFor='height'>Height</label>
      <input type='number' name="height" value={height} onChange= {(e) => setHeight(e.target.value)}/>
      <div>Volume: {Math.PI * radius * radius * height}</div>
      <div>Total Surface Area: {2*Math.PI *radius*(radius +height)}</div>
      <div>Curved Surface Area: {2*Math.PI *radius*height}</div>
      
      </div>
  )
}

export default Cylinder