import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

import Accordion from '../components/Accordion'

// import data from '../content'

const sections = [
  { id: 'one', bg: require('../assets/images/mountains-pink.png') },
  { id: 'two', bg: require('../assets/images/mountains-blue.png') },
  { id: 'three', bg: require('../assets/images/mountains-green.png') },
];
const IndexPage = () => {
  return (
    <Layout>
      <Header />

      <section id="one" className="main special">
        <div className="container">
          <h2>Required reading before attending:</h2>
          <Accordion />
          <span className="image fit primary">
            <img src={sections[0].bg} alt="" />
          </span>
        </div>
      </section>

      {/* <section id="two" className="main special">
        <div className="container">
          <span className="image fit primary">
            <img src={sections[1].bg} alt="" />
          </span>
          <div className="content">
            <header className="major">
              <h2>Stuff I do</h2>
            </header>
            <p>
              Consequat sed ultricies rutrum. Sed adipiscing eu amet interdum
              lorem blandit vis ac commodo aliquet vulputate.
          </p>
            <ul className="icons-grid">
              <li>
                <span className="icon major fa-camera-retro" />
                <h3>Photography</h3>
              </li>
              <li>
                <span className="icon major fa-pencil" />
                <h3>Blogging</h3>
              </li>
              <li>
                <span className="icon major fa-code" />
                <h3>Web Development</h3>
              </li>
              <li>
                <span className="icon major fa-coffee" />
                <h3>Sipping Coffee</h3>
              </li>
            </ul>
          </div>
          <Scroll type="id" element="three">
            <a href="#three" className="goto-next ">
              Next
          </a>
          </Scroll>
        </div>
      </section> */}

      {/* <section id="three" className="main special">
        <div className="container">
          <span className="image fit primary">
            <img src={sections[2].bg} alt="" />
          </span>
          <div className="content">
            <h2>Thank you!</h2>
            <p>
              We carefully curated our guest list, so thank you for being a part of our lives and sharing our joy!
          </p>
            <header className="major">
            </header>
          </div>
          <Scroll type="id" element="footer">
            <a href="#footer" className="goto-next ">
              Next
          </a>
          </Scroll>
        </div>
      </section> */}

      <section id="footer">
        <div className="container">
          <header className="major">
            <h2>Now that you know what you're walking into, are you coming?</h2>
            <br />
            <p style={{ color: '#444' }}> Please RSVP below! You may RSVP for multiple people - just add all the names to the form below:</p>
          </header>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform">
              <div className="col-12">
                <input type="text" name="name" id="name" placeholder="Name or Names" />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message (Optional)"
                  rows="4"
                />
              </div>
              <div className="col-12">
                <ul className="actions special">
                  <li>
                    <input
                      type="submit"
                      value="Send RSVP"
                      className="primary"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          {/* <br />
          <h1>Here's a link to some cute photos from our time together thus far.</h1> */}
        </div>

        <Footer />
      </section>

      <section id="two">
        <div className="container">
          <header className="major">



          </header>

        </div>
        <Footer />
      </section>

      <Scrollspy
        items={sections.map(s => s.id)}
        currentClassName="active"
        offset={50}
        componentTag={'div'}
      >
        {sections.map(s => {
          return (
            <div
              key={s.id}
              className="main-bg"
              id={`${s.id}-bg`}
              style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
            />
          );
        })}
      </Scrollspy>
    </Layout>
  )
}
  ;

export default IndexPage;
