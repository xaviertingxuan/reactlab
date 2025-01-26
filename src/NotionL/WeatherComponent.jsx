import React, { useEffect, useState } from 'react'
import './WeatherComponent.css'

export const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(false)

    const fetchWeather = async () => {
        try {
            const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=${import.meta.env.VITE_WEATHER_ID}`;
            
            const response = await fetch(weatherApiUrl);
            const weatherAPIData = await response.json();

            if(!response.ok){
                console.error('Error fetching weather data');
                setWeatherData(false);
                return;
            }

            setWeatherData({
                temperature: Math.floor(weatherAPIData.main.temp),
                location: weatherAPIData.name,
                icon: `https://openweathermap.org/img/wn/${weatherAPIData.weather[0].icon}@2x.png`
            })

        } catch (error) {
            setWeatherData(false)
            console.error('Error fetching weather data:', error);
        }
    }

    useEffect(() => {
        fetchWeather();
        const interval = setInterval(fetchWeather, 300000);
        return () => clearInterval(interval);
    }, [])

    if (!weatherData) return null;

    return (
        <div className='weather'>
            <img src={weatherData.icon} alt='' className='weather-icon'/>
            <p className='temperature'>{weatherData.temperature}°c</p>
            <p className='location'>{weatherData.location}</p>
        </div>
    )
}
