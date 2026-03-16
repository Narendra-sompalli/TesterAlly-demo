import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Userpage from './components/Userpage';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Reports from './components/Reports';
import ForgotPassword from './components/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';


export default class App extends Component {
  render() {
    return (
      <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Protected Routes */}
        <Route path="/user" element={<ProtectedRoute><Userpage /></ProtectedRoute>} />
        <Route path="/user/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/user/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/user/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />

      </Routes>
      </div>
    )
  }
}
