import React from 'react';

const Pagination = ({ users }) => {
    
    return (
        <div>
            <a href='#'  style={{ textDecoration: "none", padding: "10px" }} onClick={() => users(5000)}>jan</a>

              <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <button className='rectangle-1621'>
          <span className='number-221'>Feb</span>
        </button>
        <span className='previous21'>Previous</span>
        {/* <span className='next21'>Next</span>
        <div className='back-1721' />
        <span className='number-121'>Jan</span>
        <span className='number-321'>Mar</span>
        <div className='back-1821' />
        <div className='ellipse-1921' />
        <div className='ellipse-1a21' />
        <div className='ellipse-1b21' /> */}
        </div>
   );
};

export default Pagination;