import React from 'react';
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const Footer = () => (
    <footer className="footer">
        <ul className="footer__options">
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer__social">
            <p className="footer__social__title">Folow Us</p>
            <a className="footer__social__link" href="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a className="footer__social__link" href="https://twitter.com/" target="_blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
        </div>
    </footer>
);

export default Footer;
