import "./App.css";
// import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons/TopButtons";
import Inputs from "./components/Inputs/Inputs";
import TimeAndLocation from "./components/TimeAndLocation/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails/TemperatureAndDetails";
import Forecast from "./components/Forecast/Forecast";
// import getWeatherData from "./servises/WeatherService";
import getFormattedWeatherData from "./servises/WeatherService";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [qyery, setQyery] = useState({ q: "Mogilev" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...qyery, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [qyery, units]);

  return (
    <div className="mx-auto  mt-4 py-5 bg-cyan-300 dark:bg-slate-800">
      <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-cyan-600 dark:bg-slate-900 transition duration-300  shadow-xl shadow-gray-500  ">
        <TopButtons setQyery={setQyery} />
        <Inputs setQyery={setQyery} units={units} setUnits={setUnits} />
        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
