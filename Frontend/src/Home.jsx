import React from 'react'
import {BsCalendarWeek , BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {

  const data = [
      {
        name: 'Subject 1',
        marks: 39,
        fill: "#8000ff",
        
      },
      {
        name: 'Subject 2',
        marks: 31,
        fill: "#df20af",
        
      },
      {
        name: 'Subject 3',
        marks: 40,
        fill: "#20afdf",
        
      },
      {
        name: 'Subject 4',
        marks: 25,
        fill:'#136c29',
       
      },
      {
        name: 'Subject 5',
        marks: 36,
        fill: "#f9f906",
        
      },
      {
        name: 'Subject 6',
        marks: 40,
        fill: "#f2460d",
        
      },
    ];   
    

    const data2 = [
      {
        name: 'Subject 1',
        attendance: 100,
        fill: "#8000ff",
      },
      {
        name: 'Subject 2',
        attendance: 95,
        fill: "#df20af",
      },
      {
        name: 'Subject 3',
        attendance: 80,
        fill: "#20afdf",
      },
      {
        name: 'Subject 4',
        attendance: 89,
        fill:'#136c29',
      },
      {
        name: 'Subject 5',
        attendance: 79,
        fill: "#f9f906",
      },
      {
        name: 'Subject 6',
        attendance: 90,
        fill: "#f2460d",
      },
    ];   
    

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
        <span className="m-word">Marks</span>
        <span className="a-word">Attendance</span>
      </div>


      <div className='charts'>
      {/* <h2>Marks </h2>  */}
          <ResponsiveContainer width="100%"   height="100%">
          <BarChart
          width={500}
          height={300}
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
              <Bar dataKey="marks"  />
              {/* {data.map((entry,index)=> (
                <Bar key={entry.name} dataKey="marks" fill={colors[index]} />
              ))} */}

              {/* <Bar dataKey="marks" fill={colors[index]}/> */}
           
              {/* <Bar dataKey="attendance" fill="#FFBB28" /> */}
              </BarChart>  
          </ResponsiveContainer>

          <ResponsiveContainer width="100%"   height="100%">
          <BarChart
          width={500}
          height={300}
          data={data2}
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
              <Bar dataKey="attendance" fill="#31708E" />

              {/* {<Bar dataKey="attendance" fill={colors2[index]} />} */}
              {/* {data.map((entry,index)=> (
                <Bar key={entry.name} dataKey="attendance" fill={colors2[index]} />
              ))} */}
              </BarChart> 
          </ResponsiveContainer>

      </div>
  </main>
)
}

export default Home