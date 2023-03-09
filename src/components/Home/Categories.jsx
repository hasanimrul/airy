import React from 'react';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import img1 from '../../assets/category1.avif'
import img2 from '../../assets/category2.avif'
import img3 from '../../assets/category3.avif'
import img4 from '../../assets/category4.avif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    AOS.init();
    return (
        <div className='m-20'>
            <div className='grid grid-cols-2 gap-5 mb-5' data-aos="zoom-in-up">
                <div className='bg-gray-200 text-center px-auto py-5'>
                    <h2 className='text-3xl uppercase font-bold'>Mavic Series</h2>
                    <p className='text-xl tracking-wider'>Industry-leading camera drones</p>
                    <img src={img1} alt='' className='mx-auto hover:scale-125 transition-all duration-500 cursor-pointer' />
                    <Link className='uppercase flex items-center justify-center gap-3 hover:gap-5'>Shop Now <AiOutlineDoubleRight /></Link>
                </div>
                <div className='bg-gray-200 text-center px-auto py-5' data-aos="zoom-in-up">
                    <h2 className='text-3xl uppercase font-bold'>FLAGSHIP CAMERA DRONE</h2>
                    <p className='text-xl tracking-wider'>Prime Early Access deals</p>
                    <img src={img2} alt='' className='mx-auto hover:scale-125 transition-all duration-500 cursor-pointer' />
                    <Link className='uppercase flex items-center justify-center gap-3 hover:gap-5'>Shop Now <AiOutlineDoubleRight /></Link>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-5' data-aos="zoom-in-up">
                <div className='bg-gray-200 text-center px-auto py-5'>
                    <h2 className='text-3xl uppercase font-bold'>FLY MINI, CREATE BIG</h2>
                    <p className='text-xl tracking-wider'>Go Pro To Save an Extra 5%</p>
                    <img src={img3} alt='' className='mx-auto hover:scale-125 transition-all duration-500 cursor-pointer' />
                    <Link className='uppercase flex items-center justify-center gap-3 hover:gap-5'>Shop Now <AiOutlineDoubleRight /></Link>
                </div>
                <div className='bg-gray-200 text-center px-auto py-5' data-aos="zoom-in-up">
                    <h2 className='text-3xl uppercase font-bold'>THE ALL-IN-ONE DRONE</h2>
                    <p className='text-xl tracking-wider'>Sale extra 25% off for accessories</p>
                    <img src={img4} alt='' className='mx-auto hover:scale-125 transition-all duration-500 cursor-pointer' />
                    <Link className='uppercase flex items-center justify-center gap-3 hover:gap-5'>Shop Now <AiOutlineDoubleRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;