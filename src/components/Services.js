import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Zap, FileText, Users, Settings, CheckCircle } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoRequest = (e) => {
    e.preventDefault();
    alert('Demo request submitted!');
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
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
              <Link to="/services" className="text-blue-500 font-semibold">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
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
                <Link to="/services" className="block px-3 py-2 text-blue-500 font-semibold">Services</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
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

      {/* Services Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Our <span className="text-blue-500">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Comprehensive Agentic AI Solutions for Web Testing
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Automated Web Testing</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Our AI agents perform end-to-end testing of web applications, identifying bugs and ensuring quality.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                onClick={() => setSelectedService('automated')}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-white">DOM Analysis & Reporting</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Deep analysis of DOM structures with detailed MD reports for easy test case generation.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                onClick={() => setSelectedService('dom')}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Custom AI Agents</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Tailored agentic AI solutions for specific testing needs and workflows.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                onClick={() => setSelectedService('custom')}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>

            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
              <div className="flex items-center mb-4">
                <Settings className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-semibold text-white">Integration Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Seamless integration of our AI testing tools into your existing development pipeline.
              </p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center"
                onClick={() => setSelectedService('integration')}
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Request Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Request a Demo</h3>
          <form onSubmit={handleDemoRequest} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="Your full name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Service of Interest</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                required
              >
                <option value="" className="bg-gray-800">Select Service</option>
                <option value="automated" className="bg-gray-800">Automated Web Testing</option>
                <option value="dom" className="bg-gray-800">DOM Analysis & Reporting</option>
                <option value="custom" className="bg-gray-800">Custom AI Agents</option>
                <option value="integration" className="bg-gray-800">Integration Services</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                placeholder="Tell us about your testing needs..."
              ></textarea>
            </div>

            <div className="mb-8 flex items-center">
              <input
                type="checkbox"
                id="newsletter"
                className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="newsletter" className="ml-3 text-gray-300">
                Subscribe to our newsletter for updates
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Request Demo
            </button>
          </form>
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