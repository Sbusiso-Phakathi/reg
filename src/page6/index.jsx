import React from 'react';
import './index.css';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Main() {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const home = () => {
    navigate('/Page1', { replace: true });
  };
 
  return (
    <div className='main-container6'>
      <div className='success-message6'>
        <div className='vector6' />
      </div>
      <span className='thomas-ricky6'>{data.name}</span>
      <span className='registered-message6'>
        You have successfully registered
      </span>
      <button className='live6'  onClick={home}>
        <span className='sign-in6'>Home</span>
      </button>
    </div>
  );
}
