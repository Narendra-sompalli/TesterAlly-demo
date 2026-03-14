import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false,
    contactMethod: '',
    priority: 'normal'
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false,
      contactMethod: '',
      priority: 'normal'
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <Bot className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold text-blue-500">TesterAlly</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Services</Link>
              <Link to="/contact" className="text-blue-500 font-semibold">Contact</Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-blue-500 transition-colors duration-200">More</button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-700">Blog</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-700">Pricing</Link>
                </div>
              </div>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Login
                </button>
              </Link>
              <Link to="/registration">
                <button className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Register
                </button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">About</Link>
                <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Services</Link>
                <Link to="/contact" className="block px-3 py-2 text-blue-500 font-semibold">Contact</Link>
                <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Blog</Link>
                <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Pricing</Link>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <Link to="/login" className="block">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mb-2">
                      Login
                    </button>
                  </Link>
                  <Link to="/registration" className="block">
                    <button className="w-full bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Contact <span className="text-blue-500">Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Get in touch with our team for AI testing solutions
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-blue-500 mr-3" />
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8">
                  Have questions about our Agentic AI testing tools? We're here to help!
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">info@testerally.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">123 AI Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>

                <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      required
                    >
                      <option value="" className="bg-gray-700">Select Subject</option>
                      <option value="general" className="bg-gray-700">General Inquiry</option>
                      <option value="support" className="bg-gray-700">Technical Support</option>
                      <option value="sales" className="bg-gray-700">Sales</option>
                      <option value="partnership" className="bg-gray-700">Partnership</option>
                      <option value="feedback" className="bg-gray-700">Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-semibold mb-3">Preferred Contact Method</label>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-gray-300">Email</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-gray-300">Phone</span>
                    </label>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-semibold mb-2">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="low" className="bg-gray-700">Low</option>
                    <option value="normal" className="bg-gray-700">Normal</option>
                    <option value="high" className="bg-gray-700">High</option>
                    <option value="urgent" className="bg-gray-700">Urgent</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-300 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                <div className="mb-8 flex items-center">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label htmlFor="newsletter" className="ml-3 text-gray-300 cursor-pointer">
                    Subscribe to our newsletter for updates
                  </label>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-semibold text-white">TesterAlly</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              &copy; 2026 TesterAlly. All rights reserved.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center md:justify-end space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Terms of Service</Link>
            <Link to="/support" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}