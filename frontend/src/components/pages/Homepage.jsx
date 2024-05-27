import React, { createContext, useState } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const AuthContext = createContext();

function Homepage({ username, isLogged, toggleLogged, updateUsername }) {

const toggleSignout = () => {
    toggleLogged();
    updateUsername("");
}

  return (
    <div className='mt-10 flex justify-center items-center'>
      { !isLogged ? (
        <Button variant="outline" size="xl">
          <Link to="/signup" className='text-4xl'>Sign in</Link>
        </Button>
      ) : (
        <div className='flex flex-col'>
          <h2>Successfully Logged In: {username}</h2>
          <Button variant="outline" size="lg" onClick={toggleSignout}>Sign Out</Button>
        </div>
      )}
    </div>
  );
}

export { Homepage, AuthContext };
