// src/app/sensor-data/page.js
"use client";

import React from 'react';
import SensorData from '../components/SensorData/SensorData';
import DashboardLayout from '../components/DashboardLayout';

const SensorDataPage = () => {
  return (
    <DashboardLayout>
      <h2 className="text-xl font-bold mb-4">Sensor Readings</h2>
      <SensorData />
    </DashboardLayout>
  );
};

export default SensorDataPage;
