import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'


function App() {
  // const [data, setData] = useState([]);

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  {/*
  useEffect(()=>{
    fetch('http://localhost:8081/student_details')
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => console.log(err));
  }, [])
*/}
  return (
   <div className='grid-container'>
    <Header OpenSidebar={OpenSidebar}/>
    <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    <Home />
    {/* <div>
    <button onClick={fetchData}>Check status</button>
      {data.map((item, index) => (
        <div key={index}>{item.room_status}</div>
      ))}
    </div> */}
   </div>
  )
}

export default App
