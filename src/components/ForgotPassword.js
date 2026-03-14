import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Bot, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isPasswordReset, setIsPasswordReset] = useState(false);

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required!");
      setMessage("");
      return;
    }

    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      setMessage("");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      setMessage("");
      return;
    }

    try {

      const response = await axios.post("http://127.0.0.1:8000/api/reset-password/", { email, newPassword });
      setMessage(response.data.message || "Password reset successful!");
      setError("");
      setIsPasswordReset(true);

      setEmail("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Bot className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-6 text-3xl font-bold text-white">Reset Password</h2>
          <p className="mt-2 text-sm text-gray-400">
            Enter your email and new password to reset your account
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          {message && (
            <div className="mb-4 p-4 bg-green-900 border border-green-700 rounded-md">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                <p className="text-green-400 text-sm">{message}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-900 border border-red-700 rounded-md">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {!isPasswordReset ? (
            <form onSubmit={handlePasswordReset} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-500" />
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-blue-500" />
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password (min 6 characters)"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-blue-500" />
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition-colors duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Reset Password
              </button>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-green-500" />
              </div>
              <p className="text-gray-300">Your password has been reset successfully!</p>
              <p className="text-sm text-gray-400">
                Go back to{' '}
                <Link to="/login" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 font-medium">
                  Login
                </Link>
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link to="/login" className="text-blue-500 hover:text-blue-400 transition-colors duration-200 text-sm">
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
