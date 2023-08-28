import "./Temperature.css";

const Temperature = ({apidata}) => {
  return (
    <div className="temperature">
      {
        (apidata?.current_weather?.temperature)? 
        ( apidata?.current_weather?.temperature + " °C") 
        : '🌏 weather'
      }
    </div>
  );
};

export default Temperature;
