// page.tsx (Home Page)

'use client'

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/background-image.jpg)', // Use local image path
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed', // For parallax effect
      }}
    >
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 p-6 md:p-12">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Smart Streetlight Monitoring
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Efficiently manage streetlight operations and optimize energy usage with our real-time monitoring system.
        </p>

        {/* Action buttons */}
        <div className="mt-8 space-x-4">
          <Link href="/signin">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 w-full text-center text-white opacity-70">
        <p>&copy; 2024 Smart Streetlight Monitoring System</p>
      </footer>
    </div>
  );
};

export default Home;
