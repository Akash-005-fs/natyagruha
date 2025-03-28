import React, { useState, useEffect } from 'react';
import '../styles/preloader.css';
import logo from '../pictures/l1rb.png'; // Import your logo

function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return oldProgress + 2; // Increment progress gradually
      });
    }, 100); // Update every 100ms (100 * 50 = 5000ms or 5 seconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader">
      <img src={logo} alt="Logo" className="logo" />
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}%</p>
    </div>
  );
}

export default Preloader;
