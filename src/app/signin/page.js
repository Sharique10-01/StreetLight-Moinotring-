// src/app/signin/page.js

"use client";

import React from 'react';
import SignIn from '../components/SignIn/SignIn'; // Import SignIn component

const SignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/background-image.jpg')" }}>
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Sign In</h2>
        <SignIn />
      </div>
    </div>
  );
};

export default SignInPage;
