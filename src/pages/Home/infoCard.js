import React from 'react';

const InfoCard = ({ img, cartTitle, cartText, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure><img className='pl-6' src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title  text-white">{cartTitle}</h2>
                <p className=' text-white'>{cartText}</p>
            </div>
        </div>
    );
};

export default InfoCard;