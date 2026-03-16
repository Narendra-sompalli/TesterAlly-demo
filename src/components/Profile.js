import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, Menu, X, User, Mail, Phone, MapPin, Save, ArrowLeft } from 'lucide-react';

export default function Profile() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    uname: '',
    email: '',
    phone_no: '',
    address: ''
  });

  useEffect(() => {
    // Load user data from localStorage
    const uname = localStorage.getItem('uname');
    const email = localStorage.getItem('email');
    const phone_no = localStorage.getItem('phone_no');
    const address = localStorage.getItem('address') || '';

    if (!uname) {
      navigate('/login');
      return;
    }

    setFormData({ uname, email, phone_no, address });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save to localStorage
    localStorage.setItem('uname', formData.uname);
    localStorage.setItem('email', formData.email);
    localStorage.setItem('phone_no', formData.phone_no);
    localStorage.setItem('address', formData.address);
    alert('Profile updated successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-500 mr-2" />
              <h1 className="text-xl font-bold text-blue-500">TesterAlly</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/user" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Dashboard</Link>
              <Link to="/user/reports" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Reports</Link>
              <Link to="/user/profile" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 font-semibold">Profile</Link>
              <Link to="/user/settings" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Settings</Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Logout Button */}
            <div className="hidden md:block">
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center"
              >
                <X className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                <Link to="/user" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Dashboard</Link>
                <Link to="/user/reports" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Reports</Link>
                <Link to="/user/profile" className="block px-3 py-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-200">Profile</Link>
                <Link to="/user/settings" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Settings</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/user" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Profile Settings</h1>
          <p className="text-gray-400">Update your personal information</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2 text-blue-500" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="uname"
                  value={formData.uname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-blue-500" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone_no"
                  value={formData.phone_no}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl"
              >
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2026 TesterAlly. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Terms of Service</Link>
              <Link to="/support" className="text-gray-400 hover:text-blue-500 transition-colors duration-200">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}