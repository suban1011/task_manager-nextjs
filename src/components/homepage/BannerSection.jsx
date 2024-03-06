import React from 'react'
import pic from '../../../public/svg/task.svg'
import Image from 'next/image';

const BannerSection = () => {
    return (
        <div className="bg-blue-500 text-white py-[10px] px-[100px]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold mb-4">Your Work Manager</h1>
                    <p className="text-lg mb-4">Efficiently manage your work tasks with ease.</p>
                    <button className="bg-white text-blue-500 px-4 py-2 rounded-md font-medium">
                        Get Started
                    </button>
                </div>
                <div className="w-1/2">
                    <Image src={pic} alt='banner' height={'400'} width={'auto'} />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
