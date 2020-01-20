import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import TessKylePic from '../assets/images/redlands_naisu_kiss.jpg'

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1 style={{ textShadow: "2.5px 2px #b8567c" }}>{config.heading}</h1>
        <br />
        <img style={{ maxWidth: "500px", width: "100%", opacity: "0.8" }} src={TessKylePic} />
        <p style={{ fontSize: '2.7em', marginTop: '1em', fontFamily: "'Dancing Script', cursive", textShadow: "2.5px 2px #b8567c", lineHeight: 1 }}>{config.subHeading}</p>
        <p style={{ fontSize: '1.5em', marginTop: '0.7em', textShadow: "2.5px 2px #b8567c" }}>{config.date}</p>
      </header>

    </section>
  );
}
