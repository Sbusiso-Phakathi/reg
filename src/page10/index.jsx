import React from 'react';
import './index.css';

export default function Main() {
  return (
    <div className='main-container10'>
      <span className='powered-by-digital10'>POWERED BY THE DIGITAL ACADEMY</span>
      <span className='attendance-register10'>ATTENDANCE REGISTER</span>
      <div className='rectangle10'>
        <input className='text-input10'   id="name" name="name" required placeholder='Name' />
      </div>
      <div className='rectangle-110'>
        <input className='text-input10' id="surname" name="surname" required placeholder='Surname'  />
      </div>
      <div className='rectangle-210'>
        <input className='text-input10 'id="email" name="email" required placeholder='Email'  />
      </div>
      <div className='rectangle-410'>
        <input className='text-input10' id="password" name="password" required placeholder='Password' />
      </div>
      <div className='rectangle-510'>
        <input className='text-input10' id="confirm-password" name="confirm-password" required placeholder='Confirm Password' />
      </div>
      <div className='rectangle-710'>
       <button className='live-button3'><span>Register</span></button> 
      </div>
      <div className='already-have-account10'>
        <span className='already-have-account-810'>Already have account? </span>
        <span className='login10'>Login</span>
      </div>
      <div className='shaper-wordmark10' />
      <div className='shaper-full-logo10' />
    </div>
  );
}
