import React from 'react'
import { BsPersonCircle,BsFillClipboard2PulseFill, BsFillCheckSquareFill , BsCalendarWeek, BsFillBellFill, BsListCheck,  BsFillGearFill } from 'react-icons/bs';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Sidebar({openSidebarToggle , OpenSidebar}) {
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
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                {studentInfo.studentName} <br /> PRN - {studentInfo.prn}
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillClipboard2PulseFill className='icon'/> Marks 
                </a>
            </li>

            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillCheckSquareFill className='icon'/> Attendance
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCalendarWeek className='icon'/> Class Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillBellFill className='icon'/> Notifications
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Submit Feedback
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Settings
                </a>
            </li>
            <li className='sidebar-list-item'>
                <button onClick={fetchData} style={{
                    color:"#9e9ea4",
                    backgroundColor: "#263043",
                    borderRadius: '8px',
                    padding: '20px'
                }}>Check Hostel Room Status</button>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar