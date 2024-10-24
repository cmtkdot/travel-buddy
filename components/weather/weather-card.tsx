"use client";

import { useState, useEffect } from "react";

interface WeatherData {
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
}

interface WeatherCardProps {
  city: string;
  country: string;
  className?: string;
}

export default function WeatherCard({ city, country, className = "" }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual OpenWeatherMap API call
    // For demo purposes, using mock data
    setTimeout(() => {
      setWeather({
        temperature: 28,
        condition: "Sunny",
        icon: "01d",
        humidity: 65,
        windSpeed: 12,
      });
      setLoading(false);
    }, 1000);
  }, [city, country]);

  if (loading) {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-32 bg-gray-200 rounded-xl"></div>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  return (
    <div className={`bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">{city}</h3>
          <p className="text-sm opacity-80">{country}</p>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold">{weather.temperature}°C</p>
          <p className="text-sm">{weather.condition}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <span className="text-sm">{weather.humidity}% Humidity</span>
        </div>
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <span className="text-sm">{weather.windSpeed} km/h Wind</span>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm opacity-80">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
