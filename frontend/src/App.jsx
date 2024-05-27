import React, { useState } from 'react';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Homepage } from './components/pages/Homepage';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");

  const toggleLogged = () => setIsLogged(!isLogged);
  const updateUsername = (data) => setUsername(data);

  return (
    <div className='flex flex-col items-center'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage isLogged={isLogged} username={username} toggleLogged={toggleLogged} updateUsername={updateUsername} />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/login' element={<Login toggleLogged={toggleLogged} updateUsername={updateUsername} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
