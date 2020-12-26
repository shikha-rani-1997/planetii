import './App.css';
import React from 'react';
import galaxy from './galaxy.jpg';
import Common from './Common.jsx';
import { Fetch } from './fetchData';


const App = () => {
  return (
    <div className="App">
      <img src={galaxy} style={{ width: '100%',backgroundSize:'cover',height:'100%'}} alt="Solar System"/>
      <div className='nav'><strong >PLANTERIES</strong>
        <br />
        <Fetch/>
        <Common/>
      </div>
    </div>
  );
};

export default App;
