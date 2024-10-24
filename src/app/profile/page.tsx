"use client";

import { useState } from "react";

interface TravelPreference {
  id: string;
  category: string;
  options: string[];
  selected: string[];
}

interface SavedDocument {
  id: string;
  name: string;
  type: "passport" | "visa" | "insurance" | "ticket" | "other";
  date: string;
}

export default function ProfilePage() {
  const [preferences, setPreferences] = useState<TravelPreference[]>([
    {
      id: "1",
      category: "Travel Style",
      options: ["Adventure", "Relaxation", "Culture", "Food", "Nature"],
      selected: ["Adventure", "Culture"],
    },
    {
      id: "2",
      category: "Accommodation",
      options: ["Hotel", "Hostel", "Resort", "Apartment", "Camping"],
      selected: ["Hotel", "Resort"],
    },
    {
      id: "3",
      category: "Budget",
      options: ["Budget", "Mid-range", "Luxury"],
      selected: ["Mid-range"],
    },
  ]);

  const [documents, setDocuments] = useState<SavedDocument[]>([
    {
      id: "1",
      name: "Passport",
      type: "passport",
      date: "2024-01-15",
    },
    {
      id: "2",
      name: "Travel Insurance",
      type: "insurance",
      date: "2024-01-20",
    },
  ]);

  const getDocumentIcon = (type: SavedDocument["type"]) => {
    switch (type) {
      case "passport":
        return "🛂";
      case "visa":
        return "📋";
      case "insurance":
        return "🏥";
      case "ticket":
        return "✈️";
      default:
        return "📄";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">My Profile</h1>
              <p className="text-gray-600">Manage your travel preferences</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* AI Travel Profile */}
        <section className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">AI Travel Profile</h2>
          <div className="space-y-4">
            {preferences.map((pref) => (
              <div key={pref.id}>
                <h3 className="font-medium mb-2">{pref.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {pref.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        const newPreferences = preferences.map((p) =>
                          p.id === pref.id
                            ? {
                                ...p,
                                selected: p.selected.includes(option)
                                  ? p.selected.filter((s) => s !== option)
                                  : [...p.selected, option],
                              }
                            : p
                        );
                        setPreferences(newPreferences);
                      }}
                      className={`px-4 py-2 rounded-full text-sm ${
                        pref.selected.includes(option)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Documents */}
        <section className="bg-white rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Travel Documents</h2>
            <button className="text-purple-600 hover:text-purple-700">
              Add New
            </button>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getDocumentIcon(doc.type)}</span>
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-gray-600">
                      Added: {new Date(doc.date).toLocaleDateString()}
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
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section className="bg-white rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <div className="space-y-4">
            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span>🔔</span>
                <span>Notifications</span>
              </div>
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
            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span>🌙</span>
                <span>Dark Mode</span>
              </div>
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
            <button className="flex items-center justify-between w-full p-4 hover:bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <span>🔒</span>
                <span>Privacy</span>
              </div>
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
        </section>
      </div>
    </div>
  );
}
