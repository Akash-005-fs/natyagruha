import React, { useEffect, useState, useRef } from 'react';
import "../styles/section2.css";

function Section2() {
  const [count, setCount] = useState(17); // Start from 17
  const [visible, setVisible] = useState(false); // Controls fade-in effect
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true); // Trigger fade-in effect
          let start = 17;
          const end = 29;
          const duration = 2000; // 2 seconds
          const stepTime = Math.abs(Math.floor(duration / (end - start)));

          let counter = setInterval(() => {
            if (start >= end) {
              clearInterval(counter);
            } else {
              start += 1;
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className='s2main' ref={sectionRef}>
      <div className={`years ${visible ? 'fade-in' : ''}`}>
        <h1>{count} years and counting</h1>
      </div>
    </div>
  );
}

export default Section2;
