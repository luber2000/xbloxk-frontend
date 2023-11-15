import React from 'react';
import './Home.css';
import VideoBg from '../../assets/video/Toque_Motion_2.mp4';
import LoopIcon from '../../assets/images/home/lobby.svg';
import keyboardIcon from '../../assets/images/home/keyboard.svg';
import meetingIcon from '../../assets/images/home/meeting.svg';
import posterHome from '../../assets/images/home/Motion_2_PosterImage.png';

function Home() {
  return (
    <div className="home-container">
      <div className="home-column">
        <div className="video-container">
          <video
            className="background-video"
            src={VideoBg}
            autoPlay
            loop
            muted
            poster={posterHome}
            width="808"
            height="808"
          />
          <div className="home-text-container">
            <img className="icon-home-loop" src={LoopIcon} alt="Loop Icon" />
            <p className="home-text">Welcome to your Hub board, John! How can I assist you today?</p>
          </div>
        </div>
        
        <div className='home-icons-container'>
          <div className='icon-container'>
            <img className="icon-home" src={keyboardIcon} alt="Loop Icon" />
          </div>
          <div className='icon-container'>
            <img className="icon-home" src={meetingIcon} alt="Loop Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
