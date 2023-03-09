import React from 'react';
import { GiDeliveryDrone } from 'react-icons/gi';
import img from '../../assets/b2.webp'
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurStore = () => {
    AOS.init();
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='bg-center bg-cover text-center text-white bg-fixed' >
            <div className='backdrop-brightness-75 py-28 ' data-aos="zoom-in">
                <GiDeliveryDrone className='mx-auto text-5xl' />
                <h1 className='text-6xl font-bold tracking-widest mb-5'>SHOP OUR STORE</h1>
                <p className='text-5xl'>Camera Drone Usa SellsTop Name Brand Drones</p>
            </div>
        </div>
    );
};

export default OurStore;