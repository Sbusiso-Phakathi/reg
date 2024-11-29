import React from 'react';
import Calendar from "react-calendar";

const PageHeader = ({ modal, date, report, handleDateChange }) => {
    
    return (
        <div>
           <div className='rectangle-121'>
          <a href="#" onClick={() => handleOpenModal("calendar")()}><div className='calendar9' style={{ textAlign: "center",   top: '-13px', marginTop: "40px", marginLeft: "885px"}}/></a>
       
          <div className='rectangle-221'>
            <span className='time21'>Time</span>
            <span className='time-range21'>9:00 AM to 4:30</span>
          </div>
          <div className='rectangle-321'>
            <span className='date21'><strong>{date}</strong></span>
          </div>
          <span className='dashboard21'>Dashboard</span>
            {/* <div style={{ margin: '20px' }}>
                  <Calendar onChange={handleDateChange} value={date} className="custom-calendar" />
            </div> */}
          <div className='rectangle-421'>
            <div className='report-box-multiple21'>
              <div className='vector21' />
            </div>
            <a href="" onClick={report}><span className='report21'>Report</span></a>
          </div>
          <span className='attendence21'>Attendance</span>
        </div>
        </div>
   );
};

export default PageHeader;