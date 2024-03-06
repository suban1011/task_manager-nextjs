import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log("executed middleware...")
    const loginToken = request.cookies.get("loginToken")?.value;
    if (request.nextUrl.pathname === "/api/login" || request.nextUrl.pathname === "/api/users") {
        return;
    }
    const loggedInUserNotAccess = request.nextUrl.pathname === "/login" || request.nextUrl.pathname === "/signup";
    if (loggedInUserNotAccess) {
        if (loginToken) {
            return NextResponse.redirect(new URL('/profile/user', request.url))
        } else if (!loginToken) {
            // return NextResponse.redirect(new URL('/login', request.url))
            return null;
        }
        return NextResponse.next(redirect(new URL("/login", request.url)));
    }
    const logOutUserAccessingPrivatePath = request.nextUrl.pathname === "/profile/user" || request.nextUrl.pathname === "/profile/user/:path*" || request.nextUrl.pathname === "/show-task" || request.nextUrl.pathname === "/add-task";
    if (logOutUserAccessingPrivatePath) {
        if (!loginToken) {
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
    if (!loginToken) {
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({
                message: "Access Denied !!",
                success: false,
            }, {
                status: 401
            });
        }
        // } else {
        //     return NextResponse.redirect(new URL('/login', request.url))
        // }

    }

    // const loggedOutUserNotAccess = request.nextUrl.pathname === "/add-task" || request.nextUrl.pathname === "/show-task";
    // if (loggedOutUserNotAccess) {
    //     if (!loginToken) {
    //         return NextResponse.redirect(new URL('/login', request.url))
    //     }
    // }

    // const currentUser = request.nextUrl.pathname === "/api/currentuser";
    // if (currentUser) {
    //     if (!loginToken) {
    //         return NextResponse.redirect(new URL('/login', request.url))
    //     }
    // }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/api/:path*',
        '/add-task',
        '/login',
        '/profile/user/:path*',
        '/show-task',
        '/signup',

    ],
}