import connectDB from "@/utils/db";
import { Task } from "@/utils/models/taskModel";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

connectDB();
export async function GET() {
    try {
        const allTask = await Task.find()
        return NextResponse.json(allTask)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Not getting task",
            success: false
        }, { status: 500 })
    }

}

export async function POST(request) {
    try {
        const { title, content, taskstatus } = await request.json();

        const loginTok = request.cookies.get("loginToken")?.value;
        const data = jwt.verify(loginTok, process.env.JWT_KEY);

        const task = new Task({
            title, content, taskstatus, userId: data._id
        })

        const result = await task.save();

        return NextResponse.json(result)
    } catch (error) {
        console.log(error);
        return NextResponse.json({


            message: "invalid",
            success: false
        })
    }

}