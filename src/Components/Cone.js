import React from 'react'
import { useState } from 'react'

const Cone = () => {
    const [radius, setRadius] = useState(0)
    const [height, setHeight] = useState(0)
    const [length, setLength] = useState(0)

    return (<div>
      <div>Cone</div>
      <label htmlFor='radius'>Radius</label>
      <input type='number' name="radius" value={radius} onChange= {(e) => {
          setRadius(e.target.value)
          setLength(Math.sqrt(radius*radius + height*height))}}/>
      <label htmlFor='height'>Height</label>
      <input type='number' name="height" value={height} onChange= {(e) => {
          setHeight(e.target.value)
          setLength(Math.sqrt(radius*radius + height*height))}}/>
      
      <div>Volume: {(1/3)*Math.PI * radius * radius * height}</div>
      <div>Total Surface Area: {Math.PI *radius*(radius+length)}</div>
      <div>Curved Surface Area: {Math.PI *radius*length}</div>
      
      </div>
  )
}

export default Cone