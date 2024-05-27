import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export default function Signup() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");



  return (
    <div >
      <h2 className="text-8xl font-extrabold flex-1 mt-20 text-teal-500">SignUP Page</h2>
      <div className='mt-10'>
        <div>
            <Label className="text-lg text-teal-400">Username:</Label>
            <Input />
        </div>
        <div className='mt-5'>
            <Label className="text-lg text-teal-400">Password:</Label>
            <Input />
        </div>
      </div>
      <div className='mt-5 text-center'>
        <Button variant="outline" size="lg" className="text-teal-500 text-lg">Button</Button>
      </div>
    </div>
  )
}
