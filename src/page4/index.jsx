import React from 'react';
import './index.css';
import { useLocation, useNavigate } from 'react-router-dom';
import ScanFace from '../components/ScanFace/ScanFace'
import Modal from '../components/Modal/Modal'

export default function Main() {
  const location = useLocation();
  const data = location.state;

  const navigate = useNavigate();

  const retry = () => {
    // navigate('/Page1', { replace: true });
 
  };

  const register = () => {
    navigate('/Page13', { replace: true });
  };

  return (
    <div className='main-container4'>
      <span className='face-recognition4'>Face Recognition</span>
      <div className='image4'>
        <div className='flex-row-a4'>
          <div className='group4' />
          <div className='group-14' />
        </div>
        <div className='group-24' />
        <div className='flex-row4'>
          <div className='group-34' />
          <div className='group-44' />
        </div>
      </div>
      <span className='face-not-recognised4'>Face Not Recognised</span>
      <span className='please-make-sure4'>
        Please make sure your face is placed on the screen or Sign Up if you're
        a first time user
      </span>
      <div className='flex-row-c4'>
        <button className='live4' onClick={retry}>
          <span className='try-again4'>Try Again</span>
        </button>
        <button className='live-button4' onClick={register}>
          <span className='register-span4'>Register</span>
        </button>
      </div>
    </div>
  );
}

