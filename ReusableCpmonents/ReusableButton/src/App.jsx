import { useState } from 'react'
import './App.css'
import Button from './Button'
function App() {
 

  return (
    <>
      <Button onClick={()=>alert("submited")} type="Submit" style={{backgroundColor:"Blue",color:'white'}}>
      Submit
      </Button>
      <Button onClick={()=>alert("delete")} type="Submit" style={{backgroundColor:"Red",color:'white'}}>
     Delete
      </Button>
      
    </>
  )
}

export default App
