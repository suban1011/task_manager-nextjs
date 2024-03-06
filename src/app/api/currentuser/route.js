import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/utils/models/userModel";
export async function GET(request) {
    const loginTok = request.cookies.get("loginToken")?.value;
    console.log(loginTok);
    const data = jwt.verify(loginTok, process.env.JWT_KEY);
    console.log(data)
    const user = await User.findById({ _id: data._id }).select('-password')
    return NextResponse.json(user)
}