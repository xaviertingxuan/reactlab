import React, { useEffect, useState, useRef } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

export const Weather = () => {

    const weatherInputRef = useRef();

    const [weatherData, setWeatherData] = useState(false)

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const searchWeather = async (city) => {
        if(city === ''){
            alert('Please enter a city name')
            return;
        }
        try {
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_ID}`;
            
            const response = await fetch(weatherApiUrl);
            const weatherAPIData = await response.json();

            if(!response.ok){
                alert(`City not found: ${city}`);
                setWeatherData(false);
                return;
            }

            const icon = allIcons[weatherAPIData.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: weatherAPIData.main.humidity,
                windSpeed: weatherAPIData.wind.speed,
                temperature: Math.floor(weatherAPIData.main.temp),
                location: weatherAPIData.name,
                icon: icon,
            })

        } catch (error) {
                setWeatherData(false)
                console.error('Error fetching weather data:', error);
        }
    }

    useEffect(() => {
        searchWeather('Singapore');
    }, [])

  return (
    <div className='weather'>
        <div className='weather-search-bar'>
            <input ref={weatherInputRef} type='text' placeholder='search...' />
            <img src={search_icon} alt='' onClick={()=>searchWeather(weatherInputRef.current.value)}/>
        </div>
            {weatherData?
                <>
                    <img src={weatherData.icon} alt='' className='weather-icon'/>
                    <p className='temperature'>{weatherData.temperature}°c</p>
                    <p className='location'>{weatherData.location}</p>
                    <div className="weather-data">
                        <div className="weather-col">
                            <img src={humidity_icon} alt="" />
                            <div>
                                <p>{weatherData.humidity}</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="weather-col">
                            <img src={wind_icon} alt="" />
                            <div>
                                <p>{weatherData.windSpeed}</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>:<></>}
        
    </div>
  )
}
