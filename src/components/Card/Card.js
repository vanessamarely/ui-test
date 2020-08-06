import React from 'react';
import './styles.scss';
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
    const { 
        category, 
        description,
        dislikes,
        id, 
        likes,
        name,
        picture,
        voteState
    } = props.data;
   
    return (
        <div className="card">
            <div className="card__backdrop">&nbsp;</div>
            <img className="card__image-bg" src={require(`../../assets/images/${picture}`)} />
            <div className="card__character">
                <div className="card__character__icon">
                    {
                    likes > dislikes ?
                        <div className="icons-style like-icon"><FontAwesomeIcon icon={faThumbsUp} /></div> 
                        :
                        <div className="icons-style dislike-icon"><FontAwesomeIcon icon={faThumbsDown} /></div> 
                    }
                </div>
                <h2 className="card__character__title"> 
                    { name }
                </h2>
                <p className="card__character__subtitle">1 month ago in {category}</p>
                <p className="card__character__text">{description}</p>
                <div className="card__character__details">
                    {
                        voteState ?
                        <>
                            <button className="button-like" type="button" onClick={() => props.updateData('like', id)}><span className="like-icon"><FontAwesomeIcon icon={faThumbsUp} /></span></button>
                            <button className="button-dislike" type="button" onClick={() => props.updateData('dislike', id)}><span className="dislike-icon"  ><FontAwesomeIcon icon={faThumbsDown} /></span></button>
                        </>
                        : <span>&nbsp;</span>    
                    }
                    <div className="vote-button">
                        {
                            voteState ?
                            <button type="button" onClick={() => props.showMessage(id, voteState)}>Vote now</button>
                            : <button type="button" onClick={() => props.updateState(id, voteState)}>Vote again</button>
                        }
                    </div>
                </div>
            </div>
            <div className="card__vote">
                <div className="card__vote__progressBar">
                    <div
                        className="card__vote__progressBar--likes" 
                        style={{width: likes + "%"}} 
                    >
                    </div>
                    <div 
                        className="card__vote__progressBar--dislikes"
                        style={{width: dislikes + "%"}} 
                    >
                    </div>
                </div>
                <div className="card__vote__buttons">
                    <div className="button-container like">
                        <FontAwesomeIcon icon={faThumbsUp} />
                        <span className="percentage">{likes}%</span>
                    </div>
                    <div className="button-container dislike">
                        <span className="percentage">{dislikes}%</span> 
                        <FontAwesomeIcon icon={faThumbsDown} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;