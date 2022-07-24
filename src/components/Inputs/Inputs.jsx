import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { useState } from "react";

function Inputs({ setQyery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handlUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handlSearchClick = () => {
    if (city !== "") setQyery({ q: city });
  };

  const handlLocationClick = () => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQyery({ lat, lon });
      });
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search fo city...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handlSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 "
          onClick={handlLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handlUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handlUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
