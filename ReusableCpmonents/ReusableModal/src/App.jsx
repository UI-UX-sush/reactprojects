import { useState } from 'react'
import './App.css'
import Modal from './Modal'
function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
    <button onClick={()=>setOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={()=>setOpen(false)}>
         <h2>Reusable Modal</h2>
        <p>This is a reusable modal component.</p>

      </Modal>
       <button onClick={()=>setOpen(false)}>Close</button>

    </>
  )
}

export default App
