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
        <img style={{ maxWidth: "500px", width: "100%", opacity: "0.8" }} src={TessKylePic} />
        <p style={{ fontSize: '1.7em', marginTop: '1em' }}>{config.subHeading}</p>
        <p style={{ marginTop: '0.5em' }}>{config.date}</p>
      </header>
      <div className="container">
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="#one" className="button primary">
                Find out more
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>
  );
}
