import React from 'react';

const Add = ({ modal }) => {
    
    return (
        <div>
            <div className='rectangle-821'>
                <button
                onClick={() => modal("page12")}
                style={{ fontSize: '34px', border: 'none', left: "5px", color: "white", background: 'transparent', cursor: 'pointer' }}
                >
                <span className='add-cohort21' style={{ left: "25px"}}>Add Cohort +</span>
                </button>
                </div>

                <div className='rectangle-821' style={{ left: "1050px" }}>

                <button
                onClick={() => modal("page13")}
                style={{ fontSize: '34px', border: 'none', left: "5px", color: "white", background: 'transparent', cursor: 'pointer' }}
                >
                <span className='add-cohort21' style={{ left: "25px"}}>Add Learner +</span>
                </button>
            </div>
        </div>
   );
};

export default Add;