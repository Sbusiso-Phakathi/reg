import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const navigate = useNavigate();

  const register = () => {
    navigate('/Page8', { replace: true });
  };

  return (
    <div className='main-container'>
      <span className='account-verification7'>Account Verification</span>
      <span className='enter-otp7'>
        Enter email to receive one-time pin
      </span>
      <div className='rectangle3'>
        <input className='text-input' type='text' id="email" name="email"
                required placeholder='Email' 
        />
        </div>
      <button className='live7' onClick={register}>
        <span className='next7'>Next</span>
      </button>

    </div>
  );
}

