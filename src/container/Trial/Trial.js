import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const Trial = () => (
  <main>
    <section className="trial">
        <div className="trial__content">
          <h1>Past Trial</h1>
          <p>Past trial text</p>
          <button className="trial__content__button">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </section>
  </main>
);

export default Trial;
