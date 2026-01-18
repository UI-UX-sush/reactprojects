import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const data = [
    'apple',
    'banana',
    'grape',
    'orange',
    'mango',
    'pineapple',
    'strawberry',
    'blueberry',
    'watermelon',
    'kiwi'
  ];
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer=setTimeout(() => {
     setDebouncedTerm(searchTerm);
  },5000)
  return ()=>clearTimeout(timer);
},[searchTerm]);

useEffect(()=>{
  const result= data.filter(query=>query.toLowerCase().includes(debouncedTerm));
setResults(result);
},[debouncedTerm]);

     return (
    <>
    <h2>Search results</h2>
    <input type='text' onChange={(e)=>setSearchTerm(e.target.value)}></input>
     {results.map((q,index)=>
      (<li key={index}>{q}</li>)
     )}
    </>
  )
}

export default App
