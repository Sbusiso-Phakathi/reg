import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import _ from 'lodash';
import Page13 from '/src/page12/index.jsx';
export default function Main() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [all, setAll] = useState([]);
  const [allids, setAllids] = useState([]);
  const [date, setDate] = useState(new Date());
  const [cohort, setCohort] = useState();
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  // Navigation to registration page
  const register = () => {
    navigate('/Page5', { replace: true });
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleDateChange = async (selectedDate) => {
    setDate(selectedDate);
    // Convert the date to a format your backend understands (e.g., YYYY-MM-DD)
    const formattedDate = selectedDate.toISOString().split('T')[0];
    // Fetch data from the backend for the selected date
    try {

      const response = await fetch(`http://localhost:5002/data?date=${formattedDate}&cohort=${cohort}`);
      const result = await response.json();
      setData(result); // Save fetched data to state
      console.log(result)
      if (result.length  == 0){
        setIsCalendarVisible(true)
      }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsCalendarVisible(true)

    }

  }

  // Delete a user by ID
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

  // Fetch details of a specific user
  const users = (id) => {
    axios
      .get(`http://127.0.0.1:5002/users/${id}`)
      .then(response => {
        console.log(response.data);
        setData(response.data);
        setCohort(id)
      })
      .catch(error => {
        console.error("Error fetching user details:", error);
      });
  };

  // Fetch learners on component mount
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

  // Transform data for rendering
  const multiArrayData = data.map(user => [
    user.id,
    user.name,
    user.surname,
    user.site,
    user.lid,
    user.cohort,
    user.email,
  ]);

  const cohortTopOffset = 182;
  const baseY = 255;
  const baseYButton = 274;
  const baseX = [270, 377, 492, 615, 725, 810, 922];
  const styles = ['text-1c9', 'text-1d9', 'text-1e9', 'text-209', 'text-219', 'text-229', 'text-239'];

  return (
    <div className='main-container9'>
                
    <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {<Page13/>}
    </Modal>

      <div className='flex-row-d9'>
        <div className='rectangle9'>
          <div className='flex-row-db9'>
            <div className='shaper-full-logo-vertical9' />
            <div className='shaper-wordmark-black-navy9' />
          </div>
          <button
            className='plus9'
            onClick={handleOpenModal}
            style={{ fontSize: '24px', border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            +
          </button>
 
        </div>
        <div className='rectangle-19'>
          <div className='ellipse9' />
          <div className='rectangle-29'>
            {/* <span className='attendance9'>Attendance</span> */}
            <a href="#" onClick={() => toggleCalendar()}><div className='calendar9' style={{ textAlign: "center",   top: '0px', marginTop: "0px", marginLeft: "700px"}}/></a>
            <span className='date9'> 
                <p style={{ textAlign: "center", top: '29px', marginLeft: "700px"}}>
                    <strong>{date.toDateString()}</strong>
                </p>
            </span>
          </div>
          <div className='rectangle-39'>
            <span className='time9' style={{  marginLeft: "280px"}}>Time</span>
            <span className='time-range9' style={{ textAlign: "center", marginTop: "12px", marginLeft: "280px"}}> 9:00 AM to 4:30 PM</span>
          </div>
          <div className='rectangle-39'>
            <span className='time9' style={{  marginLeft: "-230px", fontFamily:'Lexend Deca, var(--default-font-family)', fontSize:38}}>Dashboard</span>
            <span className='time-range9' style={{ textAlign: "center", marginTop: "12px", marginLeft: "280px"}}> 9:00 AM to 4:30 PM</span>
          </div>
          <div className='rectangle-49' style={{ textAlign: "center", marginTop: "12px", marginLeft: "460px"}}>
            <div className='report-box-multiple9'>
              <div className='vector9' />
            </div>
            <span className='report9'>Report</span>
          </div>
          <div className='rectangle-49' style={{ textAlign: "center", marginTop: "82px", marginLeft: "420px", width:"130px", background:"#01317f" }}>
            <div className='report-box-multiple9'>
              <div className='vector9' />
            </div>
            <span className='report9'>Add Cohort</span>
          </div>
        </div>
        <span className='powered-by-digital9'>POWERED BY THE DIGITAL ACADEMY</span>

        <div class="search-container">
        <input type="text" class="search-input" placeholder="Search"   value={searchQuery}
                onChange={(e) => {
                    setSearchQuery(e.target.value);
                    debouncedSearch();
                }}/>
        <a href="#" onClick={() => search()}><div class="search-icon"/></a>
        </div>


        <span className='cohort-text9'>Cohort</span>
        <div className='rectangle-89' />
        <div className='rectangle-99'>
          <span className='registration-date9'>Registration Date</span>
          <span className='attendance9'>Attendance</span>
          <span className='learner-id9'>Learner ID</span>
          <span className='surname9'>Surname</span>
          <span className='cohort9'>Cohort</span>
          <span className='action9'>Action</span>
          <span className='name9'>Name</span>
          <span className='email9'>Email</span>
        </div>

        {/* Render "all" details */}
        <div >
          {all.map((detail, i) => (
            <div key={i}>
              <span
                style={{ top: `${cohortTopOffset + (33 * i)}px`}}
                className='angola9' 
              >
               <div className='rectangle-999'>{ detail == "all"? <a href='#' onClick={() => users(5000)}>{detail}</a>: <a href='#' onClick={() => users(allids[i])}>{detail}</a>}</div>
              </span>
              <span
                style={{ top: `${cohortTopOffset + (34.5 * i)}px` }}
                className='number-139'
              >
                {all.length}
              </span>
            </div>
          ))}
        </div>

        {/* Render user rows */}
        {multiArrayData.map((user, index) => (
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
                {isCalendarVisible && (
                <div style={{ margin: '20px' }}>
                  <Calendar onChange={handleDateChange} value={date} className="custom-calendar" />
                </div>
              )}
            </div>
        ))}

        <div className='box-499' />
        <div className='pic-59' />
        <button className='Button-39'>
          <span className='text-289'>2</span>
        </button>
        <span className='text-29'>Previous</span>
        <span className='text-2a9'>Next</span>
        <div className='pic-69' />
        <span className='text-2b9'>1</span>
        <span className='text-2c9'>3</span>
        <div className='img-39' />
        <div className='box-59'>
          <div className='pic-79' />
          <div className='section-69' />
          <span className='text-2d9'>Admin User</span>
        </div>
        <div className='img-49' />
        <div className='img-59' />
        <div className='img-69' />
        <span className='text-2e9'>Admin@Shaper.co.za</span>
      </div>
      <span className='span9'>Shaper (c) 2024 all right reserved</span>
    </div>
  );
}
