import React, { useRef,useState, useEffect, } from "react";
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    cohortname: '',
    siteid: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://127.0.0.1:5002/cohorts',  
        formData,
        { headers: { 'Content-Type': 'multipart/form-data', "Cache-Control": "no-cache", } }
      );

      console.log(response.data);
      navigate('/page6', { replace: true,  state: response.data}); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className='main-container10'>
       <form onSubmit={handleSubmit}>

      <span className='powered-by-digital10'>POWERED BY THE DIGITAL ACADEMY</span>
      <span className='attendance-register10'>ATTENDANCE REGISTER</span>
      <div className='rectangle10'>
        <input type="text" className='text-input10'   id="cohortname" name="cohortname" onChange={handleChange} required placeholder='Cohort Name' />
      </div>
      <div className='rectangle-510'>
        <select type="text" className='text-input10' id="siteid" name="siteid" onChange={handleChange} placeholder='Site Name' required>
          <option value="0">Remote</option>
          <option value="1">Front Office</option>
          <option value="2">Back Office</option>
        </select>
      </div>
      <div className='rectangle-710'>
       <button type="submit" className='live-button3'><span>Register</span></button> 
      </div>
      <div className='already-have-account10'>
        <span className='already-have-account-810'>Already have account? </span>
        <span className='login10'>Login</span>
      </div>
      <div className='shaper-wordmark10' />
      <div className='shaper-full-logo10' />
          </form>

    </div>

  );
}
