import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';
import PrimaryButton from '../Shared/PrimaryButton';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            description: "Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a person's teeth to improve health and reduce the risk of cavities. ",
            img: fluoride,
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            description: "A cavity filling is when the dentist fills the opening in your tooth with some kind of material. The hope is to urge obviate your symptoms and make the...",
            img: cavity,
        },
        {
            _id: 1,
            name: 'Teeth Whitening',
            description: "Teeth Whitening is a quick and painless in-office whitening system that provides dramatic results—teeth that are up to eight shades whiter!",
            img: whitening,
        },
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
                <h2 className='text-primary font-bold text-xl uppercase'>Our Services</h2>
                <h3 className='text-4xl'>Services We Provide</h3>
            </div >
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 my-10'>
                <div className='md:ml-24'>
                    <img width={400} height={500} src={treatment} alt="treatment" />
                </div>
                <div className='md:mt-40'>
                    <h2 className='text-4xl text-bold mb-4'>Exceptional Dental Care, on Your Terms</h2>
                    <p className='pb-6' pb-12>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Services;