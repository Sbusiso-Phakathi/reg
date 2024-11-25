import React from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

export default function Main() {

  const navigate = useNavigate();

  const register = () => {
    navigate('/Page3', { replace: true });
  };

  return (
    <div className='main-container'>
      <span className='account-verification'>Account Verification</span>
      <span className='enter-otp'>
        Enter the four digits otp you received on you're email
      </span>
      <div className='rectangle-23'>
        <input className='text-input' type='text' id="otp" name="otp"
                required placeholder='OTP' 
        />
        </div>
      <button className='live' onClick={register}>
        <span className='next'>Next</span>
      </button>

    </div>
  );
}

