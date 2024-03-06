import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required !!']
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required !!"]
    },
    password: {
        type: String,
        require: [true, "Password is required !!"]
    },
    about: String,
    profileUrl: String,
})

export const User = mongoose.models.users || mongoose.model('users', UserSchema);