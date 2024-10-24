"use client";

import { useState } from "react";
import Image from "next/image";

interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  rating: number;
  category: string;
  description: string;
  highlights: string[];
}

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All", icon: "🌎" },
    { id: "beach", name: "Beaches", icon: "🏖️" },
    { id: "culture", name: "Culture", icon: "🏛️" },
    { id: "nature", name: "Nature", icon: "🏔️" },
    { id: "urban", name: "Cities", icon: "🌆" },
  ];

  const destinations: Destination[] = [
    {
      id: "1",
      name: "Ha Long Bay",
      country: "Vietnam",
      image: "/placeholder.jpg", // Replace with actual image
      rating: 4.8,
      category: "nature",
      description: "Stunning limestone islands and emerald waters",
      highlights: ["Island Hopping", "Cave Exploration", "Kayaking"],
    },
    {
      id: "2",
      name: "Bangkok",
      country: "Thailand",
      image: "/placeholder.jpg", // Replace with actual image
      rating: 4.6,
      category: "urban",
      description: "Vibrant street life and ancient temples",
      highlights: ["Temple Tours", "Street Food", "Night Markets"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="text-2xl font-bold">Explore</h1>
          <p className="text-gray-600">Discover your next adventure</p>
        </div>
      </header>

      {/* Categories */}
      <div className="bg-white shadow-sm mt-2">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-6 text-white mb-6">
          <h2 className="text-xl font-semibold mb-2">AI Travel Recommendations</h2>
          <p className="mb-4">Get personalized suggestions based on your interests</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>

        {/* Destinations */}
        <div className="space-y-6">
          {destinations
            .filter(
              (dest) =>
                selectedCategory === "all" || dest.category === selectedCategory
            )
            .map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-48 w-full">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  {/* Replace with actual image */}
                  {/* <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-semibold">
                        {destination.name}
                      </h3>
                      <p className="text-gray-600">{destination.country}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-lg">
                      <span>⭐</span>
                      <span>{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 border-t">
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Plan Trip
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Quick Filters */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-2xl mx-auto p-4 flex justify-between">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
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
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>Filters</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span>Sort</span>
          </button>
        </div>
      </div>
    </div>
  );
}
