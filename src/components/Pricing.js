import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X, Check, CreditCard, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: ['Basic DOM Analysis', 'Up to 100 Tests', 'Email Support', 'Basic Reporting'],
      popular: false
    },
    {
      name: 'Professional',
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: ['Advanced DOM Analysis', 'Unlimited Tests', 'Priority Support', 'Custom MD Reports', 'API Access'],
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: ['Full AI Agent Suite', 'Unlimited Everything', '24/7 Support', 'Custom Integrations', 'Dedicated Account Manager'],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'We offer a 14-day free trial for all plans. No credit card required to get started.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.'
    }
  ];

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
                <button className="text-gray-300 hover:text-blue-500 transition-colors duration-200">More</button>
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/blog" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-500 hover:bg-gray-700">Blog</Link>
                  <Link to="/pricing" className="block px-4 py-2 text-sm text-blue-500 font-semibold">Pricing</Link>
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
                <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors duration-200">Blog</Link>
                <Link to="/pricing" className="block px-3 py-2 text-blue-500 font-semibold">Pricing</Link>
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

      {/* Pricing Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up flex items-center justify-center">
            <CreditCard className="h-12 w-12 text-blue-500 mr-4" />
            Pricing <span className="text-blue-500">Plans</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
            Choose the perfect plan for your AI testing needs
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-gray-700 p-1 rounded-lg animate-fade-in-up animation-delay-300">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-gray-800 p-8 rounded-xl shadow-lg border transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-blue-500 shadow-blue-500/20 scale-105'
                    : 'border-gray-700 hover:shadow-2xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-blue-500">$</span>
                    <span className="text-5xl font-bold text-white mx-1">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : Math.floor(plan.yearlyPrice / 12)}
                    </span>
                    <div className="flex flex-col ml-2">
                      <span className="text-gray-400 text-sm">per</span>
                      <span className="text-gray-400 text-sm">{billingCycle === 'monthly' ? 'month' : 'month'}</span>
                    </div>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className="text-gray-400 text-sm mt-2">
                      Billed ${plan.yearlyPrice} annually
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-12 flex items-center justify-center">
            <HelpCircle className="h-8 w-8 text-blue-500 mr-3" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
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