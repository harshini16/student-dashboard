import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import './navbar.css';

function Navbar() {
    const [data, setData] = useState([]);
    const [studentInfo, setStudentInfo] = useState({ studentName: '', prn: '' });

    useEffect(() => {
        // Fetch student details when the component mounts
        axios.get('http://localhost:8081/student_details')
          .then((response) => {
            const studentData = response.data[0]; // Assuming a single student record is returned
            setStudentInfo({
              studentName: studentData.studentName,
              prn: studentData.prn,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      const fetchData = () => {
        axios.get('http://localhost:8081/hostel_room') 
          .then((response) => {
            setData(response.data);
            displayDataInAlert(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const displayDataInAlert = (data) => {

        const alertMessage = `HOSTEL room status: ${data.map(item => item.room_status).join(', ')}`;
        alert(alertMessage);
      }

  return (
    <nav className='main-nav'>
        <div className='navbar-brand'>
                {studentInfo.studentName} <br /> PRN - {studentInfo.prn}
        </div>
        <div className="menu-link">
            <ul>
                <li>
                    <a href="">Marks </a>
                </li>
                <li>
                    <a href="">Attendance </a>
                </li>
                <li>
                    <a href="">Notifications </a>
                </li>
                <li>
                    <a href="">Submit Feedback </a>
                </li>
                <li>
                  <button onClick={fetchData} style={{
                      color:"#ffffff",
                      backgroundColor: "#3c80c3",
                      borderRadius: '8px',
                      padding: '20px'
                  }}>Check Hostel Room Status</button>
                </li>
            </ul>
        </div>


        

    </nav>
  )
}

export default Navbar