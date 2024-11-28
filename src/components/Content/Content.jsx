// src/components/Sidebar/Sidebar.js
import React from 'react';
// import styles from "../Content/Content.module.css"

const Content = ({ learners }) => {
    return (
      <div className="text-1c">
      <aside className="cohort-container">
        <div className="cohort-scrollable2">
          {learners.length > 0 ? (
            learners.map((users, index) => (
              <div key={index} className="user-row">
                {users.map((user, userIndex) => (
                  <div key={userIndex} className="cohort-item">
                    <span className="country">{user}</span>
                    {/* <span className="count">{user.surname}</span>
                    <span className="country">{user.cohort}</span>
                    <span className="country">{user.email}</span>
                    <span className="country">{user.site}</span>
                    <span className="country">{user.site}</span> */}
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className="rectangle-1321">
              <span className="no-data-display21">
                No Data to Display. Please add a new cohort.
              </span>
            </div>
          )}
        </div>
      </aside>
    </div>
    );
  };
  
  export default Content;