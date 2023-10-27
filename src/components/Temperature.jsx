import "./Temperature.css";

const Temperature = ({ apidata }) => {
  let home = true;
  if (apidata?.current?.temperature_2m) home = false;

  if (home) {
    return <div className="temperature">🌦️</div>;
  } else
    return (
      <div className="temperature">
        {/* <p className="tem">
          {">"} Temperature
        </p> */}
        {apidata?.current?.temperature_2m + " °C"}
        <p className="app-temp">
          Feels like :
          <span >
          {" "+ apidata?.current?.apparent_temperature + " °C"}
          </span>
        </p>
      </div>
    );
};

export default Temperature;
