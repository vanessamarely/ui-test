import React from 'react';
import { Link } from "react-router-dom";
import { faThumbsDown, faThumbsUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.scss';

const Header = () => (
    <header className="header">
        <section className="header__top-bar">
            <h1 className="header__top-bar__logo">
                <Link to='/home'>Rule of Thumb.</Link>
            </h1>
            <nav className="header__top-bar__menu">
                <ul className="navigation">
                    <li>
                        <Link to='/trial'>Past Trials</Link>
                    </li>
                    <li>
                        <Link to='/about'>How it works</Link>
                    </li>
                    <li>
                        <Link to='/login'>Log In / Sign Up</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__top-bar__search">
                <FontAwesomeIcon icon={faSearch} />
            </div>
        </section>
        <section className="header__card">
            <div className="header__card__header">
                <p>What’s your opinion </p>
                <h2>Pope Francis?</h2>
            </div>
            <div className="header__card__body">
                <p>He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up) </p>
                <p className="more-info">More information</p>
                <p className="title">What’s Your Verdict?</p>
            </div>
            <div className="header__card__vote">
                <button className="vote-button like">
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
                <button className="vote-button dislike">
                    <FontAwesomeIcon icon={faThumbsDown} />
                </button>
            </div>
        </section>
        <section className="header__bar-bottom">
            <div className="box box__bottom">&nbsp;</div>
            <div className="header__bar-bottom__clossing">
                <div className="clossing-left">
                    <p>CLOSSING IN</p>
                    <div className="arrow-right"></div>
                </div>
                <div className="clossing-right">
                    <p><strong>22</strong> days</p>
                </div>
            </div>
        </section>
    </header>
);

export default Header;
