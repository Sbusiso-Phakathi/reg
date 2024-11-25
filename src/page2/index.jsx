import React, { useRef, useState, useEffect } from "react";
import './index.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Main() {

  const location = useLocation();
  const message = location.state;

  const navigate = useNavigate();

  const home = () => {
    navigate('/Page1', { replace: true });
  };
 
  return (
    <div className='main-container2'>
      <span className='face-recognition2'>Face Recognition</span>
      <div className='image2'>
        <div className='flex-row2'>
          <div className='group2' />
          <div className='group-12' />
        </div>
        <div className='success2'>
          <div className='vector2' />
        </div>
        <div className='flex-row-fa2'>
          <div className='group-22' />
          <div className='group-32' />
        </div>
      </div>
      <span className='face-recognised2'>Face Recognised</span>
      <div className='signed-in2'>
        <span className='signed-in-42'>
          You Have Successfully Signed in as <br />
        </span>
        <span className='bonolo-pwd2'>{message}</span>
      </div>
      <button className='live2' onClick={home}>
        <span className='home2' >Home</span>
      </button>
      {/* <img src={name} alt="Fetched content" /> */}

    </div>
  );
}

