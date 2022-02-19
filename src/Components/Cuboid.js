import React from 'react'
import { useState } from 'react'

const Cuboid = () => {
    const [length, setLength] = useState(0)
    const [breadth, setBreadth] = useState(0)
    const [height, setHeight] = useState(0)
    return (<div>
      <div>Cuboid</div>
      <label htmlFor='length'>Length</label>
      <input type='number' name="length" value={length} onChange= {(e) => setLength(e.target.value)}/>
      <label htmlFor='breadth'>Breadth</label>
      <input type='number' name="breadth" value={breadth} onChange= {(e) => setBreadth(e.target.value)}/>
      <label htmlFor='height'>Height</label>
      <input type='number' name="height" value={height} onChange= {(e) => setHeight(e.target.value)}/>
      <div>Volume: {length * breadth * height}</div>
      <div>Total Surface Area: {2*(length*breadth + breadth *height + length*height)}</div>
      <div>Lateral Surface Area: {2*(breadth *height + length*height)}</div>
      
      </div>
  )
}

export default Cuboid