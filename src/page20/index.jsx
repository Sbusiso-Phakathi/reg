import React, { useState } from "react";
import "./index.css"; // CSS for styling the modal
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
    <div className="App">
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
      <div className='main-container12'>
      <div className='rectangle12' />
      <div className='carbon-close-filled12'>
        <div className='vector12' />
      </div>
      <div className='shaper-full-logo12'>
        <div className='shaper-full-logo-112' />
      </div>
      <span className='attendance-register12'>ATTENDANCE REGISTER</span>
      <form onSubmit={handleSubmit}>
      <div className='image12' />
      <div className='shaper-imagery12' />
      <span className='add-learner12'>Add Learner</span>
      <div className='email12'>
        <span className='firstname12'>Firstname</span>
        <div className='rectangle-212' />
        <input className='email-input12' />
      </div>
      <div className='password12'>
        <span className='lastname12'>Lastname</span>
        <div className='rectangle-312' />
        <input className='password-input12' />
      </div>
      <div className='password-412'>
        <span className='email-512'>Email</span>
        <div className='rectangle-612' />
        <input className='password-input-712' />
      </div>
      <div className='cohort-name12'>
        <div className='rectangle-812' />
        <div className='ooui-next-ltr12' />
        <span className='location12'>Location</span>
      </div>
      <div className='cohort-name-912'>
        <div className='rectangle-a12' />
        <div className='ooui-next-ltr-b12' />
        <span className='select-cohort12'>  
          <select type="text" className='text-input10' id="cohort" name="cohort" onChange={handleChange} placeholder='Pick Cohort'  required>
              <option value="10">Angola</option>
              <option value="11">Botswana</option>
              <option value="12">Congo</option>
              <option value="9">Fiji</option>
           </select>
        </span>
      </div>
      <div className='footer12'>
        <div className='rectangle-c12' />
      </div>
      <button className='retry-button12'>
        <div className='rectangle-d12' />
        <button className='live-button3'>Submit</button>
  
        <div className='next-container12'>
          <div className='vector-e12' />
        </div>
      </button>  </form>
    </div>
      </Modal>
    </div>
  );
};

export default App;
