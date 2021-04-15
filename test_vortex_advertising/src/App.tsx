import React from 'react';
import './App.css';
import LoadingImage from './LoadingImage';
import Cat0 from './img/cat.jpg'
import Cat1 from './img/cat1.jpg'
import Cat2 from './img/cat2.jpg'


function App() {
  return (
    <div className="App">
      <LoadingImage url={Cat0} />
      <LoadingImage url={Cat1}/>
      <LoadingImage url={Cat2}/>
    </div>
  );
}

export default App;
