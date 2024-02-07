import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [value, setValue] =useState(0);

  return (
    <div className="App">
      <div className='value'> {value}</div>
      <button onClick={() => { setValue(value + 1) }}>Click me</button>
    </div>
  );
}

export default App;
