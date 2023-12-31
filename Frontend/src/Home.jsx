import React from 'react'
import {BsCalendarWeek , BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [marksData, setMarksData] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

{/* 
  const data = [
      {
        name: 'Subject 1',
        marks: 39,
        fill: "#6699cc",
        
      },
      {
        name: 'Subject 2',
        marks: 31,
        fill: "#79a6d2",
        
      },
      {
        name: 'Subject 3',
        marks: 40,
        fill: "#8cb3d9",
        
      },
      {
        name: 'Subject 4',
        marks: 25,
        fill:'#9fbfdf',
       
      },
      {
        name: 'Subject 5',
        marks: 36,
        fill: "#b3cce6",
        
      },
      {
        name: 'Subject 6',
        marks: 40,
        fill: "#c6d9ec",
        
      },
    ];   
    

    const data2 = [
      {
        name: 'Subject 1',
        attendance: 100,
        fill: "#c6d9ec",
      },
      {
        name: 'Subject 2',
        attendance: 95,
        fill: "#b3cce6",
      },
      {
        name: 'Subject 3',
        attendance: 80,
        fill: "#9fbfdf",
      },
      {
        name: 'Subject 4',
        attendance: 89,
        fill:'#8cb3d9',
      },
      {
        name: 'Subject 5',
        attendance: 79,
        fill: "#79a6d2",
      },
      {
        name: 'Subject 6',
        attendance: 90,
        fill: "#6699cc",
      },
    ];   
    
  */}
  // const data = [
  //   {y: attendanceData[0].subject1_attendance }
  // ]
  useEffect(() => {
    // Fetch marks data
    axios.get('http://localhost:8081/student_marks')
      .then((response) => {
        setMarksData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get('http://localhost:8081/student_attendance')
      .then((response) => {
        setAttendanceData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
console.log(attendanceData,"tt");
// console.log(attendanceData[0].subject1_attendance,"kk");
const generateChartComponents = (data, dataKey, fill) => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={fill} />
      </BarChart>
    </ResponsiveContainer>
  );

return (
  <main className='main-container'>
      {/* <div className='main-title'>
          <h3>STUDENT DASHBOARD</h3>
      </div> */}

      <div className='main-cards'>
          <div className='card'>
          <div className='card-inner'>
              <h3>CLASS SCHEDULE</h3>
              <BsCalendarWeek  className='card_icon'/>
          </div>
          </div>

          <div className='card'>
          <div className='card-inner'>
              <h3>NOTIFICATIONS</h3>
              <BsFillBellFill className='card_icon'/>
          </div>
          </div>

          {/* <div className='card'>
          <div className='card-inner'>
              <h3>CUSTOMERS</h3>
              <BsPeopleFill className='card_icon'/>
          </div>
          <h1>33</h1>
          </div>

          <div className='card'>
          <div className='card-inner'>
              <h3>ALERTS</h3>
              <BsFillBellFill className='card_icon'/>
          </div>
          <h1>42</h1>
          </div> */}
      </div>
      <div className="marks-attendance-header">
        <span className="m-word">MARKS</span>
        <span className="a-word">ATTENDANCE</span>
      </div>


      <div className='charts'>
      {/* <h2>Marks </h2>  */}
      
      {generateChartComponents(marksData, 'Marks', '#6699cc')}
      {generateChartComponents(attendanceData, 'Attendance', '#31708E')}
      
      </div>
  </main>
)
}

export default Home