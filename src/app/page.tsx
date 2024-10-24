"use client";

import { useState } from "react";
import Image from "next/image";

interface TripCard {
  city: string;
  country: string;
  date: string;
  activities: Array<{
    name: string;
    type: "date" | "food" | "party";
  }>;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const upcomingTrips: TripCard[] = [
    {
      city: "Paris",
      country: "France",
      date: "In 25 days",
      activities: [
        { name: "Dinner at the Eiffel Tower", type: "date" },
        { name: "Da Giuseppe Pizzeria", type: "food" },
        { name: "Rex club Disco", type: "party" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <span className="text-purple-600">TB</span>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <span className="sr-only">Settings</span>
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
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </header>

      {/* Search Section */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Where are you traveling next?</h2>
        <div className="relative">
          <input
            type="text"
            className="w-full p-4 rounded-xl bg-gray-100 pl-12"
            placeholder="Enter a city or any place you want"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            className="w-6 h-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="px-4 py-6">
        {upcomingTrips.map((trip, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="text-gray-600">{trip.date}</span>
                <h3 className="text-lg font-semibold">
                  {trip.city}, {trip.country}
                </h3>
              </div>
              <button className="p-2">
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {trip.activities.map((activity, actIndex) => (
                <div
                  key={actIndex}
                  className={`p-4 rounded-xl ${
                    activity.type === "date"
                      ? "bg-purple-100"
                      : activity.type === "food"
                      ? "bg-pink-100"
                      : "bg-green-100"
                  }`}
                >
                  <p className="text-sm font-medium">{activity.name}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xs">
                      {activity.type === "date" ? "❤️" : activity.type === "food" ? "🍕" : "🎉"}
                    </span>
                    <button className="p-1 rounded-full bg-white/50">
                      <svg
                        className="w-4 h-4"
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Top-rated experiences</h2>
        <div className="grid grid-cols-4 gap-4">
          {["Food", "Culture", "Nature", "Party"].map((category, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gray-100 flex items-center justify-center">
                {category === "Food" && "🍽️"}
                {category === "Culture" && "🏛️"}
                {category === "Nature" && "🌿"}
                {category === "Party" && "🎉"}
              </div>
              <p className="text-sm">{category}</p>
              <p className="text-xs text-gray-500">+{154 + index * 166}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        New trip
      </button>
    </div>
  );
}
