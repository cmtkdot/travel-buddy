"use client";

import { useState } from "react";
import WeatherCard from "@/components/weather/weather-card";
import CurrencyConverter from "@/components/currency/currency-converter";

interface Trip {
  id: string;
  destination: string;
  country: string;
  startDate: string;
  endDate: string;
  status: "upcoming" | "ongoing" | "past";
  activities: Array<{
    name: string;
    type: string;
    time: string;
    location: string;
  }>;
}

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  const trips: Trip[] = [
    {
      id: "1",
      destination: "Bangkok",
      country: "Thailand",
      startDate: "2024-02-15",
      endDate: "2024-02-22",
      status: "upcoming",
      activities: [
        {
          name: "Grand Palace Visit",
          type: "sightseeing",
          time: "09:00",
          location: "Grand Palace",
        },
        {
          name: "Street Food Tour",
          type: "food",
          time: "18:00",
          location: "Chinatown",
        },
      ],
    },
    {
      id: "2",
      destination: "Hanoi",
      country: "Vietnam",
      startDate: "2024-03-10",
      endDate: "2024-03-17",
      status: "upcoming",
      activities: [
        {
          name: "Ha Long Bay Cruise",
          type: "adventure",
          time: "08:00",
          location: "Ha Long Bay",
        },
        {
          name: "Old Quarter Walking Tour",
          type: "culture",
          time: "14:00",
          location: "Old Quarter",
        },
      ],
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">My Trips</h1>
        <p className="text-gray-600">Manage your travel plans</p>
      </header>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "upcoming"
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Upcoming
        </button>
        <button
          onClick={() => setActiveTab("past")}
          className={`px-4 py-2 rounded-lg ${
            activeTab === "past"
              ? "bg-purple-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Past Trips
        </button>
      </div>

      {/* Trip Cards */}
      <div className="space-y-6">
        {trips
          .filter((trip) =>
            activeTab === "upcoming"
              ? trip.status !== "past"
              : trip.status === "past"
          )
          .map((trip) => (
            <div
              key={trip.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Trip Header */}
              <div className="p-4 border-b">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">
                      {trip.destination}, {trip.country}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {new Date(trip.startDate).toLocaleDateString()} -{" "}
                      {new Date(trip.endDate).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
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
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Weather */}
              <div className="p-4 border-b">
                <WeatherCard
                  city={trip.destination}
                  country={trip.country}
                  className="mb-4"
                />
              </div>

              {/* Activities */}
              <div className="p-4 border-b">
                <h4 className="font-semibold mb-3">Planned Activities</h4>
                <div className="space-y-3">
                  {trip.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">
                          {activity.type === "food"
                            ? "🍴"
                            : activity.type === "sightseeing"
                            ? "🏛️"
                            : activity.type === "adventure"
                            ? "🏃"
                            : "🎯"}
                        </span>
                        <div>
                          <p className="font-medium">{activity.name}</p>
                          <p className="text-sm text-gray-600">
                            {activity.time} - {activity.location}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 hover:bg-gray-200 rounded-full">
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
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Currency Converter */}
              <div className="p-4">
                <CurrencyConverter />
              </div>
            </div>
          ))}
      </div>

      {/* Add Trip Button */}
      <button className="fixed bottom-20 right-4 bg-purple-600 text-white p-4 rounded-full shadow-lg">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
    </div>
  );
}
