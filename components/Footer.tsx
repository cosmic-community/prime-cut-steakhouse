import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              Prime Cut Steakhouse
            </Link>
            <p className="text-neutral-400 mb-6 max-w-md">
              Experience the finest dry-aged steaks, curated wine pairings, and exceptional 
              culinary artistry in an elegant atmosphere.
            </p>
            <div className="text-neutral-400">
              <p>123 Steakhouse Avenue</p>
              <p>Fine Dining District</p>
              <p>City, State 12345</p>
              <p className="mt-2">(555) 123-STEAK</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <Link href="/menu" className="hover:text-accent-400 transition-colors duration-200">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/wine" className="hover:text-accent-400 transition-colors duration-200">
                  Wine Selection
                </Link>
              </li>
              <li>
                <Link href="/chefs" className="hover:text-accent-400 transition-colors duration-200">
                  Meet Our Chefs
                </Link>
              </li>
              <li>
                <Link href="/reservations" className="hover:text-accent-400 transition-colors duration-200">
                  Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-100 mb-4">Hours</h3>
            <div className="text-neutral-400 space-y-1">
              <p><span className="text-neutral-300">Monday - Thursday:</span> 5:00 PM - 10:00 PM</p>
              <p><span className="text-neutral-300">Friday - Saturday:</span> 5:00 PM - 11:00 PM</p>
              <p><span className="text-neutral-300">Sunday:</span> 4:00 PM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500">
          <p>&copy; {currentYear} Prime Cut Steakhouse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}