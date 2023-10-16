import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './Login.jsx'

function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <React.StrictMode>
      {isAuthenticated ? <App /> : <Login setIsAuthenticated={setIsAuthenticated} />}
    {/* <Login />
    <App /> */}
  </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Main />)