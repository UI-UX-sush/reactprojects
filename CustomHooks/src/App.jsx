import { useState } from 'react'

import './App.css'
import useCustomApi from './CustomApi'

function App() {

const user=useCustomApi('https://jsonplaceholder.typicode.com/users/1')
  return (
    <>
    <div >
  {!user && <div className="loading">Loading...</div>}
  </div>
    <h2 className="user-card">User Data</h2>

    <h3 className="user-title">Name : {user?.name}</h3>
    
     <h3 className="user-info">Email: {user?.email}</h3>
     <h3 className="user-title">Organization :{user?.company.name}</h3>
   
          </>
  )
}

export default App
