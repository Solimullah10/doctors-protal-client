import React from 'react';

const Reviews = ({ review }) => {
    return (
        < div className="card lg:max-w-lg bg-base-100 shadow-xl pb-10" >
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div className='flex ml-10'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                        <img src={review.img} alt="" />
                    </div>
                </div>
                <div className='ml-5 '>
                    <h4 className="text-xl">{review.name}</h4>
                    <p>{review.location}</p>
                </div>
            </div>
        </div >
    );
};

export default Reviews;