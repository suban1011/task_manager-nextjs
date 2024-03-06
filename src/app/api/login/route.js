import { User } from "@/utils/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken";


export async function POST(request) {
    const { email, password } = await request.json();
    try {
        //1. Check User
        let user = await User.findOne({ email: email })

        if (user == null) {
            throw new Error("user not found")
        }
        //2. Match password
        const matched = bcrypt.compareSync(password, user.password);
        if (!matched) {
            throw new Error("password not matched..")
        }
        //3. generate token
        const token = jwt.sign({
            _id: user._id,
            name: user.name
        }, process.env.JWT_KEY)

        //4. create NExtResponse cookiee
        const response = NextResponse.json({
            message: "Login Success !!",
            success: true,
            user: user
        })

        response.cookies.set("loginToken", token, {
            expiresIn: "1d",
            httpOnly: true,
        })
        console.log(user);
        console.log(token);
        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: error.message,
            success: false
        }, { status: 500 })
    }

}