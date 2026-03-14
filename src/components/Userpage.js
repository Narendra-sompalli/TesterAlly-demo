import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, Menu, X, User, Play, FileText, Settings, Plus, FolderOpen, LogOut } from 'lucide-react'; 

export default function Userpage() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uname');
    localStorage.removeItem('email');
    localStorage.removeItem('phone_no');
    navigate('/login');
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    alert(`Project "${projectName}" created!`);
    setProjectName('');
    setDescription('');
    setPriority('medium');
  };

  const handleRunTest = () => {
    alert('Test run initiated!');
  };

  const handleViewReports = () => {
    alert('Viewing reports...');
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
              <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
              <div className="relative group">
                <button className="text-gray-300 hover:text-blue-500 transition-colors duration-200">More</button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-500">Blog</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-blue-500">Pricing</Link>
                </div>
              </div>
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
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Home</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">About</Link>
                <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Services</Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Contact</Link>
                <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Blog</Link>
                <Link to="/pricing" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Pricing</Link>
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

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Welcome, {localStorage.getItem('uname')}</h1>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-500" />
              User Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <span className="font-medium text-gray-300 mr-2">Email:</span>
                <span>{localStorage.getItem('email')}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-300 mr-2">Phone:</span>
                <span>{localStorage.getItem('phone_no')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={handleRunTest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <Play className="h-5 w-5 mr-2" />
              Run Test
            </button>
            <button
              onClick={handleViewReports}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
            >
              <FileText className="h-5 w-5 mr-2" />
              View Reports
            </button>
            <Link to="/settings">
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl">
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </button>
            </Link>
          </div>
        </div>

        {/* Create Project Form */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Plus className="h-5 w-5 mr-2 text-blue-500" />
            Create New Project
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <form onSubmit={handleCreateProject} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Enter project name"
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your project"
                  rows="4"
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Priority</label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create Project
              </button>
            </form>
          </div>
        </div>

        {/* Recent Projects */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <FolderOpen className="h-5 w-5 mr-2 text-blue-500" />
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-2">Sample Project 1</h3>
              <p className="text-gray-300 mb-4">Status: <span className="text-green-500">Completed</span></p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                View Details
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-2">Sample Project 2</h3>
              <p className="text-gray-300 mb-4">Status: <span className="text-yellow-500">In Progress</span></p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
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
