import React from 'react';
import { useState } from 'react';
import Cone from './Components/Cone';
import Cube from './Components/Cube';
import Cuboid from './Components/Cuboid';
import Cylinder from './Components/Cylinder';
import Hemisphere from './Components/Hemisphere';
import Sphere from './Components/Sphere';


function App() {
  const [solid, setSolid] = useState("")
  return (
    <div className="App">
      <label for="solids">Select a Solid:</label>
      <select name="solids" id="solids" onChange={(e) => setSolid(e.target.value)}>
        <option value="">--Select an option--</option>
        <option value="cube">cube</option>
        <option value="cuboid">cuboid</option>
        <option value="cylinder">cylinder</option>
        <option value="cone">cone</option>
        <option value="sphere">sphere</option>
        <option value="hemisphere">hemisphere</option>
      </select>
      

      {(() => {
  
  switch (solid) {
     case 'cube':
         return <Cube />
     case 'cuboid':
         return <Cuboid />         
     case 'cylinder':
          return <Cylinder/>
     case 'cone':
            return <Cone />
            
     case 'sphere':
            return <Sphere />
            
     case 'hemisphere':
            return <Hemisphere />
     default:
         return (
           <div>Please select a solid</div>
         )
  }
})()}
    </div>
  );
}

export default App;
