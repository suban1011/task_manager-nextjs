import React from 'react'

// components/FeatureSection.jsx
const FeatureSection = () => {
    const features = [
        {
            icon: "📅",
            title: "Task Scheduling",
            description: "Efficiently schedule and organize your tasks based on priority and deadlines.",
        },
        {
            icon: "🚀",
            title: "Productivity Boost",
            description: "Boost your productivity with a streamlined workflow and task management.",
        },
        {
            icon: "🔍",
            title: "Quick Search",
            description: "Easily search and find your tasks, projects, and important information.",
        },
    ];

    return (
        <div className="container mx-auto my-12 px-[100px]">
            <h2 className="text-3xl font-semibold mb-8">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-md shadow-md">
                        <div className="flex items-center mb-4">
                            <span className="text-2xl mr-2">{feature.icon}</span>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                        </div>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;

