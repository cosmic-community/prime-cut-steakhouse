import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Prime Cut</h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Ready for an exceptional dining experience? We're here to help make your visit perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Whether you're planning a romantic dinner, business meeting, or special celebration, 
                    our team is here to ensure your experience exceeds expectations. Reach out to us 
                    for reservations, private dining inquiries, or any questions about our menu and services.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        123 Prime District Avenue<br />
                        Downtown Culinary Quarter<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:+15551234567" className="hover:text-red-700 transition-colors">
                          (555) 123-STEAK
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        For reservations and inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">
                        <a href="mailto:reservations@primecutsteakhouse.com" className="hover:text-red-700 transition-colors">
                          reservations@primecutsteakhouse.com
                        </a>
                      </p>
                      <p className="text-sm text-gray-500">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Tuesday - Thursday: 5:00 PM - 10:00 PM</p>
                        <p>Friday - Saturday: 5:00 PM - 11:00 PM</p>
                        <p>Sunday: 4:00 PM - 9:00 PM</p>
                        <p className="font-medium">Monday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <h3 className="font-semibold text-amber-800">Reservation Notice</h3>
                  </div>
                  <p className="text-amber-700">
                    We recommend making reservations at least 48 hours in advance, especially for weekend dining. 
                    For parties of 8 or more, please call us directly to ensure the best seating arrangements.
                  </p>
                </div>
              </div>

              {/* Right Column - Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of the downtown culinary district, Prime Cut Steakhouse 
              is easily accessible and surrounded by the city's finest dining establishments.
            </p>
          </div>

          {/* Placeholder for map - you can integrate Google Maps or similar */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg font-medium">Interactive Map Coming Soon</p>
                <p>123 Prime District Avenue, New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Parking and Transportation Info */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">Parking</h3>
              </div>
              <p className="text-gray-600">
                Complimentary valet parking available Tuesday through Sunday after 5:00 PM. 
                Street parking and nearby parking garages also available.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3 mb-4">
                <svg className="w-6 h-6 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900">Transportation</h3>
              </div>
              <p className="text-gray-600">
                Easily accessible via subway (L, N, Q, R, W trains to Union Square) or taxi/rideshare. 
                Just steps away from major public transportation hubs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}