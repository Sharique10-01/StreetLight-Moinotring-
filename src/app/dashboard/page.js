"use client"; // This is a client component

import React, { useEffect, useState } from 'react';
import Dashboard from '../components/dashboard/Dashboard';

const DashboardPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const parsedUser = JSON.parse(userString);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // Clear user state on logout
  };

  if (!user) {
    return <div>Please log in to see your dashboard.</div>;
  }

  return <Dashboard userName={user.username} onLogout={handleLogout} />;
};

export default DashboardPage;
