import React from 'react'
import { useState } from 'react'

const Sphere = () => {
    const [radius, setRadius] = useState(0)
  return (<div>
    <div>Sphere</div>
    <label htmlFor='radius'>Radius</label>
    <input type='number' name="radius" value={radius} onChange= {(e) => setRadius(e.target.value)}/>
    <div>Volume: {(4/3) * Math.PI * radius * radius * radius}</div>
    <div>Surface Area: {4*Math.PI *radius*radius}</div>
    </div>
  )
}

export default Sphere