import React, { useState } from 'react';
import Accordion from './components/Accordion';
import items from './data/accordion.data';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import options from './data/color.options';

function App() {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
      {showDropdown ?
        <Dropdown 
          selected={selected}
          onSelectedChange={setSelected} 
          options={options}
        /> : null
      }        
    </div>
  );
}

export default App;
