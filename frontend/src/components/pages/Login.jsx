import React, { useContext, useState, useCallback } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Homepage';

export default function Login({ toggleLogged, updateUsername }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleUserChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      username: e.target.value
    }));
  };

  const handlePassChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      password: e.target.value
    }));
  };

  const sendData = useCallback(async () => {
    try {
      const response = await axios.post("http://localhost:8082/user/login", {
        username: user.username,
        password: user.password
      }, {
        headers: {
          'Authorization': "AviMalik"
        }
      });
      setUser({
        username: "",
        password: ""
      });
      updateUsername(user.username);
      toggleLogged();
      navigate('/');
    } catch (error) {
      console.error("Error logging in:", error.response ? error.response.data : error.message);
    }
  }, [user, navigate]);

  return (
    <div>
      <h2 className="text-8xl font-extrabold flex-1 mt-20 text-teal-500">Log-IN Page</h2>
      <div className="mt-10">
        <div>
          <Label className="text-lg text-teal-400">Username:</Label>
          <Input value={user.username} onChange={handleUserChange} />
        </div>
        <div className="mt-5">
          <Label className="text-lg text-teal-400">Password:</Label>
          <Input value={user.password} onChange={handlePassChange} type="password" />
        </div>
      </div>
      <div className="mt-5 text-center">
        <Button variant="outline" size="lg" className="text-teal-500 text-lg" onClick={sendData}>
          Log in
        </Button>
      </div>
    </div>
  );
}
