import React from 'react';
import chair from '../../assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{
            background: `url(${bg})`
        }}
            className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Welcome to Patient Portal, Your Medical Home on the Web
                        With Patient Portal, you can connect with your doctor through a convenient, safe and secure environment.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;