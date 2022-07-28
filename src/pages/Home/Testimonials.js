import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Reviews from '../Reviews/Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Elon mask',
            review: "",
            location: "california",
            img: people1
        },
        {
            _id: 2,
            name: 'aminur',
            review: "",
            location: "california",
            img: people2
        },
        {
            _id: 3,
            name: 'Al amin',
            review: "",
            location: "california",
            img: people3
        },
    ]
    return (
        <section>
            <div >
                <div className='flex justify-between'>
                    <div>
                        <h4 className='text-xl text-primary font-bold'>testimonials</h4>
                        <h2 className='text-3xl'>What our Patients say</h2>
                    </div>
                    <div>
                        <img className='w-24 lg:w-48' src={quote} alt="quote" />
                    </div>
                </div>

                <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                    {
                        reviews.map(review => <Reviews
                            key={review._id}
                            review={review}
                        ></Reviews>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Testimonials;