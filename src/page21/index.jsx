import './index.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import _ from 'lodash';
import Page13 from '/src/page13/index.jsx';
import Page12 from '/src/page12/index.jsx';
import Sidebar from "../components/Sidebar/Sidebar"
import Content from '../components/Content/Content';
import Modal from '../components/Modal/Modal'
import Add from '../components/Add/Add'
import ContentHeader from '../components/ContentHeader/ContentHeader'
import PageHeader from '../components/PageHeader/PageHeader'
import Pagination from '../components/Pagination/Pagination'
import Footer from '../components/Footer/Footer'
import AdminIcon from '../components/AdminIcon/AdminIcon'
import Logo from '../components/Logo/Logo'

export default function Main() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [all, setAll] = useState([]);
  const [allids, setAllids] = useState([]);
  const [counts, setCounts] = useState([]);
  const [date, setDate] = useState(new Date());
  const [cohort, setCohort] = useState(17);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [isActive, setIsActive] = useState(false); 
  const [idcohort, setIdcohort] = useState(); 
  const [isCohortVisible, setIsCohortVisible] = useState(false); 
  const [isUp, setIsup] = useState(false); 
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
          setCounts(response.data[0].counts || []);
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
          { <Logo/> }
        </div>

        { <PageHeader modal={handleOpenModal} date={date.toDateString()} report={report} handleDateChange={handleDateChange}/>}
        
        <span className='powered-by-the-digital-academy21'>
          POWERED BY THE DIGITAL ACADEMY
        </span>

          <div class="search-container">
            <input type="text" class="search-input" placeholder="Search"   value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        debouncedSearch();
                    }}/>

            { <Content learners={multiArrayData}/> }
            { <Sidebar cohorts={all} counts = {counts} users={users} allids={allids} toogle={toggleCohort} isup={isUp}/> } 
            <a href="#" onClick={() => search()}><div class="search-icon"/></a>
          </div>

        { <Add modal={handleOpenModal}/> }
        { <ContentHeader/> }
        { <Pagination />}

        <span className='cohort21' style={{ top: "100px" , left: "50px" }}>Manage Learners </span>
        <span className='cohort21'>Cohorts </span>
        <div className='rectangle-a21' />

        { <AdminIcon/> }
      </div>
      {<Footer /> }
    </div>
  );
}
