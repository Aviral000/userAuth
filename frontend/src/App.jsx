// src/App.js
import React from 'react';
import { Button } from './components/ui/button';
import Signup from './components/pages/Signup';

function App() {
  return (
    <div className='flex flex-col items-center'>
      <Signup />
    </div>
  );
}

export default App;
