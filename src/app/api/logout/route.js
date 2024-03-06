import { NextResponse } from "next/server";

export async function POST() {
    const response = NextResponse.json({
        message: "Logged out !!",
        success: true
    });
    response.cookies.set("loginToken", "", {
        expires: new Date(),

    });
    return response;
}