import { useEffect, useState } from "react";
import { FaWind } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
const { VITE_APP_API_KEY } = import.meta.env;

interface DataTypes {
  date: string;
  temp: number;
  humidity: number;
  wind_speed: number;
  name: string;
  description: string;
}

// const fakeData = {
//   date: "11/6/2024",
//   description: "haze",
//   humidity: 55,
//   name: "Kolkata",
//   temp: 31.97,
//   wind_speed: 1.54,
// }

export default function App() {
  const [weatherData, setWeatherData] = useState<DataTypes>();
  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=${VITE_APP_API_KEY}&units=metric`
    );
    const data = await response.json();
    const generatedData = {
      date: String(new Date().toLocaleDateString()),
      temp: data.main.temp,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      name: data.name,
      description: data.weather[0].description,
    };
    setWeatherData(generatedData);
  };

  

  useEffect(() => {
    getWeatherData();
  }, []);
  return (
    <main className="min-h-screen max-w-3xl mx-auto py-4 text-gray-800">
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">{weatherData?.name}</h1>
          <p className="font-medium">{weatherData?.date}</p>
        </div>

        <div className="flex items-center gap-16 justify-center mt-16">
          <div className="">
            <h1 className="text-[150px] text-center relative">{weatherData?.temp}</h1>
          </div>
          <div>
            <p className="flex gap-4 text-lg font-bold items-center"><span><FaWind /></span>{weatherData?.wind_speed}</p>
            <p className="flex gap-4 text-lg font-bold items-center"><span><MdOutlineWaterDrop /></span>{weatherData?.humidity}</p>
          </div>
        </div>

        <div className="text-left mt-8">
          <p className="text-2xl font-bold">{weatherData?.description}</p>
        </div>
      </div>
    </main>
  );
}
