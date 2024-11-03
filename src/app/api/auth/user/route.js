// src/app/api/auth/user/route.js
import { connectToDatabase } from '@/lib/mongodb'; // Adjust the import as needed

export async function GET(req) {
  // For demonstration, we'll assume you retrieve user ID from a session or token
  const userId = 'some-user-id'; // Replace this with logic to get the actual user ID

  const db = await connectToDatabase();
  const user = await db.collection('users').findOne({ _id: userId });

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
  }

  // Return user data, excluding sensitive information
  const { password, ...userData } = user;
  return new Response(JSON.stringify(userData), { status: 200 });
}
