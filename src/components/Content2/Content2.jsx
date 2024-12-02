// src/components/Sidebar/Sidebar.js
import React, { useState } from 'react';
import './Content2.css'; 

const initialAttendanceData = [
  {
    name: "Luiza Leveque",
    title: "Sales Associate",
    department: "Sales",
    attendance: ["H", "H", "Y", "Y", "Y", "Y", "Y", "N", "N", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 15,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 9,
      noShow: 2,
      attendancePercentage: 42
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  },
  {
    name: "Suman Shine",
    title: "Project Manager",
    department: "Engineering",
    attendance: ["P", "P", "U", "U", "Y", "Y", "Y", "U", "U", "P", "P", "Y", "Y", "Y", "H", "H", "Y", "Y", "Y", "Y", "Y", "Y"],
    totals: {
      attended: 19,
      sickPTO: 5,
      unpaidLeave: 5,
      holidayNonWork: 3,
      noShow: 0,
      attendancePercentage: 59
    }
  }
];

const statusColors = {
  Y: "status-y",
  P: "status-p",
  U: "status-u",
  N: "status-n",
  H: "status-h"
};

const statusLabels = {
  Y: "Employee Attended",
  P: "Sick/PTO",
  U: "Unpaid PTO",
  N: "No Show/No Call",
  H: "Non-working/Public Holiday"
};

const Content2 = ({ learners }) => {

  console.log(learners)

  const [attendanceData, setAttendanceData] = useState(initialAttendanceData);

  const updateAttendance = (employeeIndex, dayIndex, newStatus) => {
    const newData = [...attendanceData];
    newData[employeeIndex].attendance[dayIndex] = newStatus;
    updateTotals(newData, employeeIndex);
    setAttendanceData(newData);
  };

  const updateTotals = (data, employeeIndex) => {
    const employee = data[employeeIndex];
    const totals = {
      attended: 0,
      sickPTO: 0,
      unpaidLeave: 0,
      holidayNonWork: 0,
      noShow: 0,
    };

    employee.attendance.forEach(status => {
      switch (status) {
        case 'Y': totals.attended++; break;
        case 'P': totals.sickPTO++; break;
        case 'U': totals.unpaidLeave++; break;
        case 'H': totals.holidayNonWork++; break;
        case 'N': totals.noShow++; break;
      }
    });

    totals.attendancePercentage = Math.round((totals.attended / 21) * 100);
    employee.totals = totals;
  };

    return (
 
      <div className="attendance-sheet">
      <h1 className="sheet-title">SHAPER MONTHLY EMPLOYEE ATTENDANCE REPORT</h1>
{/*       
      <div className="sheet-info">
        <div>
          <h3>PREPARED BY</h3>
          <p>Karl Peter</p>
        </div>
        <div>
          <h3>MONTH AND YEAR</h3>
          <p>January-2024</p>
        </div>
        <div>
          <h3>BUSINESS NAME</h3>
          <p>Alpha Inc.</p>
        </div>
      </div> */}

      <div className="status-legend">
        {Object.entries(statusLabels).map(([key, label]) => (
          <div key={key} className="status-item">
            <span className={`status-indicator ${statusColors[key]}`}>{key}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="table-container">
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i}>{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {learners.map((employee, employeeIndex) => (
              <React.Fragment key={employee[0]}>
                <tr>
                  <td className="employee-info">
                    <div>{employee[1]}</div>
                    {/* <div className="employee-title">{employee[1]}</div> */}
                    {/* <div className="employee-department">{employee[2]}</div> */}
                  </td>
                  {(employee[7]).map((status, dayIndex) => (
                    <td 
                      key={dayIndex} 
                      className={`attendance-cell ${statusColors[status]}`}
                      onClick={() => {
                        const statuses = Object.keys(statusColors);
                        const newStatus = statuses[(statuses.indexOf(status) + 1) % statuses.length];
                        updateAttendance(employeeIndex, dayIndex, newStatus);
                      }}
                    >
                      {status}
                    </td>
                  ))}
                </tr>
                {/* <tr className="totals-row">
                  <td>REPORT TOTALS</td>
                  <td colSpan="22">
                    <div className="totals-info">
                      <span>Attended: {employee.totals.attended}</span>
                      <span>Sick/PTO: {employee.totals.sickPTO}</span>
                      <span>Unpaid Leave: {employee.totals.unpaidLeave}</span>
                      <span>Holiday/Non-work: {employee.totals.holidayNonWork}</span>
                      <span>No Show/No Call: {employee.totals.noShow}</span>
                      <span>Attendance %: {employee.totals.attendancePercentage}%</span>
                    </div>
                  </td>
                </tr> */}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );


  };
  
  export default Content2;