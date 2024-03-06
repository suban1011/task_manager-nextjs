import { User } from "@/utils/models/userModel";
import { NextResponse } from "next/server";



//delete user
export async function DELETE(request, { params }) {
    const { userid } = params

    try {
        await User.deleteOne({ _id: userid })
        return NextResponse.json({ message: 'user deleted', success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: 'failed to delete',
            success: false
        })
    }

}

//get user
export async function GET(request, { params }) {
    const { userid } = params;
    try {
        const user = await User.findById(userid).select("-password");
        return NextResponse.json({ user })
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "User not found",
            success: false
        })
    }

}
//update user
export async function PUT(request, { params }) {
    const { userid } = params;
    const { name, email, password, about, profileUrl } = await request.json();
    try {
        await User.updateOne({ _id: userid }, {
            $set: { name, email, password, about, profileUrl }
        })
        return NextResponse.json({
                    message: "User updated",
                    success: true
                });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "User not Updated",
            success: false,
        })
    }
}

// export async function PUT(request, { params }) {
//     const { userid } = params;
//     const { name, email, password, about, profileUrl } = await request.json();
//     try {
//         await User.updateOne({ _id: userid },
//             { $set: { name, email, password, about, profileUrl } })

//         return NextResponse.json({
//             message: "User updated",
//             success: true
//         });
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json(updatedUser, {
//             message: "User not updated",
//             success: false
//         }

//     }
// }
