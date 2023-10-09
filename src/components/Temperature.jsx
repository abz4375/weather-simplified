import "./Temperature.css";

const Temperature = ({apidata}) => {
  return (
    <div className="temperature">
      <p className="tem">
      {
        (apidata?.current_weather?.temperature)?("Temperature") : ""
      }
      </p>

      {/* {
        (apidata?.current_weather?.temperature)?(<br></br>):""
      } */}

      {
        (apidata?.current_weather?.temperature)? 
        ( apidata?.current_weather?.temperature + " °C") 
        : '🌏'
      }
    </div>
  );
};

export default Temperature;
