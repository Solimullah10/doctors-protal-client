import React from 'react';
import InfoCard from './infoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cartTitle='Opening Hour' bgClass="gre bg-gradient-to-r from-secondary to-primary" cartText='09:00 am to 10:30 pm' img={clock}></InfoCard>
            <InfoCard cartTitle='Our locations ' bgClass="bg-neutral" cartText='Upozila rod, Tangail' img={marker}></InfoCard>
            <InfoCard cartTitle='Contact Us' bgClass="gre bg-gradient-to-r from-secondary to-primary" cartText='+880 1780262203' img={phone}></InfoCard>
        </div>
    );
};

export default Info;