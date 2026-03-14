import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Users, Target } from 'lucide-react';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">TesterAlly</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
              <div className="relative group">
                <button className="hover:text-blue-400 transition-colors">More</button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/blog" className="block px-4 py-2 hover:bg-gray-700">Blog</Link>
                  <Link to="/pricing" className="block px-4 py-2 hover:bg-gray-700">Pricing</Link>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors">Login</Link>
                <Link to="/registration" className="bg-transparent border border-blue-600 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors">Register</Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/about" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/services" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/blog" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link to="/pricing" className="hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
                <div className="flex space-x-4 pt-4">
                  <Link to="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Login</Link>
                  <Link to="/registration" className="bg-transparent border border-blue-600 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* About Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="text-blue-500">TesterAlly</span>
          </h1>
          <p className="text-xl text-gray-300">
            Leading the way in Agentic AI for Web Testing
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-blue-500 mr-4" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-300 mb-8">
                TesterAlly is dedicated to revolutionizing web testing through advanced Agentic AI technology.
                Our agents autonomously explore and test web applications, ensuring comprehensive coverage and accurate results.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Learn More About Our Tech
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="AI Technology"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold">Our Team</h2>
            <p className="text-gray-300 mt-4">Meet the experts behind TesterAlly</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="John Doe"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-300 mb-4">CEO & Founder</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact
              </button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Jane Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-300 mb-4">CTO</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact
              </button>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-2">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                alt="Bob Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Bob Johnson</h3>
              <p className="text-gray-300 mb-4">Lead Developer</p>
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-semibold transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6 text-blue-500" />
              <span className="font-semibold">TesterAlly</span>
            </div>
            <p className="text-gray-400">&copy; 2026 TesterAlly. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</Link>
              <Link to="/support" className="text-gray-400 hover:text-blue-400 transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}