/* eslint-disable no-unused-vars */
import { useState, useSyncExternalStore } from 'react'

import './App.css'

function App() {
  const [username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[display,setDisplay]=useState('');
  const [bool,setBool]=useState(false);

 const handleSubmit=(e)=>{
e.preventDefault();

if(username=='user' && password=='password'){
  setDisplay('Welcome, user!');
  setBool(true)
}
else{
  setDisplay('Invalid username or password')
}
 }
  return (
    <>
      <div className="card">
        <h1>Login Page</h1>
        <p>{display}</p>
        {!bool && (<form onSubmit={handleSubmit}>
          <div>
          <label>Username:</label>
          <input type='text'name='username' placeholder='Enter your Username...' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
          </div>
          <div>
          <label>Password:</label>
          <input type='text' name='password' placeholder='Enter your Password...' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </div>
          <button type='submit'>Submit</button>
        </form>)}
        </div>
    </>
  )
}

export default App
