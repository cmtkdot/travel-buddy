export default function Home() {
  return (
    <div className="space-y-8">
      {/* Search Section */}
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Where are you traveling next?</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter a city or any place you want"
            className="search-input"
          />
        </div>
      </section>

      {/* Upcoming Trip */}
      <section className="space-y-4">
        <div className="trip-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/60">In 25 days</p>
              <h2 className="text-lg font-semibold">🇩🇪 Berlin, Germany</h2>
            </div>
            <button className="rounded-full p-2 hover:bg-muted">
              <span className="sr-only">View details</span>
              →
            </button>
          </div>
          
          <div className="mt-4 flex gap-2">
            <span className="category-pill category-pill-pink">East Side Gallery</span>
            <span className="category-pill category-pill-lime">Da Giuseppe</span>
            <span className="category-pill category-pill-blue">Rex Club</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Top-rated experiences</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {['Food', 'Culture', 'Nature', 'Party'].map((category, index) => (
            <div key={category} className="trip-card text-center">
              <div className="mb-2 text-2xl">
                {index === 0 ? '🍔' : index === 1 ? '🏛️' : index === 2 ? '🌲' : '🎉'}
              </div>
              <p className="font-medium">{category}</p>
              <p className="text-sm text-foreground/60">+{154 + index * 166}</p>
            </div>
          ))}
        </div>
      </section>

      {/* New Trip Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <button className="primary-button flex items-center gap-2">
          <span>+</span>
          <span>New trip</span>
        </button>
      </div>
    </div>
  )
}
