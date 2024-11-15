// src/app/signup/page.js

"use client";

import React from 'react';
import SignUp from '../components/SignUp/SignUp'; // Import SignUp component

const SignUpPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/background-image.jpg')" }}> {/* Use the same image path */}
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Sign Up</h2>
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
