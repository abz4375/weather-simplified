import {useEffect, useState} from 'react';

import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Temperature from "./components/Temperature";

function App() {
  const [tempData,setTempData] = useState([])
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')
  const [place,setPlace] = useState('#')
  const [text,setText] = useState('')

  const getData = (data) => {
      // console.log("parent component me aa gaya hai: "+ data)
      setPlace(data);
  }

  useEffect(()=>{
    if(place!==''){
      fetch('https://geocode.maps.co/search?q='+place)
      .then(resp=>resp.json())
      .then(resp=>{
        setLatitude(resp[0].lat)
        setLongitude(resp[0].lon)
        // console.log("latitude is: " +latitude)
        // console.log("longitude is: " +longitude)
      })
    }
    else{
          window.location.reload(true);
    }
  },[place])

  useEffect(()=>{
    if(latitude!=='' && longitude!==''){
      fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&hourly=temperature_2m&current_weather=true')
      .then(resp=>resp.json())
      .then(resp=>{
        // console.log(resp);
        setTempData(resp);

        setText(place+"'s Weather :")
      })
    } 
  },[latitude,longitude,place])

  return (
    <div className="App">
      {/* this is App */}
      <Navbar onSubmit={ getData}/>
      <Heading text = {text}/>
      <br />

      <br /><br /><br />
      
      <Temperature apidata = {tempData} />
      
    </div>
  );
}

export default App;
