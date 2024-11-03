"use client";

import React from 'react';
import Link from 'next/link';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Smart StreetLight Monitor</h1>
      </header>
      <nav className="bg-white text-gray-800 p-4 shadow">
        <ul className="flex space-x-8 justify-center">
          <li className="hover:text-teal-600 transition">
            <Link href="/dashboard" className="p-2">Dashboard</Link>
          </li>
          <li className="hover:text-teal-600 transition">
            <Link href="/sensor-data" className="p-2">Sensor Data</Link>
          </li>
          <li className="hover:text-teal-600 transition">
            <Link href="/users" className="p-2">Services</Link>
          </li>
          <li className="hover:text-teal-600 transition">
            <Link href="/" className="p-2">Logout</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Smart Home Monitor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardLayout;
