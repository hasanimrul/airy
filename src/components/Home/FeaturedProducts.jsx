import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiFillStar } from "react-icons/ai";
import img1 from '../../assets/p2.webp'
import img2 from '../../assets/p5.webp'
import img3 from '../../assets/p6.webp'
import img4 from '../../assets/p7.webp'
import img5 from '../../assets/p8.webp'

import { Pagination, Navigation } from "swiper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
    AOS.init();
    return (
        <div className='mx-5 mt-5 text-center py-20'>
            <p className='font-serif italic font-xl' data-aos="zoom-out-down">Featured Products</p>
            <h1 className='text-4xl font-bold mb-10' data-aos="zoom-out-down">DRONE PRODUCTS</h1>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <div className='border text-center' data-aos="zoom-in">
                        <img src={img1} alt='one' className='' />
                        <div className='flex text-yellow-400 justify-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='my-2'>Drone Exclusive Model</p>
                        <p className='text-blue-500'>$84.19 <span className='text-black line-through'>$99.0</span></p>
                        <Link type="button" className="px-8 py-3 my-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Buy Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border text-center' data-aos="zoom-in">
                        <img src={img2} alt='one' className='' />
                        <div className='flex text-yellow-400 justify-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='my-2'>Drone Exclusive Model</p>
                        <p className='text-blue-500'>$84.19 <span className='text-black line-through'>$99.0</span></p>
                        <Link type="button" className="px-8 py-3 my-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Buy Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border text-center' data-aos="zoom-in">
                        <img src={img3} alt='one' className='' />
                        <div className='flex text-yellow-400 justify-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='my-2'>Drone Exclusive Model</p>
                        <p className='text-blue-500'>$84.19 <span className='text-black line-through'>$99.0</span></p>
                        <Link type="button" className="px-8 py-3 my-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Buy Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border text-center' data-aos="zoom-in">
                        <img src={img4} alt='one' className='' />
                        <div className='flex text-yellow-400 justify-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='my-2'>Drone Exclusive Model</p>
                        <p className='text-blue-500'>$84.19 <span className='text-black line-through'>$99.0</span></p>
                        <Link type="button" className="px-8 py-3 my-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Buy Now</Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border text-center' data-aos="zoom-in">
                        <img src={img5} alt='one' className='' />
                        <div className='flex text-yellow-400 justify-center'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                        </div>
                        <p className='my-2'>Drone Exclusive Model</p>
                        <p className='text-blue-500'>$84.19 <span className='text-black line-through'>$99.0</span></p>
                        <Link type="button" className="px-8 py-3 my-5 font-semibold rounded bg-blue-800 text-gray-100 hover:bg-gray-800 hover:text-white">Buy Now</Link>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default FeaturedProducts;