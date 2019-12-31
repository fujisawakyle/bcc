import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header() {
  return (
    <section id="header">
      <header className="major">
        <h1>{config.heading}</h1>
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
