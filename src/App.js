import React, { useState, useEffect } from 'react';
import './App.css';
import Land from './components/Land';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section25 from './components/Section25';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Foot from './components/Foot';
import Gallery from './components/Gallery';
import Dd from './components/Dd';
import Preloader from './components/Preloader'; // Import Preloader

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 5 seconds
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <Land />
          <Section1 />
          <Section2 />
          <Dd />
          <Gallery />
          <Section25 />
          <Section3 />
          <Section4 />
          <Foot />
        </>
      )}
    </div>
  );
}

export default App;
