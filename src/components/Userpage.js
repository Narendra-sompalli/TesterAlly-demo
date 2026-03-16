import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, X, User, Play, FileText, Settings, Plus, FolderOpen, LogOut, Bell, Search, Filter, Upload, Eye, Calendar, Clock, CheckCircle, AlertTriangle, Info, Zap, BarChart3, Activity, Users, Target, TrendingUp } from 'lucide-react'; 

export default function Userpage() {
  const navigate = useNavigate();
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [isMenuOpen, ] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', message: 'Test completed successfully', time: '2 minutes ago' },
    { id: 2, type: 'warning', message: 'High memory usage detected', time: '5 minutes ago' },
    { id: 3, type: 'info', message: 'New update available', time: '1 hour ago' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    alert(`Project "${projectName}" created!`);
    setProjectName('');
    setDescription('');
    setPriority('medium');
    setShowCreateModal(false);
  };

  const handleRunTest = () => {
    alert('Test run initiated!');
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const dismissNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleProjectSelect = (projectId) => {
    setSelectedProjects(prev =>
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handleBulkAction = (action) => {
    if (selectedProjects.length === 0) return;
    alert(`${action} applied to ${selectedProjects.length} projects`);
    setSelectedProjects([]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Bot className="h-8 w-8 text-blue-500 mr-2" />
              <h1 className="text-xl font-bold text-blue-500">TesterAlly</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/user" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 font-semibold">Dashboard</Link>
              <Link to="/user/reports" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Reports</Link>
              <Link to="/user/profile" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Profile</Link>
              <Link to="/user/settings" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Settings</Link>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>

              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={handleNotificationClick}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-200 relative"
                >
                  <Bell className="h-6 w-6" />
                  {notifications.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications.length}
                    </span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {showNotification && (
                  <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50">
                    <div className="p-4 border-b border-gray-700">
                      <h3 className="text-sm font-semibold text-white">Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className="p-3 border-b border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              {notification.type === 'success' && <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />}
                              {notification.type === 'warning' && <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5" />}
                              {notification.type === 'info' && <Info className="h-5 w-5 text-blue-500 mt-0.5" />}
                              <div>
                                <p className="text-sm text-white">{notification.message}</p>
                                <p className="text-xs text-gray-400">{notification.time}</p>
                              </div>
                            </div>
                            <button
                              onClick={() => dismissNotification(notification.id)}
                              className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Logout Button */}
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
                <Link to="/user" className="block px-3 py-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-200">Dashboard</Link>
                <Link to="/user/reports" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Reports</Link>
                <Link to="/user/profile" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Profile</Link>
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

      {/* Dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Welcome Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-blue-500 mb-2">Welcome back, {localStorage.getItem('uname')}!</h1>
              <p className="text-gray-400">Here's what's happening with your testing projects today.</p>
            </div>
            <div className="mt-4 lg:mt-0 flex space-x-3">
              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl"
              >
                <Plus className="h-5 w-5 mr-2" />
                New Project
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Import
              </button>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">24</p>
                <p className="text-gray-400 text-sm">Total Projects</p>
              </div>
              <FolderOpen className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+12% from last month</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">156</p>
                <p className="text-gray-400 text-sm">Tests Run</p>
              </div>
              <Activity className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+8% from last week</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">94.2%</p>
                <p className="text-gray-400 text-sm">Success Rate</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-green-500 text-sm">+2.1% from last month</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-white">3</p>
                <p className="text-gray-400 text-sm">Active Tests</p>
              </div>
              <Zap className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="mt-4 flex items-center">
              <Clock className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="text-yellow-500 text-sm">Running now</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={handleRunTest}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Play className="h-6 w-6 mr-3" />
              <div className="text-left">
                <div className="font-semibold">Run Test</div>
                <div className="text-sm opacity-90">Start new test suite</div>
              </div>
            </button>
            <Link to="/user/reports">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                <FileText className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">View Reports</div>
                  <div className="text-sm opacity-90">Analyze results</div>
                </div>
              </button>
            </Link>
            <Link to="/user/profile">
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                <User className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Profile</div>
                  <div className="text-sm opacity-90">Manage account</div>
                </div>
              </button>
            </Link>
            <Link to="/user/settings">
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105">
                <Settings className="h-6 w-6 mr-3" />
                <div className="text-left">
                  <div className="font-semibold">Settings</div>
                  <div className="text-sm opacity-90">Configure app</div>
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Recent Activity & Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Recent Projects */}
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <FolderOpen className="h-5 w-5 mr-2 text-blue-500" />
                  Recent Projects
                </h3>
                <div className="flex items-center space-x-2">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200">
                    <Filter className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6">
              {selectedProjects.length > 0 && (
                <div className="mb-4 p-3 bg-blue-900/50 border border-blue-500 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-300">{selectedProjects.length} projects selected</span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleBulkAction('Delete')}
                        className="text-red-400 hover:text-red-300 text-sm px-2 py-1 rounded transition-colors duration-200"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleBulkAction('Archive')}
                        className="text-gray-400 hover:text-gray-300 text-sm px-2 py-1 rounded transition-colors duration-200"
                      >
                        Archive
                      </button>
                    </div>
                  </div>
                </div>
              )}
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={selectedProjects.includes(1)}
                    onChange={() => handleProjectSelect(1)}
                    className="mr-4 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium">E-commerce Testing Suite</h4>
                    <p className="text-gray-400 text-sm">Last run: 2 hours ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full">Active</span>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={selectedProjects.includes(2)}
                    onChange={() => handleProjectSelect(2)}
                    className="mr-4 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium">API Integration Tests</h4>
                    <p className="text-gray-400 text-sm">Last run: 1 day ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-900 text-yellow-300 text-xs rounded-full">Running</span>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200">
                  <input
                    type="checkbox"
                    checked={selectedProjects.includes(3)}
                    onChange={() => handleProjectSelect(3)}
                    className="mr-4 h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium">Mobile App Testing</h4>
                    <p className="text-gray-400 text-sm">Last run: 3 days ago</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-green-900 text-green-300 text-xs rounded-full">Completed</span>
                    <button className="text-gray-400 hover:text-white transition-colors duration-200">
                      <Eye className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-gray-800 rounded-lg shadow-lg">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="h-5 w-5 mr-2 text-blue-500" />
                Recent Activity
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Test suite "Login Flow" completed successfully</p>
                    <p className="text-xs text-gray-400">2 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Warning: High memory usage detected in test environment</p>
                    <p className="text-xs text-gray-400">15 minutes ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Info className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">New test case added to "E-commerce Suite"</p>
                    <p className="text-xs text-gray-400">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Users className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Team member Sarah joined project "API Testing"</p>
                    <p className="text-xs text-gray-400">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <BarChart3 className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white">Performance report generated for "Mobile App Tests"</p>
                    <p className="text-xs text-gray-400">4 hours ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced Options Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowAdvancedOptions(!showAdvancedOptions)}
            className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex items-center"
          >
            <Settings className="h-4 w-4 mr-2" />
            {showAdvancedOptions ? 'Hide' : 'Show'} Advanced Options
          </button>
        </div>

        {showAdvancedOptions && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                Performance Metrics
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">CPU Usage</span>
                  <span className="text-white">45%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Memory</span>
                  <span className="text-white">2.1GB / 8GB</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '26%'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Target className="h-5 w-5 mr-2 text-red-500" />
                Test Coverage
              </h4>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">87.3%</div>
                <p className="text-gray-400 text-sm">Overall Coverage</p>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Unit Tests</span>
                    <span className="text-white">92%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Integration</span>
                    <span className="text-white">78%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">E2E Tests</span>
                    <span className="text-white">65%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                Upcoming Tests
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <p className="text-white text-sm font-medium">Regression Suite</p>
                    <p className="text-gray-400 text-xs">Tomorrow 9:00 AM</p>
                  </div>
                  <Clock className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                  <div>
                    <p className="text-white text-sm font-medium">Performance Test</p>
                    <p className="text-gray-400 text-xs">Friday 2:00 PM</p>
                  </div>
                  <BarChart3 className="h-4 w-4 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Plus className="h-5 w-5 mr-2 text-blue-500" />
                  Create New Project
                </h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
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
                <div className="flex space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

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
