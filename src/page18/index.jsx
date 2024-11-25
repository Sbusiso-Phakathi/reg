import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    employee_metrics: [],
    attendance_per_day: [],
    daily_late_comers: [],
  });

  useEffect(() => {
    // Fetch all dashboard data
    axios.get("http://localhost:5002/attendance").then((response) => {
      setDashboardData(response.data);
    });
  }, []);

  const { employee_metrics, attendance_per_day, daily_late_comers } = dashboardData;

  return (
    <div className="dashboard">
      {/* Days Present */}
      <h2>No. Days Present</h2>
      <BarChart width={600} height={300} data={employee_metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="days_present" fill="#8884d8" />
      </BarChart>

      {/* Cost to Company */}
      <h2>Cost to Company (Minutes)</h2>
      <BarChart width={600} height={300} data={employee_metrics}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="cost_to_company_minutes" fill="#82ca9d" />
      </BarChart>

      {/* Attendance vs Day */}
      <h2>Attendance vs Day</h2>
      <LineChart width={600} height={300} data={attendance_per_day}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="employees_present" stroke="#8884d8" />
      </LineChart>

      {/* Daily Late Comers */}
      <h2>Daily Late Comers</h2>
      <LineChart width={600} height={300} data={daily_late_comers}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="late_comers" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default Dashboard;
