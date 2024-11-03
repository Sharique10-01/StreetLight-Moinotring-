// src/app/api/auth/signup/route.js
import connectDB from '../../../../db/connect';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';

export async function POST(req) {
    await connectDB();

    const { email, password, username, firstName, lastName } = await req.json();

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = new User({
            email,
            password: hashedPassword, // Use hashed password
            username,
            firstName,
            lastName,
        });

        await newUser.save();
        return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
