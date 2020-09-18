import React, { useState } from 'react';
import Header from './components/Header';
import Accordion from './components/Accordion';
import items from './data/accordion.data';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import options from './data/color.options';
import Translate from './components/Translate';
import Route from './components/Route';

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
    <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route> 
      <Route path="/list">
        <Search />
      </Route> 
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color" 
          options={options} 
          selected={selected} 
          onSelectedChange={setSelected} 
        />
      </Route> 
      <Route path="/translate">
        <Translate />
      </Route> 
    </div>
  );
}

export default App;
