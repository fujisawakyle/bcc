import React from 'react';
import Scroll from './Scroll';
import config from '../../config';
import TessKylePic from '../assets/images/beach_naisu.jpg'

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1 style={{ textShadow: "2.5px 2px #b8567c" }}>{config.heading}</h1>
        <br />
        <img style={{ maxWidth: "350px", width: "100%", opacity: "0.8", maxHeight: "500px" }} src={TessKylePic} />
        <p style={{ fontSize: '2.7em', marginTop: '1em', fontFamily: "'Dancing Script', cursive", textShadow: "2.5px 2px #b8567c", lineHeight: 1 }}>{config.subHeading}</p>
        <p style={{ fontSize: '1.5em', marginTop: '0.7em', textShadow: "2.5px 2px #b8567c" }}><del>{config.date}</del></p>
        <p style={{ fontSize: '1.5em', marginTop: '0.7em', textShadow: "2.5px 2px #b8567c" }}>Postponed until 2021 :(</p>
        <p style={{ fontSize: '1.5em', marginTop: '0.7em', textShadow: "2.5px 2px #b8567c" }}>Thank you for visiting - we love you!</p>

      </header>

    </section>
  );
}
