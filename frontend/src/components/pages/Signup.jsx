import React, { useCallback, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import axios from 'axios';

export default function Signup() {
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
      const response = await axios.post("http://localhost:8082/user/signup", {
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
      })
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [user]);

  // const sendData = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:8082/user/signup", {
  //       username: user.username,
  //       password: user.password
  //     }, {
  //       headers: {
  //         'Authorization': "AviMalik"
  //       }
  //     });
  //     setUser({
  //       username: "",
  //       password: ""
  //     })
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error signing up:", error.response ? error.response.data : error.message);
  //   }
  // }

  return (
    <div>
      <h2 className="text-8xl font-extrabold flex-1 mt-20 text-teal-500">Sign-UP Page</h2>
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
          Sign Up
        </Button>
      </div>
    </div>
  );
}
