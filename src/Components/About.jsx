import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={aboutimage} alt='man squatting'/>
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectteing. Lorem ipsum dolor sitetur adipisicing
        Lorem ipsum dolor sit amet consecttetur Lorem ipsum dolor sit amet consecttetur adipisicing.</p>
        <button>READ MORE</button>
      </div>
    </div>
  );
}

export default About;
