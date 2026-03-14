import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Calendar, BookOpen, Mail, Rss } from 'lucide-react';

export default function Blog() {
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const posts = [
    {
      id: 1,
      title: 'Introduction to Agentic AI Testing',
      excerpt: 'Learn how agentic AI is revolutionizing web testing automation.',
      date: 'March 10, 2026',
      category: 'AI & Testing'
    },
    {
      id: 2,
      title: 'DOM Analysis Best Practices',
      excerpt: 'Deep dive into DOM structure analysis for comprehensive testing.',
      date: 'March 5, 2026',
      category: 'Automation'
    },
    {
      id: 3,
      title: 'Building Custom AI Agents',
      excerpt: 'Guide to creating tailored AI agents for specific testing needs.',
      date: 'February 28, 2026',
      category: 'Tutorials'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    setEmail('');
    setCategory('');
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
              <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
              <div className="relative group">
                <button className="text-blue-500 font-semibold">Blog</button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
                <Link to="/blog" className="block px-3 py-2 text-blue-500 font-semibold">Blog</Link>
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

      {/* Blog Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up flex items-center justify-center">
            <BookOpen className="h-12 w-12 text-blue-500 mr-4" />
            Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Insights and updates from the world of AI testing
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <article key={post.id} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="mb-4">
                  <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 hover:text-blue-500 transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center">
                  <Rss className="h-4 w-4 mr-2" />
                  Read More
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center">
            <Mail className="h-8 w-8 text-blue-500 mr-3" />
            Subscribe to Our Blog
          </h3>
          <form onSubmit={handleNewsletterSubmit} className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="" className="bg-gray-700">Select Category</option>
                  <option value="ai" className="bg-gray-700">AI & Testing</option>
                  <option value="automation" className="bg-gray-700">Automation</option>
                  <option value="tutorials" className="bg-gray-700">Tutorials</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center justify-center"
            >
              <Mail className="h-5 w-5 mr-2" />
              Subscribe
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