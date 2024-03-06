import Image from 'next/image';
import React from 'react'

// components/TestimonialSection.jsx
const TestimonialSection = () => {
    const testimonials = [
        {
            name: "John Doe",
            role: "Project Manager",
            comment:
                "The work manager has greatly improved our team's collaboration and task tracking. It's a powerful tool that we rely on every day.",
        },
        {
            name: "Jane Smith",
            role: "Freelancer",
            comment:
                "As a freelancer, staying organized is key. This work manager provides the perfect platform to manage projects and meet deadlines with ease.",
        },
        {
            name: "Alex Johnson",
            role: "Developer",
            comment:
                "I love the simplicity and effectiveness of this work manager. It helps me stay focused on what matters most - writing code and delivering quality work.",
        },
    ];

    return (
        <div className="bg-gray-100 py-12 px-[100px]">
            <div className="container mx-auto">
                <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-md shadow-md">
                            <p className="mb-4">{testimonial.comment}</p>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={`/avatar${index + 1}.jpg`} // Replace with the path to your avatar images
                                        height={'300'} width={'300'}
                                        alt={`${testimonial.name}'s Avatar`}
                                        className="h-8 w-8 rounded-full"
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium">{testimonial.name}</p>
                                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
