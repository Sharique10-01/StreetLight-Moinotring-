"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaHome, FaExclamationTriangle, FaBolt, FaChartBar, FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import Link from 'next/link';
import styles from './Dashboard.module.css';

const Dashboard = ({ userName, onLogout }) => {
  const router = useRouter();

  // Sample data for States and Cities
  const statesData = {
    "California": ["Los Angeles", "San Francisco", "San Diego"],
    "Texas": ["Houston", "Dallas", "Austin"],
    "New York": ["New York City", "Buffalo", "Rochester"]
  };

  // Default state and city
  const defaultState = "California";
  const defaultCity = "San Francisco";

  const [selectedState, setSelectedState] = useState(defaultState);
  const [selectedCity, setSelectedCity] = useState(defaultCity);

  useEffect(() => {
    // Set default city when state changes
    setSelectedCity(statesData[selectedState][0]);
  }, [selectedState]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const data = [
    { 
      title: 'Operational Lights', 
      value: 450, 
      color: '#4caf50', 
      icon: <FaHome />, // Icon for Dashboard
    },
    { 
      title: 'Faults Detected', 
      value: 15, 
      color: '#ff5722', 
      icon: <FaExclamationTriangle />, 
      action: () => router.push('/faults'),
    },
    { 
      title: 'Energy Consumption', 
      value: '12,350 kWh', 
      color: '#2196f3', 
      icon: <FaBolt />, 
      action: () => router.push('/energy-usage'),
    },
    { 
      title: 'Reports', 
      value: '10', 
      color: '#9e9e9e', 
      icon: <FaChartBar />, 
      action: () => router.push('/reports'),
    },
  ];

  return (
    <div className={`${styles.container}`}>
      {/* Background Image with Dim Overlay */}
      <div className={styles['dashboard-background']}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className="text-3xl font-bold">Smart StreetLight Monitor</h1>
        </header>
        
               {/* State Selection Navbar */}
               <nav className={styles.nav}>
          <ul className="flex space-x-8 justify-center">
            <li className="hover:text-teal-600 transition">
              <Link href="/users" className="p-2">{userName}</Link>
            </li>

            <li className="hover:text-teal-600 transition">
              <Link href="/dashboard" className="p-2">Dashboard</Link>
            </li>
            <li className="hover:text-teal-600 transition">
              <Link href="/sensor-data" className="p-2">Sensor Data</Link>
            </li>
            <li className="hover:text-teal-600 transition">
              <Link href="/users" className="p-2">Services</Link>
            </li>
           
            {/* State Dropdown */}
            <li className="relative">
              <select
                className={styles.dropdown}
                value={selectedState}
                onChange={handleStateChange}
              >
                {Object.keys(statesData).map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </li>
            <li className="relative">
              <select
                className={styles.dropdown}
                value={selectedCity}
                onChange={handleCityChange}
              >
                {statesData[selectedState].map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </li>

            <li className="hover:text-teal-600 transition">
              <Link href="/" className="p-2">Logout</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
         
          {/* Card Container */}
          <div className={styles.cardContainer}>
            {data.map((item, idx) => (
              <div 
                key={idx} 
                className={`${styles.card}`} 
                style={{ backgroundColor: item.color }} 
                onClick={item.action}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>&copy; 2024 Smart Streetlight Inc. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;
