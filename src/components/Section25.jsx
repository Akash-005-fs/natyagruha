import React, { useEffect, useRef } from 'react';
import '../styles/section25.css';

// Import images locally
import img1 from '../pictures/1.JPG';
import img2 from '../pictures/14.JPG';
import img3 from '../pictures/6.JPG';
import img4 from '../pictures/15.JPG';
import img5 from '../pictures/2.JPG';
import img6 from '../pictures/12.JPG';
import img7 from '../pictures/16.JPG';
import img8 from '../pictures/7.JPG';
import img9 from '../pictures/5.JPG';
import img10 from '../pictures/9.JPG';
import img11 from '../pictures/11.JPG';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

function Section25() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.grid-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="s25main" ref={sectionRef}>
      <div className="grid-wrapper">
        {images.map((img, index) => (
          <div key={index} className={`grid-item ${index % 4 === 0 ? 'wide' : index % 3 === 0 ? 'tall' : 'big'}`}>
            <img src={img} alt={`grid-img-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section25;
