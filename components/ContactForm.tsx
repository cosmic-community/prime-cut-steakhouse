'use client';

import { useState } from 'react';
import { ContactFormData, ContactFormErrors } from '@/types';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email',
    reservationRequest: false,
    partySize: undefined,
    preferredDate: '',
    preferredTime: '',
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    // Required field validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    // Phone validation (if provided)
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Reservation-specific validation
    if (formData.reservationRequest) {
      if (formData.partySize && (formData.partySize < 1 || formData.partySize > 20)) {
        newErrors.partySize = 'Party size must be between 1 and 20 guests';
      }

      if (formData.preferredDate) {
        const selectedDate = new Date(formData.preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          newErrors.preferredDate = 'Please select a future date';
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          preferredContact: 'email',
          reservationRequest: false,
          partySize: undefined,
          preferredDate: '',
          preferredTime: '',
        });
        setErrors({});
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked,
      }));
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: value ? parseInt(value, 10) : undefined,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear specific error when user starts typing
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Get In Touch</h2>
        <p className="text-gray-600">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {submitStatus.type && (
        <div className={`mb-6 p-4 rounded-lg ${
          submitStatus.type === 'success' 
            ? 'bg-green-50 border border-green-200 text-green-800' 
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          <div className="flex items-center">
            <div className={`flex-shrink-0 ${
              submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}>
              {submitStatus.type === 'success' ? (
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="ml-3 text-sm font-medium">{submitStatus.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="your@email.com"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="(555) 123-4567"
            />
            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Contact Method
            </label>
            <select
              id="preferredContact"
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
              errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="What would you like to discuss?"
          />
          {errors.subject && <p className="text-red-600 text-sm mt-1">{errors.subject}</p>}
        </div>

        {/* Reservation Request Toggle */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="reservationRequest"
              name="reservationRequest"
              checked={formData.reservationRequest}
              onChange={handleInputChange}
              className="h-4 w-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
            />
            <label htmlFor="reservationRequest" className="ml-2 text-sm font-medium text-gray-700">
              This is a reservation request
            </label>
          </div>
        </div>

        {/* Reservation Details (conditional) */}
        {formData.reservationRequest && (
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Reservation Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="partySize" className="block text-sm font-medium text-gray-700 mb-2">
                  Party Size
                </label>
                <input
                  type="number"
                  id="partySize"
                  name="partySize"
                  value={formData.partySize || ''}
                  onChange={handleInputChange}
                  min="1"
                  max="20"
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.partySize ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="2"
                />
                {errors.partySize && <p className="text-red-600 text-sm mt-1">{errors.partySize}</p>}
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors ${
                    errors.preferredDate ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                {errors.preferredDate && <p className="text-red-600 text-sm mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="4:00 PM">4:00 PM</option>
                  <option value="4:30 PM">4:30 PM</option>
                  <option value="5:00 PM">5:00 PM</option>
                  <option value="5:30 PM">5:30 PM</option>
                  <option value="6:00 PM">6:00 PM</option>
                  <option value="6:30 PM">6:30 PM</option>
                  <option value="7:00 PM">7:00 PM</option>
                  <option value="7:30 PM">7:30 PM</option>
                  <option value="8:00 PM">8:00 PM</option>
                  <option value="8:30 PM">8:30 PM</option>
                  <option value="9:00 PM">9:00 PM</option>
                  <option value="9:30 PM">9:30 PM</option>
                  <option value="10:00 PM">10:00 PM</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            placeholder="Tell us about your inquiry, special dietary requirements, or any other details..."
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
          <p className="text-sm text-gray-500 mt-1">Minimum 10 characters</p>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}