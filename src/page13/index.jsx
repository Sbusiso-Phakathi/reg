import React, { useRef,useState, useEffect, } from "react";
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {

  const navigate = useNavigate();
  const [cohort, setCohort] = useState([]);


  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    cohort: '',
    learnernumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5002/cohorts`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          setCohort(response.data || []);
          console.log(cohort)

        }
      })
      .catch(error => {
        console.error("Error fetching learners:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
        navigate('/page0', { replace: true, state: formData}); 
  };

  return (
    <div className='main-container12'>
      <div className='rectangle12' />
      <div className='shaper-full-logo12'>
        <div className='shaper-full-logo-112' />
      </div>
      <span className='attendance-register12'>ATTENDANCE REGISTER</span>
      <div className='image12' />
      <div className='shaper-imagery12' />
      <span className='add-learner12'>Add Learner</span>
      <form onSubmit={handleSubmit}>
        <div className='email12'>
          <input type="text" className='text-input10'   id="name" name="name" onChange={handleChange} required placeholder='Name'  />
        </div>
        <div className='email12' style={{ top:"335px" }}>
          <input type="text" className='text-input10'   id="surname" name="surname" onChange={handleChange} required placeholder='Surname'  />
        </div>
        <div className='email12' style={{ top:"400px" }}>
          <input type="email" className='text-input10'   id="email" name="email" onChange={handleChange} required placeholder='Email'  />
        </div>
        <div className='password12'>
          <select type="text" className='text-input10' id="cohort" name="cohort" onChange={handleChange} placeholder='Cohort' required>
          {cohort.map((coh, dayIndex) => (
                 <option value="17">{coh}</option>
                  ))}
            
          </select>
        </div>
        <div className='email12' style={{ top:"470px" }}>
          <input type="text" className='text-input10'   id="learnernumber" name="learnernumber" onChange={handleChange} required placeholder='Learner Number'  />
        </div>
        <button className='retry-button12'>
          <div className='rectangle-d12' />
          <span className='next-span12'>Next</span>
          <div className='next-container12'>
            <div className='vector-e12' />
          </div>
        </button>
      </form>
    </div>
  );
}
