import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import _ from 'lodash';
import Page13 from '/src/page13/index.jsx';
import Page12 from '/src/page12/index.jsx';

export default function Main() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  // const [data2, setData2] = useState([]);
  const [all, setAll] = useState([]);
  const [allids, setAllids] = useState([]);
  const [date, setDate] = useState(new Date());
  const [cohort, setCohort] = useState(17);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [isActive, setIsActive] = useState(false); 
  const [idcohort, setIdcohort] = useState(); 
  const [isCohortVisible, setIsCohortVisible] = useState(false); 
  const [isUp, setIsup] = useState(false); 

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button  onClick={onClose}>
          <div className='carbon-close-filled12'>
        <div className='vector12' />
      </div>
          </button>
          {children}
        </div>
      </div>
    );
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(null); 

  const handleOpenModal = (page) => {
    setCurrentPage(page);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPage(null);
  };


  const report = () => {
    navigate('/Page18', { replace: true });
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };


  const toggleCohort = () => {
    setIsCohortVisible(!isCohortVisible);
    setIsup(!isUp);
  };

  const handleDateChange = async (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = selectedDate.toISOString().split('T')[0];
    try {

      const response = await fetch(`http://localhost:5002/data?date=${formattedDate}&cohort=${cohort}`);
      const result = await response.json();
      setData(result); 
      console.log(result)
      setIsModalOpen(false)      
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsCalendarVisible(true)

    }
  }

  const delet = (id) => {
    axios
      .delete(`http://127.0.0.1:5002/delet/${id}`)
      .then(() => {
        setData(data.filter(user => user.id !== id));
      })
      .catch(error => {
        console.error("Error deleting the user:", error);
      });
  };
  
  const search = async () => {
        setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5002/search`, {
          params: { query: searchQuery },
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
      finally {
        setLoading(false);
      }
    };
  const debouncedSearch = _.debounce(search, 300);

  const users = (id) => {
    setIsActive(true)
    setIdcohort(id)
    axios
      .get(`http://127.0.0.1:5002/users/${id}`)
      .then(response => {
        console.log(id);
        setData(response.data || []);
        setCohort(id)
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5002/learners`)
      .then(response => {
        if (response.data && response.data.length > 0) {
          setData(response.data);
          setAll(response.data[0].all || []);
          setAllids(response.data[0].allids || []);
        }
      })
      .catch(error => {
        console.error("Error fetching learners:", error);
      });
  }, []);

  const multiArrayData = data.map(user => [
    user.id,
    user.name,
    user.surname,
    user.site,
    user.lid,
    user.cohort,
    user.email,
  ]);

  const cohortTopOffset = 70;
  const baseY = 120;
  const baseYButton = 154;
  const baseX = [40, 147, 263, 395, 495, 580, 695];
  const styles = ['text-1c9', 'text-1d9', 'text-1e9', 'text-209', 'text-219', 'text-229', 'text-239'];

  return (
    <div className='main-container21'>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {currentPage === "page12" && <Page12/>}
        {currentPage === "page13" && <Page13/>}
        {currentPage === "calendar" &&    
          <div style={{ margin: '20px' }}>
                <Calendar onChange={handleDateChange} value={date} className="custom-calendar" />
          </div>}
      </Modal>

      <div className='flex-row21'>
        <div className='rectangle21'>
          <div className='flex-row-db21'>
            <div className='shaper-full-logo21' />
            <div className='shaper-wordmark21' />
          </div>
          <button
            className='plus9'
            onClick={toggleCohort}
            style={{ fontSize: '24px', border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            { isUp ? <span>&darr;</span> : <span>&rarr;</span>}
          </button>
        </div>

        <div className='rectangle-121'>
          <a href="#" onClick={() => handleOpenModal("calendar")()}><div className='calendar9' style={{ textAlign: "center",   top: '-13px', marginTop: "40px", marginLeft: "885px"}}/></a>
       
          <div className='rectangle-221'>
            <span className='time21'>Time</span>
            <span className='time-range21'>9:00 AM to 4:30</span>
          </div>
          <div className='rectangle-321'>
            <span className='date21'><strong>{date.toDateString()}</strong></span>
          </div>
          <span className='dashboard21'>Dashboard</span>
          <div className='rectangle-421'>
            <div className='report-box-multiple21'>
              <div className='vector21' />
            </div>
            <a href="" onClick={report}><span className='report21'>Report</span></a>
          </div>
          <span className='attendence21'>Attendance</span>
        </div>
        <span className='powered-by-the-digital-academy21'>
          POWERED BY THE DIGITAL ACADEMY
        </span>

         <div class="search-container">
        <input type="text" class="search-input" placeholder="Search"   value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    debouncedSearch();
                }}/>

        {multiArrayData.length > 0 ? (multiArrayData.map((user, index) => (
            <div key={index} className="user-row">
                {user.slice(1).map((detail, i) => (
                <span
                    style={{ height: '16px', top: `${baseY + (35 * (index + 1))}px`, left: `${baseX[i]}px` }}
                    className={styles[i]}
                    key={i}
                >
                    {detail}
                </span>
                ))}
                <button
                    style={{ top: `${baseYButton + (45 * index)}px` }}
                    className='frame9'
                >
                <span className='edit9'>Edit</span>
                </button>
                <button
                    onClick={() => delet(user[0])}
                    style={{ top: `${baseYButton + (45 * index)}px` }}
                    className='frame-a9'
                >
                    <span className='delete9'>Delete</span>
                </button>
            </div>
        ))):   <div className='rectangle-1321'>
        <span className='no-data-display21'>
          No Data to Display Please add a new cohort
        </span>
      </div>}
        
      <div >
          {all.map((detail, i) => (
           <div key={i}> {  isCohortVisible ?
                (<div key={i}>
              <span
                style={{ top: `${cohortTopOffset + (33 * i)}px`}}
                className='angola9' 
              >
                <div className='rectangle-999' style={{ background:"#00c8b0" }}>{ detail == "all"? <a href='#' style={{ textDecoration: "none", padding: "10px" }} onClick={() => users(5000)}>{detail}</a>:
                 <a href='#' style={{ textDecoration: "none", padding: "10px" }} onClick={() => users(allids[i])}>{detail}</a>}</div>
              </span>
              <span
                style={{ top: `${cohortTopOffset + (34.5 * i)}px` }}
                className='number-139'
              >
                {all.length}
              </span>
            </div>):  (<div key={i}>
            </div>)}</div>
          ))}
        </div>
        <a href="#" onClick={() => search()}><div class="search-icon"/></a>
        </div>
  
        <div className='rectangle-821'>
        
         <button
            onClick={() => handleOpenModal("page12")}
            style={{ fontSize: '34px', border: 'none', left: "5px", color: "white", background: 'transparent', cursor: 'pointer' }}
          >
           <span className='add-cohort21' style={{ left: "25px"}}>Add Cohort +</span>
          </button>
        </div>

        <div className='rectangle-821' style={{ left: "1050px" }}>
        
         <button
            onClick={() => handleOpenModal("page13")}
            style={{ fontSize: '34px', border: 'none', left: "5px", color: "white", background: 'transparent', cursor: 'pointer' }}
          >
            <span className='add-cohort21' style={{ left: "25px"}}>Add Learner +</span>
          </button>

        </div>
        <span className='cohort21' style={{ top: "100px" , left: "50px" }}>Manage Learners </span>
        <span className='cohort21'>Cohorts </span>
        <div className='rectangle-a21' />
 
        <div className='rectangle-b21'>
          <span className='attendance21'>Attendence</span>
          <span className='attendance-date21'>Attendance Date</span>
          <span className='learner-id21'>Learner ID</span>
          <span className='surname21'>Surname</span>
          <span className='cohort-c21'>Cohort</span>
          <span className='name21'>Name</span>
          <span className='email21'>Email</span>
        </div>
        {/* <span className='botswana21'>Botswana</span>
        <span className='zero-d21'>
          0<br />
        </span>
        <span className='congo21'>Congo</span>
        <span className='text-1721'>
          0<br />
        </span>
        <span className='fiji21'>Fiji</span>
        <span className='zero-e21'>
          0<br />
        </span>
        <div className='rectangle-f21' />
        <span className='haiti21'>Haiti</span>
        <span className='zero-1021'>0</span>
        <span className='all21'>All</span>
        <span className='zero-1121'>0</span> */}
        {/* <div className='vector-1221' style= {{ top: `${cohortTopOffset + 300 }px` }}/> */}
        {/* <span className='manage-learners21'>Manage Learners</span> */}
      
        <div className='rectangle-1421'>
          <div className='olawale-munna-unsplash21' />
          <div className='rectangle-1521' />
          <span className='admin-user21'>Admin User</span>
        </div>
        <button className='rectangle-1621'>
          <span className='number-221'>2</span>
        </button>
        <span className='previous21'>Previous</span>
        <span className='next21'>Next</span>
        <div className='back-1721' />
        <span className='number-121'>1</span>
        <span className='number-321'>3</span>
        <div className='back-1821' />
        <div className='ellipse-1921' />
        <div className='ellipse-1a21' />
        <div className='ellipse-1b21' />
        <span className='admin-email21'>Admin@Shaper.co.za</span>
      </div>
      <span className='shaper-copyright21'>
        Shaper (c) 2024 all right reserved
      </span>
    </div>
  );
}
