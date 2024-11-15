"use client";

import { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaIdCard } from 'react-icons/fa'; // Import icons

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, firstName, lastName }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || 'Signup failed. Please try again.');
        return;
      }

      alert(data.message);
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

      {/* Username Field */}
      <div className="relative">
        <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
        <div className="absolute left-4 top-full mt-[-28px] flex items-center">
          <FaUser className="text-gray-500" />
        </div>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-2 pl-10 pr-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          required
        />
      </div>

       {/* First Name Field */}
       <div className="relative">
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
        <div className="absolute left-4 top-full mt-[-28px] flex items-center">
          <FaIdCard className="text-gray-500" />
        </div>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mt-2 pl-10 pr-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          required
        />
      </div>

            {/* Last Name Field */}
            <div className="relative">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
        <div className="absolute left-4 top-full mt-[-28px] flex items-center">
          <FaIdCard className="text-gray-500" />
        </div>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="mt-2 pl-10 pr-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          required
        />
      </div>

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        <div className="absolute left-4 top-full mt-[-28px] flex items-center">
          <FaEnvelope className="text-gray-500" />
        </div>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 pl-10 pr-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          required
        />
      </div>

      {/* Password Field */}
      <div className="relative">
        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
        <div className="absolute left-4 top-full mt-[-28px] flex items-center">
          <FaLock className="text-gray-500" />
        </div>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-2 pl-10 pr-4 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-800"
          required
        />
      </div>


      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing up...' : 'Sign Up'}
        </button>
      </div>
    </form>
  );
};

export default SignUp;
