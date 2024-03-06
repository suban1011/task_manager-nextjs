import { Task } from "@/utils/models/taskModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userid } = params;
    console.log(userid)
    try {
        const tasks = await Task.find({ userId: userid })
        return NextResponse.json(tasks, {
            message: "tasks found",
            success: true,
            status: 201,
        })
    } catch (error) {
        return NextResponse.json({
            message: "not found",
            success: false,
        })
    }


}