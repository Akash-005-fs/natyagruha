import React, { useEffect } from 'react';
import "../styles/section1.css";
import videoFile from "../videos/02.NATYAGRUHA DANCE ACADEMY VIDEO (online-video-cutter.com) (1).mp4"; 

function Section1() {
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

    const elements = document.querySelectorAll('.t1, .t2 p');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="s1main">
      <div className='vvvv'>
        <video autoPlay muted loop className="background-video">
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='overlay'></div>
      
      <div className='texts'>
        <div className='t1'>   
          <h1>ABOUT US</h1>            
        </div>

        <div className='t2'>
          <p>
            Natya Gruha Dance Academy, established in 1996 by Kalamandalam Asha Pradeep, 
            has been one of the premier dance institutions in Kottayam, Kerala. With a 
            strong legacy of nurturing talent, the academy is dedicated to preserving 
            and promoting the rich traditions of Indian classical dance. It offers expert 
            training in Bharatanatyam and Kuchipudi, fostering discipline, grace, and artistic 
            excellence among students. Over the years, Natya Gruha has become a beacon for 
            aspiring dancers, blending tradition with innovation to keep the art form alive 
            for future generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section1;
