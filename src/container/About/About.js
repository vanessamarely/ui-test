import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const About = () => (
  <main>
    <section className="about">
        <div className="about__content">
          <h1>How it works!!</h1>
          <p>How it works text</p>
          <button className="about__content__button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </section>
  </main>
);

export default About;
