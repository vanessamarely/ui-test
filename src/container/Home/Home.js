import React, { useState, useEffect  } from 'react';
import * as data from '../../assets/mocks/data.json';
import Card from '../../components/Card/Card';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

function Home() {
  const initialData = 
    JSON.parse(localStorage.getItem('data')).default ? JSON.parse(localStorage.getItem('data')).default : data.default;
  const [storageData, setStorage] = useState(initialData);
  
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
  }, [data]);

  const updateData = (voteType, id) => {
    const sessionData = JSON.parse(localStorage.getItem('data'));
    const stateData = sessionData.default ? 
    sessionData.default : sessionData;
    let voteUp = 0;
    let voteDown = 0;
    // console.log('stateData ', stateData)
    const newData = stateData.map(item => {
      if(item.id === id){
        if(voteType === 'like'){
          voteUp = item.likes + 1;
          voteDown = item.dislikes != 0 ? item.dislikes - 1 : 0;
        } else {
          voteUp = item.likes !== 0 ? item.likes - 1 : 0;
          voteDown = item.dislikes + 1;
        }
        item.likes = voteUp;
        item.dislikes = voteDown;
      }
      return item;
    });
    setStorage(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  const showMessage = (id, voteState) => {
    toast("🦄 Thank you for voting!");
    updateState(id, voteState);
  }

  const updateState = (id, voteState) => {
    const stateData = storageData.default ? storageData.default : storageData;
    const newData = stateData.map(item => {
      if(item.id === id){
        item.voteState = !voteState;
      }
      return item;
    });
    setStorage(newData);
    localStorage.setItem('data', JSON.stringify(newData));
  }

  return (
    <main className="home">
      <ToastContainer />
      <section className="home__message">
        <div className="home__message__left">
          <p className="text">Speak out. Be heard. </p>
          <p className="strong-text">Be counted</p>
        </div>
        <div className="home__message__right">
          <p>Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.</p>
        </div>
        <button className="home__message__button">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </section>
      <section className="home__votes">
        <h3>Votes</h3>
        <div className="home__votes__cards">
        {
          storageData.map(item => 
            <Card data={item} key={item.id} updateData={updateData} showMessage={showMessage} updateState={updateState} />
          )
        }
        </div>
      </section>
      <section className="home__subscribe">
        <p>Is there anyone else you would want us to add?</p>
        <button type="button">
            Submit a Name
        </button>
      </section>
    </main>
  );
}

export default Home;
