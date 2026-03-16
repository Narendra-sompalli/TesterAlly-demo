import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bot, Menu, X, FileText, Download, Filter, Calendar, TrendingUp, CheckCircle, XCircle, Clock, ArrowLeft } from 'lucide-react';

export default function Reports() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  // Mock reports data
  const reports = [
    {
      id: 1,
      name: 'UI Test Report - Homepage',
      status: 'passed',
      date: '2026-03-15',
      duration: '2m 30s',
      tests: 25,
      passed: 25,
      failed: 0
    },
    {
      id: 2,
      name: 'Form Validation Test - Registration',
      status: 'failed',
      date: '2026-03-14',
      duration: '1m 45s',
      tests: 15,
      passed: 12,
      failed: 3
    },
    {
      id: 3,
      name: 'Navigation Test - Mobile Menu',
      status: 'passed',
      date: '2026-03-13',
      duration: '3m 10s',
      tests: 20,
      passed: 20,
      failed: 0
    },
    {
      id: 4,
      name: 'API Integration Test',
      status: 'running',
      date: '2026-03-16',
      duration: 'Running...',
      tests: 30,
      passed: 18,
      failed: 2
    }
  ];

  const filteredReports = filter === 'all' ? reports : reports.filter(report => report.status === filter);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'passed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'failed':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'running':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'passed':
        return 'text-green-500';
      case 'failed':
        return 'text-red-500';
      case 'running':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
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
              <Link to="/user/reports" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 font-semibold">Reports</Link>
              <Link to="/user/profile" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">Profile</Link>
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
                <Link to="/user/reports" className="block px-3 py-2 text-blue-500 font-semibold hover:text-blue-400 transition-colors duration-200">Reports</Link>
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

      {/* Reports Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/user" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 flex items-center mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-blue-500 mb-2">Test Reports</h1>
          <p className="text-gray-400">View and analyze your test execution results</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{reports.length}</p>
                <p className="text-gray-400 text-sm">Total Reports</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{reports.filter(r => r.status === 'passed').length}</p>
                <p className="text-gray-400 text-sm">Passed</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <XCircle className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{reports.filter(r => r.status === 'failed').length}</p>
                <p className="text-gray-400 text-sm">Failed</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="flex items-center">
              <TrendingUp className="h-8 w-8 text-yellow-500 mr-3" />
              <div>
                <p className="text-2xl font-bold text-white">{reports.filter(r => r.status === 'running').length}</p>
                <p className="text-gray-400 text-sm">Running</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-gray-300">Filter:</span>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-gray-700 border border-gray-600 rounded-md text-white px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Reports</option>
              <option value="passed">Passed</option>
              <option value="failed">Failed</option>
              <option value="running">Running</option>
            </select>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Report</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tests</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-700 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-white">{report.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center ${getStatusColor(report.status)}`}>
                        {getStatusIcon(report.status)}
                        <span className="ml-2 capitalize">{report.status}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {report.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      {report.duration}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                      <span className="text-green-500">{report.passed}</span> / {report.tests}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-500 hover:text-blue-400 mr-4 transition-colors duration-200">
                        View
                      </button>
                      <button className="text-gray-400 hover:text-white transition-colors duration-200">
                        <Download className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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