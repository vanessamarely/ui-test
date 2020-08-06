import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const Login = () => (
    <main>
        <section className="login">
            <div className="login__content">
            <h1>Log In</h1>
            <p>Log In text</p>
            <button className="login__content__button">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            </div>
      </section>
      <section className="sign-up">
            <div className="sign-up__content">
            <h1>Sign Up</h1>
            <p>Sign Up text</p>
            <button className="sign-up__content__button">
                <FontAwesomeIcon icon={faTimes} />
            </button>
            </div>
      </section>
  </main>
);

export default Login;
