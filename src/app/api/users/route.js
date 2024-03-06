import connectDB from "@/utils/db";
import { User } from "@/utils/models/userModel";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
//DB connection
connectDB();

export async function GET() {
    try {
        const users = await User.find();
        console.log(users)
        return NextResponse.json(users, {
            success: true,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to get User',
            success: false
        })
    }

}
export async function POST(request) {
    try {
        const { name, email, password, about, profileUrl } = await request.json();
        // var salt = bcrypt.genSaltSync(10);
        // password = bcrypt.hashSync(password, salt);
        // console.log(password)
        const user = new User({
            name, email, password, about, profileUrl
        })
        var salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(password, salt);
        console.log(password)
        const userData = await user.save();
        return NextResponse.json(userData, {
            status: 201,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create user",
            status: false
        }, { status: 500 })
    }


}