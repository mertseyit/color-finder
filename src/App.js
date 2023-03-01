import Serach from './components/Serach';
import Table from './components/Table';
import './index.css';
import { useState } from 'react';
function App() {
  const [color, setColor] = useState('')
  return (
    <div className="App">
      <div>
        <Table color={color}/> 
        <br />
        <Serach setColor={setColor} color={color}/>  
      </div>
    </div>
  );
}

export default App;
