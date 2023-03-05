import React, {useEffect, useState} from 'react'
import weather from './weather.webp'
import './Weather.css'
function Weather() {

     const [search, setSearch] = useState("")
     const[city, setCity] = useState(" ")
     const [temp, setTemp] = useState(0)
     const [name, setName] = useState("")
     const [windspeed, setWindspeed] = useState("")

     useEffect(()=>{

      const fetchApi= async()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1557c2128bdfcfa3018ee938a525a9e5`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        setTemp(data.main.temp);
        setName(data.name)
        setWindspeed(data.wind.speed)

      }

      fetchApi()
     },[search])


     const cityset=(e)=>{
      if(e.key==="Enter"){
        setSearch(city)
     }}


  return (
    <div>
      
      <div className="card my-5 mx-5" style={{width:"18rem"}}>
  <img src={weather} className="card-img-top" alt="..."/>
  <div className="card-body colgrad">
    {search? (
      <div>
       <h5 className="card-title">{name}</h5>
       <p className="card-text">The Temprature is :{temp} 'F</p>
       <p className="card-text">The Wind Speed is :{windspeed} m/s</p>
       </div>
    ):<p>Data Not Found, Sorry...</p>}
   
  </div>
</div>
<h2>Enter the Location to know its Weather</h2> 
<input type="text mx-5" onChange={(e)=>setCity(e.target.value)} onKeyDown={cityset} />
    </div>
  )
}

export default Weather
