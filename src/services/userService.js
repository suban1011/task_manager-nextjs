import { httpAxios } from "@/utils/HttpAxiosHelper";

export async function registerUser(user) {
    const result = await httpAxios.post("/api/users", user).then((response) => response.data)
    return result;
}

export async function loginUser(loginData) {
    const result = await httpAxios.post("/api/login", loginData).then((response) => response.data)
    return result;
}

export async function currentUser() {
    const result = await httpAxios.get("/api/currentuser").then((response) => response.data);
    return result;
}

export async function logoutUser() {
    const result = await httpAxios.post("/api/logout").then((response) => response.data);
    return result;
}