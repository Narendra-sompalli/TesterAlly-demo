import { useState } from "react";
import { Link } from 'react-router-dom';
import { Bot, User, Mail, Lock, Phone, MapPin, Check, ArrowRight, X, Menu } from 'lucide-react'; 

function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailId, setEmailId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [country, setCountry] = useState("");
    const [accountType, setAccountType] = useState("");
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    async function save(event) {
        event.preventDefault();
        setIsLoading(true);
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            setIsLoading(false);
            return;
        }

        if (!agreeTerms) {
            setErrorMessage("You must agree to the terms and conditions.");
            setIsLoading(false);
            return;
        }

        try {
            // Get existing users from localStorage
            const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");

            // Check if email already exists
            if (existingUsers.some(user => user.email === emailId)) {
                setErrorMessage("Email already registered. Please use a different email.");
                setIsLoading(false);
                return;
            }

            // Create new user object
            const newUser = {
                uname: `${firstName} ${lastName}`,
                email: emailId,
                phone_no: mobileNumber,
                password: password,
                country: country,
                accountType: accountType,
                subscribeNewsletter: subscribeNewsletter
            };

            // Save to localStorage
            existingUsers.push(newUser);
            localStorage.setItem("registeredUsers", JSON.stringify(existingUsers));

            setRegistrationSuccess(true);
            setFirstName("");
            setLastName("");
            setMobileNumber("");
            setEmailId("");
            setPassword("");
            setConfirmPassword("");
            setCountry("");
            setAccountType("");
            setAgreeTerms(false);
            setSubscribeNewsletter(false);
            setErrorMessage("");
        } catch (err) {
            console.error(err);
            setErrorMessage("Registration failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-2xl w-full space-y-8 mt-40 mb-20">
                {/* Header */}
                <div className="text-center">
                    <div className="flex justify-center">
                        <Bot className="h-12 w-12 text-blue-500" />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold text-white">
                        Join <span className="text-blue-500">TesterAlly</span>
                    </h2>
                    <p className="mt-2 text-sm text-gray-400">
                        Create your account to start testing with AI
                    </p>
                </div>

                {/* Registration Form */}
                <div className="bg-gray-800 py-8 px-6 shadow-2xl rounded-xl border border-gray-700">
                    {registrationSuccess && (
                        <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6 flex items-center">
                            <Check className="h-5 w-5 mr-2" />
                            Registration successful! Please check your email to verify your account.
                        </div>
                    )}

                    {errorMessage && (
                        <div className="bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg mb-6">
                            {errorMessage}
                        </div>
                    )}

                    <form className="space-y-6" onSubmit={save}>
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    First Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Last Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Mobile Number
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="tel"
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter Mobile Number"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Country
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <MapPin className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                    >
                                        <option value="" className="bg-gray-700">Select Country</option>
                                        <option value="us" className="bg-gray-700">United States</option>
                                        <option value="uk" className="bg-gray-700">United Kingdom</option>
                                        <option value="ca" className="bg-gray-700">Canada</option>
                                        <option value="au" className="bg-gray-700">Australia</option>
                                        <option value="de" className="bg-gray-700">Germany</option>
                                        <option value="fr" className="bg-gray-700">France</option>
                                        <option value="jp" className="bg-gray-700">Japan</option>
                                        <option value="in" className="bg-gray-700">India</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter Email"
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="password"
                                        className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Account Type */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                Account Type
                            </label>
                            <div className="flex flex-wrap gap-6">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="accountType"
                                        value="personal"
                                        checked={accountType === 'personal'}
                                        onChange={(e) => setAccountType(e.target.value)}
                                        className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                                        required
                                    />
                                    <span className="text-gray-300">Personal</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="accountType"
                                        value="business"
                                        checked={accountType === 'business'}
                                        onChange={(e) => setAccountType(e.target.value)}
                                        className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 focus:ring-blue-500 focus:ring-2"
                                    />
                                    <span className="text-gray-300">Business</span>
                                </label>
                            </div>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeTerms}
                                    onChange={(e) => setAgreeTerms(e.target.checked)}
                                    className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 mt-1"
                                    required
                                />
                                <label htmlFor="terms" className="ml-3 text-sm text-gray-300 cursor-pointer">
                                    I agree to the{" "}
                                    <Link to="/terms" className="text-blue-500 hover:text-blue-400 transition-colors duration-200">
                                        Terms and Conditions
                                    </Link>
                                </label>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    checked={subscribeNewsletter}
                                    onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                                    className="h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 mt-1"
                                />
                                <label htmlFor="newsletter" className="ml-3 text-sm text-gray-300 cursor-pointer">
                                    Subscribe to our newsletter for updates
                                </label>
                            </div>
                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 transform hover:scale-105"
                        >
                            {isLoading ? (
                                <div className="flex items-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Creating Account...
                                </div>
                            ) : (
                                <div className="flex items-center">
                                    Create Account
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </div>
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-400">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-blue-500 hover:text-blue-400 font-medium transition-colors duration-200"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default RegistrationForm;
