import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '../../../../models/User'
import { connectMongoDB } from '../../../../lib/mongodb';

export async function POST(req) {
  const { name, email, password } = await req.json();
  console.log(name, email, password)
  await connectMongoDB();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ error: 'User already exists' }, { status: 400 });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  
  await user.save();

  return NextResponse.json({ message: 'User created successfully' });
}