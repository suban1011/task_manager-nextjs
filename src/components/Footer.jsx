import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white p-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-semibold">Work Manager</h3>
                        <p className="text-sm">Efficiently manage your work tasks with ease.</p>
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <div className="mr-4 mb-2">
                            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                            <ul className="list-none">
                                <li>
                                    <a href="#features">Features</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mr-4 mb-2">
                            <h4 className="text-lg font-semibold mb-2">Resources</h4>
                            <ul className="list-none">
                                <li>
                                    <a href="/docs">Documentation</a>
                                </li>
                                <li>
                                    <a href="/faq">FAQs</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-600 pt-4 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Work Manager. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
