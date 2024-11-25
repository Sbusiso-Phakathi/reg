import React, { useRef,useState, useEffect, } from "react";
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {

  const navigate = useNavigate();
  const [CohortAdded, setCohortAdded] = useState(""); 

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
      setCohortAdded(response.data.message)
      // navigate('/page21', { replace: true,  state: response.data}); 
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <div>{ CohortAdded == "" ?
    <div className='main-container12'>
      <div className='rectangle12' />
      <div className='shaper-full-logo12'>
        <div className='shaper-full-logo-112' />
      </div>
      <span className='attendance-register12'>ATTENDANCE REGISTER</span>
      <div className='image12' />
      <div className='shaper-imagery12' />
      <span className='add-learner12'>Add Cohort</span>
      <form onSubmit={handleSubmit}>
        <div className='email12'>
          <input type="text" className='text-input10'   id="cohortname" name="cohortname" onChange={handleChange} required placeholder='Cohort Name'  />
        </div>
        <div className='password12'>
          <select type="text" className='text-input10' id="siteid" name="siteid" onChange={handleChange} placeholder='Site Name' required>
            <option value="0">Remote</option>
            <option value="1">Front Office</option>
            <option value="2">Back Office</option>
          </select>
        </div>
        <button className='retry-button12'>
          <div className='rectangle-d12' />
          <span className='next-span12'>Next</span>
          <div className='next-container12'>
            <div className='vector-e12' />
          </div>
        </button>
      </form>
    </div>: <div >You have successfully added a cohort, thank you.</div>
      }
    </div>
  );
}
