import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to the App!</h1>
      <p>Please sign in to continue.</p>
      <div className="mt-6 space-x-4">
        <Link href="/signin">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Sign In
          </button>
        </Link>
        <Link href="/signup">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
