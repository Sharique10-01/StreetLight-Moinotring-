"use client";

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SensorData = () => {
  const [moistureData, setMoistureData] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [timeLabels, setTimeLabels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMoisture = Math.floor(Math.random() * 100);
      const newTemperature = Math.floor(Math.random() * 40) + 10;
      const newTimeLabel = new Date().toLocaleTimeString();

      setMoistureData((prev) => {
        const updatedData = [...prev, newMoisture];
        return updatedData.slice(-25); // Keep only the last 25 entries
      });

      setTemperatureData((prev) => {
        const updatedData = [...prev, newTemperature];
        return updatedData.slice(-25); // Keep only the last 25 entries
      });

      setTimeLabels((prev) => {
        const updatedLabels = [...prev, newTimeLabel];
        return updatedLabels.slice(-25); // Keep only the last 25 entries
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const moistureChartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Moisture Level (%)',
        data: moistureData,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const moistureChartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Moisture Level (%)',
        },
      },
    },
  };

  const temperatureChartData = {
    labels: timeLabels,
    datasets: [
      {
        label: 'Temperature (°C)',
        data: temperatureData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const temperatureChartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-center  text-gray-600 mb-6">Sensor Data Overview</h2>
  <div className="flex justify-between">
    <div className="w-1/2 pr-2">
      <h3 className="text-xl mb-4 text-center text-gray-800">Moisture Level</h3> {/* Darker text */}
      <Line data={moistureChartData} options={moistureChartOptions} />
    </div>
    <div className="w-1/2 pl-2">
      <h3 className="text-xl mb-4 text-center text-gray-800">Temperature</h3> {/* Darker text */}
      <Bar data={temperatureChartData} options={temperatureChartOptions} />
    </div>
  </div>
</div>

  );
};

export default SensorData;
