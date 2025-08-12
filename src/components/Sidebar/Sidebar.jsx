// src/components/Sidebar/Sidebar.js
import React from 'react';
// import styles from './Sidebar.css';


const Sidebar = ({ cohorts, counts, users, allids, toogle, isup }) => {
    console.log(allids)
    return (
        <div>     
            <button
                className='plus9'
                onClick={toogle}
                style={{ fontSize: '24px', border: 'none', background: 'transparent', left:'-440px', top: '-20px' ,cursor: 'pointer' }}
            >
                { isup ? <span>&rarr;</span> : <span>&darr;</span>}
            </button>
            <div className='angola9'>
                <aside className='cohort-container'>
                    <div className='cohort-scrollable'>
                    {cohorts.map((cohort,i) => (
                        <div key={cohort.i} className='cohort-item'>
                        <div>{ cohort == "all"? <a href='#'  style={{ textDecoration: "none", padding: "10px" }} onClick={() => users(5000)}>{cohort}</a>:
                        <a href='#'  style={{ textDecoration: "none", padding: "10px" }} onClick={() => users(allids[i])}>{cohort}</a>}</div>
                        <span className='count'>{counts[i]}</span>
                        </div>
                    ))}
                    </div>
                </aside>
            </div>
        </div>
    );
  };
  
  export default Sidebar;