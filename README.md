# Travel Buddy - AI Travel Companion

Travel Buddy is an AI-powered travel planning application that helps users create personalized itineraries, manage travel plans, and discover new destinations. Built with Next.js 15, TypeScript, and Tailwind CSS, it offers a modern, mobile-first experience with powerful features for travelers.

## Features

### Core Features
- 🤖 AI-powered itinerary planning and recommendations
- 🗺️ Interactive maps and navigation
- 🌤️ Real-time weather updates
- 💱 Currency conversion
- 📄 Document storage and management
- 💰 Budget tracking and expense splitting
- ✈️ Flight and accommodation integration
- 📱 Mobile-first, responsive design
- 🔄 Offline support

### AI Travel Assistant
- Personalized travel recommendations
- Smart itinerary optimization
- Local insights and tips
- Real-time travel assistance

### Trip Management
- Create and manage multiple trips
- Daily itinerary planning
- Activity scheduling
- Location-based suggestions
- Share trips with friends

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with Tailwind
- **State Management:** React Hooks
- **APIs:**
  - OpenAI API for AI features
  - OpenWeatherMap API for weather data
  - Exchange Rate API for currency conversion
  - Google Maps API for navigation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/travel-buddy.git
   cd travel-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and other configuration values in `.env.local`

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Environment Variables

Create a `.env.local` file with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
EXCHANGE_RATE_API_KEY=your_exchange_rate_api_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## Project Structure

```
travel-buddy/
├── src/
│   ├── app/                 # Next.js 15 app directory
│   ├── components/          # Reusable components
│   │   ├── chat/           # AI chat components
│   │   ├── currency/       # Currency converter
│   │   ├── navigation/     # Navigation components
│   │   └── weather/        # Weather components
│   └── styles/             # Global styles
├── public/                 # Static files
│   ├── icons/             # App icons
│   └── screenshots/       # App screenshots
└── package.json           # Project dependencies
```

## Development

### Commands

- `npm run dev` - Start development server
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Follow the mobile-first approach
- Implement proper error handling
- Add appropriate TypeScript types
- Use meaningful component and variable names

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Next.js team for the amazing framework
- OpenAI for the AI capabilities
- All other API providers and open-source projects used

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)
Project Link: [https://github.com/yourusername/travel-buddy](https://github.com/yourusername/travel-buddy)
