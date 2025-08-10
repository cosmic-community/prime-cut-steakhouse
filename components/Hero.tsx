import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://imgix.cosmicjs.com/2b125570-75a9-11f0-a051-23c10f41277a-photo-1558030006-450675393462-1754802987258.jpg?w=1920&h=1080&fit=crop&auto=format,compress"
        alt="Prime Steakhouse Interior"
        className="hero-image"
      />
      
      {/* Overlay */}
      <div className="overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-shadow">
          Prime Cut <span className="text-gradient">Steakhouse</span>
        </h1>
        <p className="text-xl lg:text-2xl mb-8 text-neutral-200 text-shadow max-w-2xl mx-auto">
          Experience the finest dry-aged steaks, curated wine pairings, and exceptional 
          culinary artistry in an elegant atmosphere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu" className="btn-primary text-lg px-8 py-4">
            View Menu
          </Link>
          <Link href="/reservations" className="btn-secondary text-lg px-8 py-4">
            Make Reservation
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}