"use client"
import React from 'react'

// components/ContactForm.jsx
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simulate a form submission and handle the result
        try {
            // Replace this with your actual form submission logic (e.g., API request)
            // For demonstration purposes, we'll just simulate a successful submission after 2 seconds
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <div className="flex">
            <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                {formStatus === 'success' && (
                    <div className="mb-4 text-green-600 font-semibold">Form submitted successfully!</div>
                )}
                {formStatus === 'error' && (
                    <div className="mb-4 text-red-600 font-semibold">Oops! Something went wrong. Please try again.</div>
                )}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-600 text-sm font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-600 text-sm font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
            {/* Additional content on the right side */}
            <div className="flex items-center justify-center ml-4">
                {/* You can add additional content here */}
            </div>
        </div>
    );
};

export default ContactForm;


