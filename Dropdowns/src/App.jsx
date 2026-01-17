import { useState } from 'react'
import './App.css'


function App() {
  const data={
  India:["bangalore",'hyderabad','delhi'],
USA:['NY','LA','Setttle'],
Canada:['Toronto','Vancouver','Ottawa'],
  Australia:['Sydney','Melbourne','Perth']
}
  const [country, setCountry] = useState('');
  const [cities,setCities]=useState('');

  const HandleSelect=(e)=>{
     setCountry(e.target.value);
     setCities('');
  }

  return (
    <>
      <div>
        Select the country
      </div>
      <select value={country} onChange={HandleSelect}>
        <option>
          Select Country</option>
        {Object.keys(data).map((country)=>(
        <option key={country} value={country}>{country}</option>
        ))
        }
</select>
      <div>
        Select the City
      </div>
      <select value={cities} onChange={(e)=>setCities(e.target.value)}>
        <option>
          Select City</option>
        {country && data[country].map((city,index)=>(
        <option key={index} value={city}>{city}</option>
        ))
        }
</select>
    </>
  )
}

export default App
