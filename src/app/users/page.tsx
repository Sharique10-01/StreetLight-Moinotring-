import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const Page = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <div className="container mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Service Providers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-gradient-to-r from-teal-500 to-blue-600 text-white p-6 shadow-md">
            <tr>
              <th className="text-lg py-3">Name</th>
              <th className="text-lg py-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-blue-100 transition-colors">
                <td className="py-3 px-4 border-b border-gray-300 text-gray-800">{user.name}</td>
                <td className="py-3 px-4 border-b border-gray-300 text-gray-800">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
