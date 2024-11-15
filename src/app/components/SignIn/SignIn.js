"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setErrorMessage(errorData.error || 'Login failed. Please try again.');
        return;
      }

      const data = await res.json();
      alert('Logged in successfully!');

      // Store user information in local storage
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirect to the dashboard
      router.push('/dashboard');
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

      {/* Email Field */}
      <div className="relative">
        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
        {/* Mail Icon positioned slightly above with negative margin */}
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
        {/* Lock Icon positioned slightly above with negative margin */}
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
          {isSubmitting ? 'Signing in...' : 'Sign In'}
        </button>
      </div>
    </form>
  );
};

export default SignIn;
