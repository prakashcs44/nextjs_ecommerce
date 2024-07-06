import { NextRequest,NextResponse } from "next/server";
import UserModel from "@/models/user.model";
import { connectToDb } from "@/utils/db";
import bcrypt from "bcryptjs"

export const POST = async (request:NextRequest)=>{
   const body = await request.json();
   const {email,registerMethod} = body;
   const password = body.password;
   await connectToDb();

   const passwordHashed = await bcrypt.hash(password,10);

  const user = await UserModel.create({
     email,
     password:passwordHashed,
     registerMethod
  });

  return  NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
   
}