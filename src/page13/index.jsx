
// import React, { useRef,useState, useEffect, } from "react";
// import './index.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


// export default function Main() {


//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     cohortname: '',
//     siteid: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         'http://127.0.0.1:5002/cohorts',  
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data', "Cache-Control": "no-cache", } }
//       );

//       console.log(response.data);
//       navigate('/page6', { replace: true,  state: response.data}); 
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };
//   return (
//     <div className='main-container12'>
//       <div className='rectangle12' />
//       {/* <div className='carbon-close-filled12'>
//         <div className='vector12' />
//       </div> */}
//       <div className='shaper-full-logo12'>
//         <div className='shaper-full-logo-112' />
//       </div>
//       <span className='attendance-register12'>ATTENDANCE REGISTER</span>
//       <div className='image12' />
//       <div className='shaper-imagery12' />
//       <span className='add-learner12'>Add Learner</span>
//       <div className='email12'>
//         <span className='firstname12'>Firstname</span>
//         <div className='rectangle-212' />
//         <input className='email-input12' />
//       </div>
//       <div className='password12'>
//         <span className='lastname12'>Lastname</span>
//         <div className='rectangle-312' />
//         <input className='password-input12' />
//       </div>
//       <div className='password-412'>
//         <span className='email-512'>Email</span>
//         <div className='rectangle-612' />
//         <input className='password-input-712' />
//       </div>
//       <div className='cohort-name12'>
//         <div className='rectangle-812' />
//         <div className='ooui-next-ltr12' />
//         <span className='location12'>Location</span>
//       </div>
//       <div className='cohort-name-912'>
//         <div className='rectangle-a12' />
//         <div className='ooui-next-ltr-b12' />
//         <span className='select-cohort12'>Select Cohort</span>
//       </div>
//       <div className='footer12'>
//         <div className='rectangle-c12' />
//       </div>
//       <button className='retry-button12'>
//         <div className='rectangle-d12' />
//         <span className='next-span12'>Next</span>
//         <div className='next-container12'>
//           <div className='vector-e12' />
//         </div>
//       </button>
//     </div>
//   );
// }

import React, { useRef,useState, useEffect, } from "react";
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Main() {

  const navigate = useNavigate();

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
            <option value="0">Remote</option>
            <option value="1">Front Office</option>
            <option value="2">Back Office</option>
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
