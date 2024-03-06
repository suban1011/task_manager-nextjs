import connectDB from "@/utils/db";
import { Task } from "@/utils/models/taskModel";
import { NextResponse } from "next/server";

connectDB();
export async function GET(request, { params }) {

    const { taskid } = params;
    console.log(taskid);
    try {
        const task = await Task.findById(taskid);
        return NextResponse.json(task, {
            message: "User found",
            status: 201
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "not found",
            success: false,

        })
    }


}
export async function POST() {

}
export async function PUT(request, { params }) {
    const { taskid } = params;
    const { title, content, status } = await request.json();
    try {
        let task = await Task.updateOne({ _id: taskid }, { $set: { title, content, status } })

        return NextResponse.json(task, {
            message: "Task Updated"
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Task not updated",
            success: false,
        });
    }


}
// export async function PUT(request, { params }) {
//     const { taskid } = params;
//     const { title, content, status } = await request.json();
//     const task = await Task.findById(taskid);
//     task.title = title;
//     task.content = content;
//     task.status = status
//     await task.save();
//     return NextResponse.json(task);

// }
export async function DELETE(request, { params }) {
    const { taskid } = params; 

    try {
        await Task.deleteOne({ _id: taskid });
        return NextResponse.json({
            message: "Task deleted",
            success: true,
            status: 201
        })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Task not deleted",
            success: false,
        });
    }

}