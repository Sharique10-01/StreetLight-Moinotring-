// src/app/api/auth/signin/route.js
import connectDB from '../../../../db/connect';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    await connectDB();

    const { email, password } = await req.json();

    try {
        const user = await User.findOne({ email });
        console.log('User found:', user);

        if (!user) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 400 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 400 });
        }

        // Return user data including username
        return new Response(JSON.stringify({ message: 'Sign in successful', user: { email: user.email, username: user.username } }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
