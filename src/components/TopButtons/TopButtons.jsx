import React from "react";
import { Switch } from "@mui/material";
import { UilMoon } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import useDarkMode from "../../hook/useDarkMode";

function TopButtons({ setQyery }) {
  const [colorTheme, setTheme] = useDarkMode();
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Moscow",
    },
    {
      id: 3,
      title: "Tokio",
    },
    {
      id: 4,
      title: "Minsk",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125 "
          onClick={() => setQyery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
      <div className="flex items-center justify-around my-6">
        <UilSun className="text-white cursor-pointer" />
        <p className="text-white">|</p>
        <UilMoon className="text-white cursor-pointer" />
        <Switch onClick={() => setTheme(colorTheme)} />
      </div>
    </div>
  );
}

export default TopButtons;
