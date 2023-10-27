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
      setLatitude('')
      setLongitude('')
      setPlace('')
      setText('...')
      setTempData({"current":{"temperature_2m":"...","apparent_temperature":"..."}})
      // console.log("parent component me aa gaya hai: "+ data)
      setTimeout(setPlace(data), 125);
  }

  useEffect(()=>{
    if(place!==''){
      fetch('https://geocode.maps.co/search?q='+place)
      .then(resp=>resp.json())
      .then(resp=>{
        setLatitude(resp[0].lat)
        setLongitude(resp[0].lon)
        console.log("Place: " + place);
        console.log("geocode api response: ")
        console.log(resp)
      })
    }
    else{
          window.location.reload(true);
    }
  },[place])

  useEffect(()=>{
    if(latitude!=='' && longitude!==''){
      // URL : https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode&hourly=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=`+latitude+`&longitude=`+longitude+`&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode&hourly=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`)
      // fetch(`https://api.open-meteo.com/v1/forecast?latitude=`+latitude+`&longitude=`+longitude+`&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,weathercode&hourly=temperature_2m,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min`)
      .then(resp=>resp.json())
      .then(resp=>{
        console.log("the api info is as follows: ")
        console.log(resp);
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
