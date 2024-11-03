// src/app/components/dashboard/Dashboard.js
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './Dashboard.module.css';

const Dashboard = ({ userName, onLogout }) => {
  const router = useRouter();

  const data = [
    { title: 'Users', value: 120, color: '#4caf50' },
    { title: 'Revenue', value: '$15,000', color: '#2196f3' },
    {
      title: 'Orders',
      value: 300,
      color: '#ff9800',
      action: () => router.push('/sensor-data'), // Navigate to the sensor data page
    },
  ];

  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <h2>Welcome, {userName}!</h2>
      <button onClick={onLogout}>Logout</button>
      <div className={styles.cardContainer}>
        {data.map((item) => (
          <div
            key={item.title}
            className={styles.card}
            style={{ backgroundColor: item.color }}
            onClick={item.action}
          >
            <h2>{item.title}</h2>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
