import React, { useRef,useState, useEffect, } from "react";
import './index.css';
import { useNavigate } from 'react-router-dom';


export default function Main() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    cohort: '',
    lid: '',
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
        navigate('/page0', { replace: true, state: formData}); 
  };

  return (
      <div className='main-container10'>
        <form onSubmit={handleSubmit}>

          <span className='powered-by-digital10'>POWERED BY THE DIGITAL ACADEMY</span>
          <span className='attendance-register10'>ATTENDANCE REGISTER</span>

          <div className='rectangle10'>
            <input type="text" className='text-input10'   id="name" name="name" onChange={handleChange} required placeholder='Name' />
          </div>

          <div className='rectangle-110'>
            <input type="text" className='text-input10' id="surname" name="surname" onChange={handleChange} required placeholder='Surname'  />
          </div>

          <div className='rectangle-210'>
            <input type="email" className='text-input10 'id="email" name="email" onChange={handleChange} required placeholder='Email'  />
          </div>

          <div className='rectangle-410'>
            <select type="text" className='text-input10' id="cohort" name="cohort" onChange={handleChange} placeholder='Pick Cohort'  required>
              <option value="21">Angola</option>
              <option value="20">Botswana</option>
              <option value="20">Congo</option>
              <option value="19">Fiji</option>
            </select>
          </div>

          <div className='rectangle-510'>
            <input type="text" className='text-input10 'id="lid" name="lid" onChange={handleChange} required placeholder='Learner Number'  />
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
